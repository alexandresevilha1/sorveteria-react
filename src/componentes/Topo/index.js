import { Link } from 'react-router-dom'
import './Topo.css'

export default function Topo() {
    return (
        <div>
            <header>

                <div className='limitar-secao menu'>
                    <img src="assets/logo.png" alt="logo"/>

                    <div className='links-menu'>
                        <Link to="/">Home</Link>
                        <Link to="/Sabores">Sabores</Link>
                        <Link to="/Sobre">Sobre</Link>
                    </div>
                </div>

            </header>
        </div>
    )
}