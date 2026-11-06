import HeroImg from "../assets/heroimg.png"

function Hero() {
  return (
    <section className='px-[80px] flex flex-col gap-y-[50px]'>
      <div className='flex flex-col gap-y-[10px] w-[900px] items-start'>
        <p className='text-[70px] font-[700]'>Título de la página de inicio</p>
        <p className='text-black/75 text-[27px] pb-[30px]'>Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando. </p>
        <button className='px-[30px] py-[20px] rounded-[10px] text-white text-[25px] bg-black hover:bg-black/50 hover:text-black cursor-pointer transition-all duration-300'>Botón</button>
      </div>
      <img src={HeroImg}/>
    </section>
  )
}

export default Hero