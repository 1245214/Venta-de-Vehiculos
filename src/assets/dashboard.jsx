import './dashboard.css'
//import TextField from '@mui/material/TextField';
import { Context } from './contextUsuarios'
import { useContext } from 'react';
//import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import NewProduct from './newProduct';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const Perfil = () => {

    const { users } = useContext(Context)


    return (

        <Container maxWidth="xl" style={{ display: "flex", width: "100%", height: "auto", justifyContent: "center", }}>
            <Box
                sx={{
                    display: "flex",
                    alignContent: "center",
                    width: 1200,
                    height: 769,
                }}
            >
                <Box sx={{ display: "flex", width: "25%", flexDirection: "column", gap: "30px", paddingTop: "20px" }}>
                    <div className='db-img-container'>
                        <img className='db-img' src={users.avatarSRC} />
                        <h4 className='db-title'> {users.email}</h4>
                    </div>

                </Box>


                <Box style={{ marginLeft: "50px" }}>
                    <NewProduct />
                </Box>
                <Container maxWidth="xl" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "48rem", background: "white", marginLeft: "150px" }}>
                    <div className='db-sedan-img'>
                        <span style={{ marginTop: "55px", paddingRight: "10px", color: "red" }}>Sedan</span>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28LfYKh1qqtdEckKHF2LrcF_GkhWInAFFag&usqp=CAU' className='db-img-cars' /></div>
                    <div className='db-sedan-img'>
                        <span style={{ marginTop: "60px", paddingRight: "10px", color: "red" }}>Hatchback</span>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLmRGoRYOz2QQ9BZkOGkn6PLNIjlD-i4oTg&usqp=CAU' className='db-img-cars' /></div>
                    <div className='db-sedan-img'>
                        <span style={{ marginTop: "60px", paddingRight: "10px", color: "red" }}>Coupe</span>
                        < img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uiCPYH_Lx_TmAC6WetBzZee5a1KSdQauCA&usqp=CAU' className='db-img-cars' /></div>
                    <div className='db-sedan-img'>
                        <span style={{ marginTop: "55px", paddingRight: "10px", color: "red" }}>Pick-Up</span>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBrLfe6KOFmh1TR6xFNKjfzYmxoyrVWNCHw&usqp=CAU' className='db-img-cars' /></div>
                    <div className='db-sedan-img'>
                        <span style={{ marginTop: "55px", paddingRight: "10px", color: "red" }}>SUV</span>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnPvnafUtHOFvi-JJQWVf44eJkgi4PWt3tw&usqp=CAU' className='db-img-cars' /></div>
                    <div className='db-sedan-img'>
                        <span style={{ marginTop: "55px", paddingRight: "10px", color: "red" }}>Station-wagon</span>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0d0oUzCa3TBd3eeRLL_xP4jf1wMxSgsacpw&usqp=CAU' className='db-img-cars' /></div>
                </Container>
            </Box>
        </Container >

    )
}

export default Perfil

