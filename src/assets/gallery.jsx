

import './gallery.css'
import { useState, useEffect, useContext } from 'react'
import Context from './createContext'

//FrameWork UI
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Gallery() {
    const { vehiculos, setVehiculos } = useContext(Context)






    const [buscar, setBuscar] = useState('')
    const [filtrar, setFiltrarVehiculos] = useState([])

    console.log(filtrar)

    useEffect(() => { buscarVehiculos(); }, [buscar])
    //useEffect(() => { if (cars === 0) getCars(); }, [buscar])
    const buscarVehiculos = () => {

        const filtrarVehiculos = vehiculos.filter((vehiculo) => {
            if (vehiculo.marca.toLowerCase().includes(buscar.toLowerCase() || vehiculo.Cambios))
                return vehiculo
        }
        )

        setFiltrarVehiculos(filtrarVehiculos)

    }
    /*intente incorporar localStore al desafío pero no pude seleccionar el array
        const getCars = () => {
    
            const filtrarVehiculos = cars.filter((vehiculo) => {
                if (vehiculo.marca.toLowerCase().includes(buscar.toLowerCase() || vehiculo.Cambios))
                    return vehiculo
            }
            )
    
            setFiltrarVehiculos([...filtrar, filtrarVehiculos])
        }*/

    const sedan = 'Sedan'

    const coupe = 'Coupe'


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <div className='input-container'>
            <article className='input-1'>
                <input type="text" className='input' placeholder='Busca la marca del vehiculo' onChange={(e) => { setBuscar(e.target.value); buscarVehiculos(); getCars() }} />
            </article>
            <Container maxWidth="xl" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className='sedan-img'>
                    <span>Sedan</span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28LfYKh1qqtdEckKHF2LrcF_GkhWInAFFag&usqp=CAU' className='gallery-img' onClick={() => { setFiltrarVehiculos(vehiculos.filter((vehiculo) => (vehiculo.Carrocería.includes(sedan)))) }} /></div>
                <div className='sedan-img'>
                    <span>Hatchback</span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLmRGoRYOz2QQ9BZkOGkn6PLNIjlD-i4oTg&usqp=CAU' className='gallery-img' onClick={() => {
                        setFiltrarVehiculos(vehiculos.filter((vehiculo) => (vehiculo.Carrocería.includes('Hatchback'))))
                    }} /></div>
                <div className='sedan-img'>
                    <span>Coupe</span>
                    < img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uiCPYH_Lx_TmAC6WetBzZee5a1KSdQauCA&usqp=CAU' className='gallery-img' onClick={() => {
                        setFiltrarVehiculos(vehiculos.filter((vehiculo) => (vehiculo.Carrocería.includes(coupe))))
                    }} /></div>
                <div className='sedan-img'>
                    <span>Pick-Up</span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBrLfe6KOFmh1TR6xFNKjfzYmxoyrVWNCHw&usqp=CAU' className='gallery-img' onClick={() => {
                        setFiltrarVehiculos(vehiculos.filter((vehiculo) => (vehiculo.Carrocería.includes("Pick-Up"))))
                    }} /></div>
                <div className='sedan-img'>
                    <span>SUV</span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnPvnafUtHOFvi-JJQWVf44eJkgi4PWt3tw&usqp=CAU' className='gallery-img' onClick={() => {
                        setFiltrarVehiculos(vehiculos.filter((vehiculo) => (vehiculo.Carrocería.includes("SUV"))))
                    }} /></div>
                <div className='sedan-img'>
                    <span>Station-wagon</span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0d0oUzCa3TBd3eeRLL_xP4jf1wMxSgsacpw&usqp=CAU' className='gallery-img' onClick={() => {
                        setFiltrarVehiculos(vehiculos.filter((vehiculo) => (vehiculo.Carrocería.includes("Station-Wagon"))))
                    }} /></div>
            </Container>


            <Container maxWidth="xl" style={{ display: "flex", width: "100%", justifyContent: "center", gap: "20px" }}>


                {filtrar.map((file, i) => (
                    <Card sx={{ width: "19rem" }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={file.marca}
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={file.img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <ul>

                                    <li>Modelo: {file.modelo}</li>
                                    <li>Año: {file.Año}</li>
                                    <li>Combustible: {file.Combustible}</li>
                                    <li>Cilindrada: {file.Motor}</li>
                                    <li>Transmisión: {file.Trasmisión}</li>
                                    <li>Cambios: {file.Cambios}</li>
                                    <li>Neúmaticos: {file.Neumáticos}</li>
                                    <li>Carrocería: {file.Carrocería}</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" onDoubleClick={() => {
                                const estadoActual = filtrar[i].liked;
                                if (estadoActual) { filtrar[i].liked = false } else { filtrar[i].liked = true }
                                setVehiculos([...filtrar])

                            }}>
                                {file.liked ? (<FavoriteIcon />) : (<FavoriteIcon style={{ color: "red" }} />)}
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                    </Card>))}

            </Container>

        </div >

    )
}

