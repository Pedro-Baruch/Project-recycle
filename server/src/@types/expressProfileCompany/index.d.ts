declare namespace Express {
    export interface Request {
        company: {
            profileId: string
            companyId: string
        }
    }
}