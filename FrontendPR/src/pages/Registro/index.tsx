import './reg.css'



export const Registro = () => {

    return (
        <div className='Container-Registro'>

            <div className='aside-registro'>
                <h1 className='title'>faça login <br /> É participe da nossa comunidade</h1>
                <img src="../../../assets/recycling-animate.svg" className='img-recicle' />
            </div>

            <form className='registro'>

                
                <div className='Card-registro'>
                <h1>registro</h1>

                    <div className='TextField'>
                        <label> Name: </label>
                        <input type="text" name="name" />
                    </div>

                    <div className='TextField'>
                        <label> Email: </label>
                        <input type="text" name="Email" />
                    </div>

                </div>
            </form>


        </div>

    )



}