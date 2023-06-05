import { useContext } from 'react'
import Context from './createContext'
import { useNavigate } from 'react-router-dom';
import "./favorite.css"
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


export const Favorite = () => {
    const vehiculos = useContext(Context)

    console.log(vehiculos)

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const navigate = useNavigate()

    return (
        <Container style={{ display: "flex", justifyContent: "start", paddingTop: "20px", paddingBottom: "20px" }} maxWidth="xl">

            {vehiculos.vehiculos.map((vehiculo) =>
                <Container maxWidth="xl" style={{ width: "30rem" }}>

                    {vehiculo.liked ? null :
                        (<Card sx={{ width: "19rem" }}>

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
                                title={vehiculo.marca}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={vehiculo.img}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <ul>

                                        <li>Modelo: {vehiculo.modelo}</li>
                                        <li>Año: {vehiculo.Año}</li>
                                        <li>Combustible: {vehiculo.Combustible}</li>
                                        <li>Cilindrada: {vehiculo.Motor}</li>
                                        <li>Transmisión: {vehiculo.Trasmisión}</li>
                                        <li>Cambios: {vehiculo.Cambios}</li>
                                        <li>Neúmaticos: {vehiculo.Neumáticos}</li>
                                        <li>Carrocería: {vehiculo.Carrocería}</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" onDoubleClick={() => {
                                    vehiculos.filter((item) => item.id === id);


                                }}>
                                    {vehiculo.liked ? (<FavoriteIcon />) : (<FavoriteIcon style={{ color: "red" }} />)}
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
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Datos del propietario</Typography>
                                    <Typography paragraph>
                                        <div>Propietario: {vehiculo.Propietario}</div>
                                        <div>Comuna: {vehiculo.Comuna}</div>
                                        <div>Provincia: {vehiculo.Provincia}</div>
                                        <div>Región: {vehiculo.Región}</div>
                                        <div>Celular: {vehiculo.Celular}</div>
                                    </Typography>

                                </CardContent>
                            </Collapse>
                        </Card>)}

                </Container>)}

        </Container>
    )
}


