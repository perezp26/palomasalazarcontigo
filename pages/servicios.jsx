import Image from 'next/image'
import Layout from '../components/Layout'

const servicios = () => {
  return (
    <>
    <Layout>
        
        <div className='my-10' style={{ backgroundColor:'#000000' }}>
         <div className=' container mx-auto md:flex p-12 '>
            <div className={`md:w-1/3 py-16 `}>

                    <Image src='/img/nutricionclinica.jpeg' width={ 1080 }  height={ 1080 } alt="nutrción clinica" className=' mx-auto  ' />
            </div>
            <div className='md:w-2/3 text-center md:pl-32'>

                <div className=' flex h-full'>
                    <div className='m-auto'>
                        <p className='leading-relaxed text-white'>
                                <a style={{ color:'#009245' }}>MI MISIÓN</a> CONSISTE EN INTEGRAR
                                LOS BENEFICIOS DE LOS NUTRIENTES EN UNA
                                ALIMENTACIÓN PERSONALIZADA A TU
                                CONDICIÓN MÉDICA DE SALUD,
                                COMPLEMENTANDO CON NUTRACÉUTICOS
                                QUE ELEVEN <a style={{ color: '#009245' }}>TU CALIDAD DE VIDA</a>
                        </p>
                    </div>
                </div>
                   
            </div>
            </div>
        </div>

        <div className='my-10' style={{ backgroundColor:'#eaeaea' }}>
         <div className=' container mx-auto md:flex p-12 '>
            <div className={`md:w-1/3 py-16 `}>

                    <Image src='/img/suplementacion.jpeg' width={ 1080 }  height={ 1080 } alt="nutrción clinica" className=' mx-auto  ' />
            </div>
            <div className='md:w-2/3 text-center md:pl-32'>

                <div className=' flex h-full'>
                    <div className='m-auto'>
                        <p className='leading-relaxed text-black'>
                            CONSISTE EN ADMINISTRAR VITAMINAS (ANTIOXIDANTES)
                            Y MINERALES DIRECTAMENTE AL TORRENTE SANGUÍNEO.
                            PROMOVIENDO LA ABSORCIÓN A MAYOR PORCENTAJE
                            DE LOS NUTRIENTES INGERIDOS EN LA DIETA DIARIAMENTE.
                        </p>

                        <p className='leading-relaxed text-black mt-20'>
                            PRIMER CENTRO EXCLUSIVO Y ESPECIALIZADO DE SEROTERAPIA
                            (SUPLEMENTACION INTRAVENOSA) AVANZADA EN MERIDA
                        </p>
                    </div>
                </div>
                   
            </div>
            </div>
        </div>

        <div className='my-10' style={{ backgroundColor:'#211f20' }}>
         <div className=' container mx-auto md:flex p-12 '>
            <div className={`md:w-1/3 py-16 `}>

                    <Image src='/img/especialistaImagen.jpeg' width={ 1080 }  height={ 1080 } alt="nutrción clinica" className=' mx-auto  ' />
            </div>
            <div className='md:w-2/3 text-center md:pl-32'>

                <div className=' flex h-full'>
                    <div className='m-auto'>
                        <p className='leading-relaxed text-white'>
                                COMO AMANTE DE LA BELLEZA MI OBJETIVO
                                ES GUIARTE HACIA EL BALANCE NATURAL
                                DE TUS FORMAS FÍSICAS Y POTÉNCIALIZARLAS
                                CON COLOR, TEXTURAS Y DIVERSIÓN AL VESTIR.
                        </p>
                    </div>
                </div>
                   
            </div>
            </div>
        </div>

    </Layout>
    </>
  )
}

export default servicios