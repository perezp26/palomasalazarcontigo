import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const Header = () => {

    const router = useRouter();

  return (
    <header className={`${ styles.header }`} >
        <div className='bg-black py-7' >
        <div className='container mx-auto md:flex'>
            <div className='md:w-1/6 text-center '>
                <Image src='/img/monograma2.png' width={ 68 }  height={ 90 } alt="monograma" className=' mx-auto ' />
            </div>
            <div className='md:w-5/6 text-center pt-2 '>
                <Image src='/img/logotipo2.png' width={ 1000 }  height={ 100 } alt="logo" className=' mx-auto ' />
            </div>
        </div>
        </div>
        <div className=' container mx-auto md:flex '>
            <div className='md:w-1/6 text-center'></div>
            <div className='md:w-5/6 text-center'>
                <div className={` ${styles.barra} w-full `}>
                    <nav className={`${styles.navegacion} py-5`}>
                        <Link href="/">
                            Inicio
                        </Link>
                        <Link href="/quiensoy">
                            Quien Soy
                        </Link>
                        <Link href="/servicios">
                            Servicios
                        </Link>
                        <Link href="/">
                            Contacto
                        </Link>
                        
                    </nav>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header