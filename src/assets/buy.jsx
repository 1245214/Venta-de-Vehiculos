import "./buy.css"
import { useContext, useState } from 'react'
import ContextVehiculos from './createContext'
import { useNavigate } from 'react-router-dom'
import { Context } from './contextUsuarios'
//trabaje con el frameWork UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export default function Carrito() {
    const { users } = useContext(Context)

    const vehiculos = useContext(ContextVehiculos)

    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    if (count < 0) {
        return navigate('/favorite')
    }
    //const seleccionVehiculos = vehiculos.vehiculos.map((z) => z.marca)

    // let numeroSinPuntos = seleccionVehiculos.precio.replace(/\./g, "");

    // const precio = new Intl.NumberFormat().format(numeroSinPuntos * count);


    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));


    return (

        <>

            {vehiculos.vehiculos.map((vehiculo) =>
                <Container maxWidth="xl" style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                    <Box sm={{ bgcolor: '#cfe8fc', height: '35vh', display: "flex", }} >
                        <Card sx={{ width: "65rem", height: '8rem', display: "flex", marginTop: "1rem" }}>
                            <CardMedia
                                sx={{ width: "25rem", height: 127.9, display: "flex" }}
                                image={vehiculo.img}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {vehiculo.marca}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ display: "flex", width: "25rem" }} >
                                    <div>
                                        <span>Propietario: {vehiculo.Propietario}</span>
                                        <div>  Apellidos: {vehiculo.Apellidos}</div>
                                        <div> comuna : {vehiculo.Comuna}</div>
                                    </div>
                                    <div style={{ marginLeft: "30px" }}>
                                        <div>Celular: {vehiculo.Celular}</div>
                                        <div>Precio: ${vehiculo.precio}</div>
                                    </div>
                                </Typography>
                            </CardContent>
                            <Box component="span" sx={{ p: 2, display: "flex", flexDirection: "column", width: "10rem", height: "8rem", marginLeft: "150px", gap: '5px' }}>
                                <ColorButton variant="contained" onClick={() => { setCount(count + 1) }} style={{ height: "2rem" }}>+</ColorButton>
                                <div><strong style={{ marginLeft: "30px" }}> {count}</strong> </div>     <ColorButton variant="contained" onClick={() => { setCount(count - 1) }} style={{ height: "2rem" }}>-</ColorButton>
                            </Box>
                            <Box component="span" sx={{ p: 2, display: "flex", width: "17rem", height: "2rem" }}>

                                <div>


                                    <h4 style={{ marginTop: "35px" }} >$ {Intl.NumberFormat().format(vehiculo.precio.replace(/\./g, "") * count)}</h4>
                                </div>

                            </Box>
                        </Card>

                        <Box component="span" sx={{ p: 2, display: "flex", width: "17rem", height: "2rem" }}>

                        </Box>
                    </Box>
                </Container >)}

        </>
    )


}

