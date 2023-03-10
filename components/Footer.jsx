import Link from "next/link"

import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={ `${styles.footer} ` }>
      <div className={ ` ${ styles.contenido } ` }>
          <nav className={ `py-7 ${styles.navegacion}`}>
                        <Link href="/">
                            Inicio
                        </Link>
                        <Link href="/quiensoy">
                            Quien Soy
                        </Link>
                        <Link href="/servicios">
                            Servicios
                        </Link>
                        <Link href="/contacto">
                            Contacto
                        </Link>
            </nav>

            <div className="md:flex md:pr-20">
                <p className={ ` py-7 px-1 ${styles.copyright}`}>Todos los derechos reservados { new Date().getFullYear() }</p>
                <div className={ ` md:pl-7 ${styles.redes}` }>
                  <Link href="https://www.facebook.com/PalomaSalazarContigo" passHref={true}>
                      <a target="_blank" className='px-5 md:py-5'>  <i className="fa-brands fa-square-facebook text-6xl text-blue-800"></i> </a>
                  </Link>
                  <Link href="https://www.instagram.com/palomasalazarcontigo" passHref={true}>
                    <a  target="_blank" className='px-5 md:py-5'><i className="fa-brands fa-square-instagram text-6xl text-rose-700"></i></a>
                  </Link>
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer