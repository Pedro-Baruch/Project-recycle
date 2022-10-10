import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../../Components/Button'
import './style.css'

export const Home = () => {

    const [ad, setAd] = useState([])

    useEffect(() => {
        axios("http://localhost:3000/ads").then(response => {
          console.log(response.data)
        })
      }, [])

    return (
        <main>
            <div className="Container">
           

                <h1>Registre seu anúncio</h1>
            
            <div className='form'>
                  <label htmlFor="name">Name:</label>
                  <input className='input-controll' />
                </div>
            <div className='form'>
                  <label htmlFor="descrição">Descrição:</label>
                  <input className='input-controll' />
                </div>
            <div className='form'>
                  <label htmlFor="descrição">Descrição:</label>
                  <input className='input-controll' />
                </div>
            <div className='form'>
                  <label htmlFor="name">Preço(R$):</label>
                  <input className='input-controll' />
                </div>
           
<Button children='Enviar anuncio' height='50px' width='150px' onClick={()=>console.log('click')}></Button>

            </div>

            
        </main>

    )
}