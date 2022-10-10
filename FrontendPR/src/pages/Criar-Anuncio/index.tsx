import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../../Components/Button'
import './style.css'



export const CriarAnuncio = () => {



    const [ad, setAd] = useState([])

    useEffect(() => {
        axios("http://localhost:3000/ads").then(response => {
          console.log(response.data)
        })
      }, [])


    return (
        <main>
            <div className="Container">
                <h1>Registre Seu Anuncio</h1>
                <form className="form" onSubmit={() => console.log('')}>

                    <div className='bloco'>

                    <label>Titulo: </label>
                    <input
                        className='input'
                        type="text"
                        name="titulo"
                        placeholder="Titulo"
                        // value={this.state.email}
                        //  onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>

                    <div className='bloco'>

                    <label>Descrição: </label>
                    <input
                        className='input'
                        type="text"
                        name="descrição"
                        placeholder="Descrição"
                        // value={this.state.email}
                        //  onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>

                    <div className='bloco'>

                    <label>Preço: </label>
                    <input
                        className='input'
                        type="text"
                        name="valor"
                        placeholder="Valor(R$)"
                        // value={this.state.email}
                        //  onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>

                    <div className='bloco'>

                    <label>tags: </label>
                    <input
                        className='input'
                        type="text"
                        name="tags"
                        placeholder="#tags"
                        // value={this.state.email}
                        //  onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>

                    <div className='bloco'>

                    <label>Valor: </label>
                    <input
                        className='input'
                        type="text"
                        name="valor"
                        placeholder="Valor(R$)"
                        // value={this.state.email}
                        //  onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>
                    <Button children='add' height='50px' width='120px' onClick={() => console.log('')} />
                </form>

            </div>


        </main>

    )
}