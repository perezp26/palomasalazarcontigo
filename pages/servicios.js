import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/servicios.module.css'

const servicios = () => {
  return (
    <>
    <Layout>
        
        <div className='bg-black my-10'>
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
    </Layout>
    </>
  )
}

export default servicios