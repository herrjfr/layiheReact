import St from "../assets/st.png"
import Nd from "../assets/nd.png"
import Th from "../assets/th.png"
import {Link} from "react-router-dom"

function Products() {

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
  return (
    <section className='px-[80px] py-[50px] flex flex-col gap-y-[50px]'>
      <p className='text-[60px] font-[600]'>Encabezado de sección</p>
      <div className="flex justify-between">
       {
        obj.map((element)=>{
           return <div className="w-[430px] flex flex-col gap-y-[30px] hover:bg-black/20 transition-all duration-200" key={element.id}>
            <Link to={`products/${element.id}`}><img className="w-[430px] h-[450px] cursor-pointer" src={element.img}/></Link>
            <p className="text-[30px] font-[500] pl-[10px]">{element.title}</p>
            <p className="text-[25px] w-[400px] leading-[40px] pl-[10px] text-[#828282]">{element.desc}</p>
           </div>
        })
       }
      </div>
      
    </section>
  )
}

export default Products