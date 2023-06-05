import Context from './createContext';
import { useState, useContext } from 'react'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

const NewProduct = () => {
    const { createProduct } = useContext(Context)
    console.log(createProduct)
    const [marca, setTitle] = useState("")
    const [modelo, setmodelCars] = useState("")
    const [precio, setPrice] = useState("")
    const [Año, setAge] = useState("")
    const [Transmisión, setTransmission] = useState("")
    const [Cambios, setSpeed] = useState("")
    const [img, setImg] = useState("")
    const [Carrocería, setBodyCar] = useState("")
    const [Motor, setEngine] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            marca,
            modelo,
            precio,
            img,
            Año,
            Transmisión,
            Cambios,
            Carrocería,
            Motor,
            like: "false",
            id: Date.now()
        }
        createProduct(product)
    }



    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", bgcolor: 'white', height: '80vh' }} >

                    <form action="" onSubmit={handleSubmit} >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                p: 2,
                                width: 500,
                                maxWidth: '100%',
                                gap: "5px",


                            }}
                        >

                            <TextField fullWidth label="Marca" value={marca} onChange={({ target }) => { setTitle(target.value) }} />
                            <TextField fullWidth label="Modelo" value={modelo} onChange={({ target }) => { setmodelCars(target.value) }} />
                            <TextField fullWidth label="Precio" value={precio} onChange={({ target }) => { setPrice(target.value) }} />
                            <TextField fullWidth label="Año" value={Año} onChange={({ target }) => { setAge(target.value) }} />
                            <TextField fullWidth label="Transmisión" value={Transmisión} onChange={({ target }) => { setTransmission(target.value) }} />
                            <TextField fullWidth label="Cambios" value={Cambios} onChange={({ target }) => { setSpeed(target.value) }} />
                            <TextField fullWidth label="Carrocería" value={Carrocería} onChange={({ target }) => { setBodyCar(target.value) }} />
                            <TextField fullWidth label="Motor" value={Motor} onChange={({ target }) => { setEngine(target.value) }} />
                            <TextField fullWidth label="Imagen" value={img} onChange={({ target }) => { setImg(target.value) }} />
                        </Box >
                        <Box component="span" sx={{ display: "flex", justifyContent: "center" }}>
                            <Button style={{ marginTop: "px" }} variant="contained" disableElevation type='submit'>
                                Agregar vehículo
                            </Button>
                        </Box>
                    </form>
                </Box >
            </Container>
        </>
    )


}

export default NewProduct



/*   <form className='form' onSubmit={handleSubmit}>
        <input type="text" value={marca} onChange={({ target }) => { setTitle(target.value) }} />
        <input type="text" value={modelCars} onChange={({ target }) => { setmodelCars(target.value) }} />
        <input type="text" value={price} onChange={({ target }) => { setPrice(target.value) }} />
        <input type="text" value={img} onChange={({ target }) => { setImg(target.value) }} />
        <button type='submit'>hola</button>
    </form> */