import './test.css'
import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Context } from './contextUsuarios'
import ContextVehiculos from './createContext'



export default function Nativo() {

    const { users } = useContext(Context)




    return (
        <div className="navbar-container" style={{}}>
            <NavLink to='/'> <h2>Home</h2></NavLink>
            <NavLink to='/galeria'><h2>Galeria</h2></NavLink>
            <h1 className='titulo'>Ventas de Vehiculos</h1>

            {!users.email ? <NavLink to='/registro'> <h2>Registro de usuario</h2></NavLink> : null}

            {users.email ? <NavLink to='/perfil' ><h2>Perfil usuario</h2></NavLink> : null}
            {users.email ? <NavLink to='/favorite' ><h2>Favoritos</h2></NavLink> : null}
            {users.email ? <NavLink to='/carrito'> <i class="fa-solid fa-cart-shopping "></i> </NavLink> : null}

        </div>





    )


}
