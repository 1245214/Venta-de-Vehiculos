import './home.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState, useContext } from 'react'
import { Context } from './contextUsuarios'
import { useNavigate } from 'react-router-dom'
//const Swal = require('sweetalert2')



// trabajar con css nativo, para luego transformarlo MUI

export default function Home() {

    const navigate = useNavigate()
    const { login } = useContext(Context)


    const [usuarios, setCapturarUsuario] = useState('')

    const [contraseñas, setCapturarContraseña] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = login(usuarios, contraseñas);

        if (user) {

            return navigate("/perfil");
        }

        else {
            alert("no sirve")
        }

    }

    return (
        <section className='padre-container'>
            <div className='container'>

                <div className='container-xxl'><div className='card-container'> <div className='effect-card-container'> <img src='https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='img1' /></div></div>
                    <div className='card1-container'> <div className='effect-card1-container'> <img src='https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufdisplayDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='img2' /></div></div></div>
                <section className='mui-container' style={{}}>
                    <h3 style={{ color: 'whitemoske' }}>Inicio de sesion</h3>
                    <Box sx={{ '& > :not(style)': { ml: 5 } }}>
                        <form action="" onSubmit={handleSubmit}>
                            <FormControl variant="standard" >
                                <InputLabel htmlFor="input-with-icon-adornment">Usuario</InputLabel>
                                <Input value={usuarios} onChange={({ target }) => { setCapturarUsuario(target.value) }}
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }

                                />
                            </FormControl >
                            <TextField
                                value={contraseñas}
                                id="input-with-icon-textfield"
                                label="Contraseña"
                                onChange={({ target }) => { setCapturarContraseña(target.value) }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                            />
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Olvidaste tu usuario/contrasena" variant="standard" />

                            </Box>
                            <button type="submit" onSubmit={handleSubmit} style={{ marginTop: "10px", marginLeft: "40px", width: "7rem", height: "2rem", background: "whitesmoke", border: "none", borderRadius: "10px", cursor: "pointer" }} className='btn-1'> Presionar</button>
                        </form>
                    </Box>

                </section>

            </div>
            <section className='container-xl' >
                <div className='descripcion-container'>
                    <div className='contenido'>
                        <h1>Vision de la empresa</h1>
                        <p className='parrafo'>Nuestra misión está encaminada hacia la excelencia, es decir, hacia la total satisfacción del cliente, así como la de los profesionales que la integran, un comportamiento medioambiental respetuoso y la distinción del liderazgo.</p>
                    </div>
                </div>
            </section>
            <div className='footer-container'>
                <h1>Derechos reservados 2023</h1>
            </div>
        </section>

    )
}