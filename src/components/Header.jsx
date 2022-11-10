import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        <h1 className='font-semibold text-xl '>Northwind<br/>Datos Maestros</h1>
        <picture className=''>
            <img src={logo} alt="Logo Northwind" title='Logo Northwind' className='object-contain' />
        </picture>
    </div>
  )
}

export default Header