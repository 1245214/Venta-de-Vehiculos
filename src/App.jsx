import './App.css'

import ProviderVehiculos from './assets/contextVehiculos'
import ProviderUsuarios from './assets/contextUsuarios'
import Navbar from './assets/test'
import Home from './assets/home'
import Gallery from './assets/gallery'
import Profile from './assets/profile'
import Dashboard from './assets/dashboard'
import { Favorite } from './assets/favorite'
import Carrito from './assets/buy'
import { Routes, Route } from 'react-router-dom'

import NewProduct from './assets/newProduct'
//import ProviderLocalStorage from "./assets/contextLocalStorage"

function App() {




  return (
    // las rutas protegidas estan en el Navbar (tuve problemas con el context)


    <div className='context-container'>



      <ProviderUsuarios>
        <ProviderVehiculos>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/galeria' element={<Gallery />} />
            <Route path='/registro' element={<Profile />} />

            <Route path='/perfil' element={<Dashboard />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/newproduct' element={<NewProduct />} />

          </Routes>

        </ProviderVehiculos>
      </ProviderUsuarios>

    </div>

  )
}

export default App
