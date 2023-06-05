import { useState, useEffect } from "react";
import Context from "./createContext";

// intente utilizar localStorage para guardar la información de productos nuevos pero no se pudo al tener muchar información en el json
//const initialStateUser = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
const ProviderVehiculos = ({ children }) => {

    const [vehiculos, setVehiculos] = useState([])


    const getVehiculos = async () => {
        const res = await fetch("./publicaciones.json")
        const data = await res.json()
        setVehiculos(data)
    }


    useEffect(() => { getVehiculos(); }, [])

    // useEffect(() => { localStorage.setItem("product", JSON.stringify(product)); }, [product])
    // const initialStateUser = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];




    /*  const [cars, setCars] = useState(initialStateUser)
  
  
      const getCars = async () => {
          const res = await fetch("./vehiculos.json")
          const data = await res.json()
          setCars(data)
      }
  */

    // useEffect(() => { getCars(); }, [])
    //   useEffect(() => { localStorage.setItem("product", JSON.stringify(cars)); }, [cars])
    const createProduct = (product) => {

        setVehiculos([product, ...vehiculos])


    }

    return (

        <Context.Provider value={{ vehiculos, setVehiculos, createProduct }}>{children}</Context.Provider>

    )

}

export default ProviderVehiculos
