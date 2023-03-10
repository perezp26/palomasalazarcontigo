import React from 'react'
import Layout from '../components/Layout'

const contacto = () => {
  return (
    <Layout titulo='Contacto'>
       <h2 className='heading'>Contacto </h2>
        <div className=' container mx-auto md:flex py-24 font-light text-5xl' >
            <div className='md:w-1/4'></div>
            <div className='md:w-1/4 text-left' >
              <i className="fa-solid fa-shop"></i> - Consultorio
              <div className='pt-5'><i className="fa-solid fa-car-side"></i> - Servicio a Domicilio</div>
            </div>
            <div className='md:w-1/2 text-left md:pr-20 m-auto'>
                Calle 15 #324 x 20, Fracc. Cámara de Comercio Norte, Mérida, Yucatán
            </div>
        </div>
        <div className=' container mx-auto md:flex font-light text-5xl' >
            <div className='md:w-1/4'></div>
            <div className='md:w-1/4 text-left' >
              <i className="fa-solid fa-phone"></i> - Teléfono
            </div>
            <div className='md:w-1/2 text-left md:pr-20 m-auto'>
                      +52 999 442 4845
            </div>
        </div>
        <div className=' container mx-auto md:flex font-light text-5xl py-24' >
            <div className='md:w-1/4'></div>
            <div className='md:w-1/4 text-left' >
              <i className="fa-solid fa-envelope"></i> - Mail
            </div>
            <div className='md:w-1/2 text-left md:pr-20 m-auto'>
                  palomasalazarcontacto@gmail.com
            </div>
        </div>
    </Layout>
  )
}

export default contacto
