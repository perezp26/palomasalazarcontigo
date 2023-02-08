import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Layout titulo={'Inicio'} description={''}>
         <div className={`grid grid-cols-3 gap-2 content-center ${ styles.video } `}  >
                      <div className=' col-start-2 col-end-2 h-full text-left'> 
                              <p className=' font-light text-5xl'> "ATRÉVETE Y SE TU MEJOR VERSIÓN"</p>
                             
                      </div>
                      <div className=' col-end-4 col-span-2 h-full text-left'> 
                             <div className='border mt-2' style={{ borderColor:'#0047CB' }} ></div>
                      </div>
                      <div className=' col-start-2 col-end-2 h-full text-left'> 
                        <p className='font-light text-right md:mr-5'>by PS</p>
                      </div>   

                       <div className='col-span-3 text-center'>
                            <div className='font-light md:mt-32 mt-24' >
                              <span className="fa-stack">
                                <i className="fa-solid fa-circle fa-stack-1x"></i>
                                <i className="fa-solid fa-play fa-stack text-base fa-inverse"></i>
                              </span>
                               Ver Video
                            </div>
                        </div>              
         </div>

        

         <div className=' container mx-auto md:flex p-12 '>
            <div className='md:w-1/3'>
                    <Image src='/img/foto_paloma.jpeg' width={480} height={640} alt="Paloma" />
            </div>
            <div className='md:w-2/3 text-center md:pl-32'>
              <div className=' flex h-full'>
                <div className='m-auto'>

                <h2 className='subtitle' >ACERCA DE MI </h2>
               
                <p className=' text-justify  leading-relaxed' > 
                    {`
                            Soy una gran apasionada de la nutrición clínica y artificial en el paciente adulto y una
                            enamorada de la nutrición en la medicina estética a nivel celular.

                    `}<i class="fa-solid fa-heart"></i>
                </p>
                <p className=' text-justify font-light pt-7 leading-relaxed'>
                           Creo firmemente que la belleza externa van de la mano de una salud integral y buenos
                            hábitos de vida es por esto que te acompaño a través del apoyo nutrimental en cualquier
                            condición de salud, a través de la suplementación intravenosa de nutrientes como
                            vitaminas, minerales, enzimas y coenzimas introducidas por una vena periférica de
                            manera inocua y segura o bien te acompaño con un diagnóstico de tus formas físicas y de
                            color por medio de la imagenología para lograr juntos a cumplir metas reales con
                            nutrición especializada armonizando con soporte enteral y venoso y la asesoría de
                            imagen. Atrévete y Sé tu mejor versión
                </p>
                </div>
              </div>
            </div>
         </div>

      </Layout>
    </>
  )
}
