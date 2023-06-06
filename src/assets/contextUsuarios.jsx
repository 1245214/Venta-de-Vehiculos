import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext()

const initialStateUser = localStorage.getItem("selectionUsers")
    ? JSON.parse(localStorage.getItem("selectionUsers"))
    : [];

const initialStateUsers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
const Usuarios = ({ children }) => {

    const navigate = useNavigate()

    const [selectionUsers, setSelectionUser] = useState(initialStateUser)

    const [users, setUsers] = useState(initialStateUsers)


    const getUsersSelect = async () => {

        const res = await fetch('./users.json')
        const data = await res.json()
        setSelectionUser(data)
    }

    useEffect(() => { localStorage.setItem('selectionUsers', JSON.stringify(selectionUsers)); }, [selectionUsers])

    useEffect(() => {
        if (selectionUsers.length === 0) {
            getUsersSelect();
        }

    }, []);



    const login = (usuarios, contraseñas) => {
        const getUsers = selectionUsers.find((user) => user.email === usuarios && user.password === contraseñas)

        if (getUsers) {

            setUsers(getUsers)
        }

        return getUsers;

    }
    useEffect(() => {
        if (users) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users]);
    const register = (user) => {
        console.log(user)
        const getUser = selectionUsers.find((selection) => selection.email === user.email)
        if (user.nombre.length === 0 || user.apellidos.length === 0 || user.celular.length === 0 || user.comuna.length === 0 || user.provincia.length === 0 || user.región.length === 0 || user.email.length === 0 || user.contraseña.length === 0 || user.comprobarContraseña.length === 0) {
            alert('llenar campos')
            return navigate('/registro')
        }
        else if (user.contraseña != user.comprobarContraseña) {
            alert('contraseñas desiguales')
            return navigate("/registro")

        }
        else if (getUser)
            return user
        setUsers(user);
        setSelectionUser([...selectionUsers, user]);






    }

    return (

        <Context.Provider value={{ users, login, register }}>{children}</Context.Provider>


    )

}

export default Usuarios