import './profile.css'
import { useContext, useState } from 'react'
import { Context } from './contextUsuarios'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
//import { purple } from '@mui/material/colors';
//const Swal = require('sweetalert2')
const registroUsuarios = () => {

    const { register } = useContext(Context)


    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [celular, setCelular] = useState('')

    const [comuna, setComuna] = useState('')
    const [provincia, setProvincia] = useState('')
    const [región, setRegión] = useState('')

    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [comprobarContraseña, setComprobarContraseña] = useState('')

    const navigate = useNavigate()


    const handlesubmit = (e) => {

        navigate('/perfil')


        e.preventDefault();
        const users = register({
            nombre,
            apellidos,
            celular,
            comuna,
            provincia,
            región,
            email,
            contraseña,
            comprobarContraseña,
            id: Date.now()

        })

        if (users) {
            alert('/not')
            return navigate("/registro")
        }




    }
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));


    return (


        <div className='flex-container'>
            <form className='pf-form-container' onSubmit={handlesubmit}  >
                <Box
                    component="form"
                    xl={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' }, border: "2px solid purple"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nombre"
                                defaultValue="Nombre"
                                value={nombre} placeholder='Nombre (s)' type="text" onChange={(e) => { setNombre(e.target.value) }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Apellidos"
                                defaultValue="Apellidos"
                                value={apellidos} placeholder='Apellidos' type="text" onChange={(e) => { setApellidos(e.target.value) }}
                            />
                            <TextField
                                id="outlined-number"
                                label="Celular"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => { setCelular(e.target.value) }}
                            />

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }} >

                            <TextField id="outlined-basic" label="Comuna" variant="outlined" onChange={(e) => { setComuna(e.target.value) }} />
                            <TextField id="outlined-basic" label="Provincia" variant="outlined" onChange={(e) => { setProvincia(e.target.value) }} />
                            <TextField id="outlined-basic" label="Región" variant="outlined" onChange={(e) => { setRegión(e.target.value) }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue="Email"
                                value={email} placeholder='Nombre (s)' type="text" onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={contraseña} placeholder='Contraseña' onChange={(e) => { setContraseña(e.target.value) }}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Comprobar contraseña"
                                type="password"
                                autoComplete="current-password"
                                value={comprobarContraseña} placeholder="Comprobar-contraseña" onChange={(e) => { setComprobarContraseña(e.target.value) }}
                            />

                        </div>
                    </div>
                </Box>



                <button onSubmit={handlesubmit} className='pf-btn'>Crear usuario</button>
            </form>
        </div>


    )


}

export default registroUsuarios
/*
<input className='input-text' value={nombre} placeholder='Nombre (s)' type="text" onChange={(e) => { setNombre(e.target.value) }} />
<input className='input-text' value={apellidos} placeholder='Apellidos' type="text" onChange={(e) => { setApellidos(e.target.value) }} />
<input className='input-text' value={celular} placeholder='Celular' type="number" onChange={(e) => { setCelular(e.target.value) }} />
</form>
</div>
<div className='flex-container '>
<form onSubmit={handlesubmit}>
<input className='input-text' value={comuna} placeholder='Comuna' type="text" onChange={(e) => { setComuna(e.target.value) }} />
<input className='input-text' value={provincia} placeholder='Provincia' type="text" onChange={(e) => { setProvincia(e.target.value) }} />
<input className='input-text' value={región} placeholder='Región' type="text" onChange={(e) => { setRegión(e.target.value) }} /> </form>
</div>

<div className='flex-container '>
<form onSubmit={handlesubmit}>
<input className='input-text' value={email} placeholder='E-mail' type="text" onChange={(e) => { setEmail(e.target.value) }} />
<input className='input-text' value={contraseña} placeholder='Contraseña' type="text" onChange={(e) => { setContraseña(e.target.value) }} />
<input className='input-text' value={comprobarContraseña} placeholder="Comprobar-contraseña" type='text' onChange={(e) => { setComprobarContraseña(e.target.value) }} />*/

// <button onSubmit={handlesubmit}>ingresar</button>
//   <Button variant="outlined" onSubmit={handlesubmit}>Primary</Button>