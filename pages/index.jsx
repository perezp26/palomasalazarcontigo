import Image from 'next/image'
import Layout from '../components/Layout'
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

        

      </Layout>
    </>
  )
}
