import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between px-[80px] py-[80px] text-[20px] font-[500]'>
        <Link to={"/"}><h1 className='cursor-pointer hover:bg-black/30 py-[10px] px-[20px] rounded-[5px] hover:translate-y-[-10%] transition-all duration-300'>Nombre del sitio</h1></Link>
        <div className='flex gap-x-[50px] items-center'>
            <ul className='flex gap-x-[30px]'>
                <li className='hover:bg-black/30 py-[5px] px-[20px] rounded-[10px] hover:translate-y-[-10%] transition-all duration-300 cursor-pointer'>Página</li>
                <li className='hover:bg-black/30 py-[5px] px-[20px] rounded-[10px] hover:translate-y-[-10%] transition-all duration-300 cursor-pointer'>Página</li>
                <li className='hover:bg-black/30 py-[5px] px-[20px] rounded-[10px] hover:translate-y-[-10%] transition-all duration-300 cursor-pointer'>Página</li>
            </ul>
            <button className='bg-black px-[25px] py-[15px] text-white rounded-[10px] text-[16px] hover:bg-black/50 hover:text-black cursor-pointer transition-all duration-300'>Botón</button>
        </div>
    </header>
  )
}

export default Header