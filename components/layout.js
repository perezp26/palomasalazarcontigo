import Head from 'next/head'

import Header from './header'
import Footer from './footer'
const Layout = ({children, titulo = '', description = 'Mantenimiento aries acondicionados, Estudios Energeticos, Subestaciones, calbeado estructurado, fibra optica'}) => {
  return (
        <>
            <Head>
                <title >{ `Paloma Salazar - ${ titulo }`}</title>
            </Head>
            <Header />
                <main className='animate__animated animate__fadeIn'>
                    <div className=''  style={{ backgroundColor: '#fbf9f3'}}>
                          <div className=' text-center ' >
                             { children }
                          </div>
                    </div>
              </main>
            <Footer />    
        </>
  ) 
}

export default Layout