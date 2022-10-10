import './styles.css'
import { useEffect, useState } from 'react'


interface Post {

  id: number
  titulo: string
  nome: string
  Descrição: string
  Preço: number
}

export function CarsFetchPage() {
  const [cars, setCars] = useState<Post[]>([])

  useEffect(() => {
    const URL = 'http://localhost:3000/posts'
    const options: RequestInit = {
      method: 'GET',
    }

    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => setCars(data))

  }, [])

  return (
    <div className="App">
      <div className='Card'>

        <ul className='AA' style={{
          color: "black",
          fontSize: "23px",
         
        }}>
          

          {cars.map(car => (
          <section className='box-anuncio'>
            <li key={car.id}>
              Nome: {car.nome}
              <br />Descrição : {car.Descrição}
              <br />Preço: {car.Preço}
              <br />Titulo: {car.titulo}
              </li>
            </section>
           )
           
           )
          }
        </ul>
      </div>

    </div>
  )
}