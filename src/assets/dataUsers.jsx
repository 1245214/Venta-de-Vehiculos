import { useState, useContext } from 'react'
import { Context } from './contextUsuarios'
import { NavLink } from 'react-router-dom'

const DataUsers = () => {

    const { ingresar } = useContext(Context)

    const [description, setDescripcion] = useState("")

    const [placeFavorite, setPlaceFavorite] = useState("")
    const [agregar, setAgregar] = useState([])
    console.log(agregar)
    const handleSubmit = (e) => {
        e.peventDefault();
        const users = { description, placeFavorite }
        ingresar(users)

    }


    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Descripcion' onChange={(e) => { setDescripcion(e.target.value) }} />
                <input type="text" placeholder='favoritos' onChange={(e) => { setPlaceFavorite(e.target.value) }} />
                <input type="text" />
                <button onSubmit={handleSubmit}>Agregar información</button>
            </form>
        </>

    )


}

export default DataUsers