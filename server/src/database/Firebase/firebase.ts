import { NextFunction, Request, Response } from "express";

import admin from 'firebase-admin';

var serviceAccount = require("../../config/firebase-key.json");

export const BUCKET = 'project-recycle-6649d.appspot.com'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

export const bucket = admin.storage().bucket()


export const uploadImg = (req: Request, res: Response, next: NextFunction) => {
    if(!req.file) {
        return next()
    }

    const img  = req.file
    const fileName = `${Date.now()}.${img.originalname.split(".").pop()}`

    const file = bucket.file(fileName)

    const stream = file.createWriteStream({
        metadata: {
            contentType: img.mimetype
        }
    })

    stream.on('error', (e) => {
        console.log(e)
    })

    stream.on('finish', async() => {
        await file.makePublic()

        const firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${fileName}`

        req.imgUrl = {
            url: firebaseUrl
        }
        
        next()
    })

    stream.end(img.buffer)
}