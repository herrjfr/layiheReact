import React from 'react'
import St from "../assets/st.png"
import Nd from "../assets/nd.png"
import Th from "../assets/th.png"
import { useParams } from 'react-router-dom'

function Details() {
  const { prodId } = useParams()
  const obj = [
      {
        id : 1,
        img : St,
        title : "Subtítulo",
        desc : "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo."
      },
      {
        id : 2,
        img : Nd,
        title : "Subtítulo",
        desc : "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo."
      },
      {
        id : 3,
        img : Th,
        title : "Subtítulo",
        desc : "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo."
      }
    ]
    let element = obj.find(x=>x.id==prodId)
  return (
    <section className='px-[80px] flex justify-between pb-[100px]'>
      <img className='w-[600px] h-[600px] rounded-[15px] hover:border-5 transition-all duration-200 cursor-pointer' src={element.img}/>
      <div className='w-[600px] flex flex-col gap-y-[30px]'>
        <p className='text-[45px] font-[600]'>Nombre del producto</p>
        <p className='text-[30px] text-[#828282]'>{element.title}</p>
        <p className='text-[30px]'>10,99 $</p>
        <p className='text-[23px] text-[#828282]'>{element.desc}</p>
        <button className='w-[100%] text-center text-[20px] py-[20px] bg-black rounded-[8px] text-white hover:bg-black/50 hover:text-black cursor-pointer transition-all duration-300'>Añadir al carrito</button>
      </div>
    </section>
  )
}

export default Details