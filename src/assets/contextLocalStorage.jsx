import { useState, useEffect, createContext } from "react";

export const Context = createContext()


const initialStateUser = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];


const ProviderVehiculos = ({ children }) => {

    const [cars, setCars] = useState(initialStateUser)


    const getVehiculos = async () => {
        const res = await fetch("./vehiculos.json")
        const data = await res.json()
        setCars(data)
    }


    useEffect(() => { getVehiculos(); }, [])
    useEffect(() => { localStorage.setItem("product", JSON.stringify(cars)); }, [cars])
    const createProduct = (product) => {

        setCars([product, ...cars])


    }

    return (

        <Context.Provider value={{ createProduct, cars }}>{children}</Context.Provider>

    )

}

export default ProviderVehiculos
