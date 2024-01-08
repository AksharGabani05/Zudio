import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Zny from './pages/Zny'
import Zstories from './pages/Zstories'
import Zudio from './pages/Zudio'
import Zworld from './pages/Zworld'
import Login from './compnets/Login'

const Allrouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/zudio_near_you' element={<Zny/>} />
                <Route path='/Zstories' element={<Zstories />} />
                <Route path='/Zudio' element={<Zudio />} />
                <Route path='/Zworld' element={<Zworld />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Allrouter