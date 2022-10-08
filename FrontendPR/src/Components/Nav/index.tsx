import { Link } from 'react-router-dom'
import './styles.css'



export const Navigation = () => {


    return (
        <nav className='nav'>
            <Link to='/'>
                <p>anuncio</p>
            </Link>
            <Link to='/create'>
                <p>empresa</p>
            </Link>
            
            
        </nav>

    )
}
