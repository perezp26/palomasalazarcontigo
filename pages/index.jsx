import { useState, useEffect } from 'react'

import ReactPlayer from 'react-player/lazy'

import Layout from '../components/Layout'
import { Modal } from '../components/Modal'
import styles from '../styles/index.module.css'

export default function Home() {
  
  const [hasWindow, setHasWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewModal, setViewModal] = useState({  animacionBackground : ' animate__animated animate__fadeIn', animacionContent : 'animate__animated animate__fadeIn', openClose: true });

  useEffect(() => {

      localStorage.getItem('viewVideoPaloma') && setViewModal({ ...viewModal, openClose : false });

    if (typeof window !== "undefined") {
      setHasWindow(true);
    }

  }, []);

  useEffect(() => {

    setIsPlaying( viewModal.openClose );

  }, [viewModal])
  
  const handleViewVideo = () =>{ 
    
    !localStorage.getItem('viewVideoPaloma') && localStorage.setItem('viewVideoPaloma', 'true') ;

    const timeView = viewModal.openClose ? 500 : 1;
    viewModal.openClose && setViewModal({...viewModal, animacionBackground : ' animate__animated animate__fadeOut', animacionContent : 'animate__animated animate__bounceOut' });
    

    setTimeout(() => {
      console.log( viewModal );
            viewModal.openClose ? setViewModal({ ...viewModal, openClose : !viewModal.openClose  })
                                : setViewModal({...viewModal, openClose : !viewModal.openClose , animacionBackground : ' animate__animated animate__fadeIn', animacionContent : 'animate__animated animate__fadeIn' }) 
        }, timeView)
  }

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
                            <div className='font-light md:mt-32 mt-24 cursor-pointer' onClick={ handleViewVideo } >
                              <span className="fa-stack -mt-5 ">
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-solid fa-play fa-stack text-base fa-inverse"></i>
                              </span>
                               <a className=' text-5xl mt-10'>Ver Video</a>
                            </div>
                        </div>              
         </div>
         
          <Modal viewModal={ viewModal } setViewModal={ setViewModal } handleViewVideo = { handleViewVideo }>
              { hasWindow && viewModal.openClose && 
                <ReactPlayer url="/media/video_paloma.mp4" 
                             //light={<img src='/img/monogramaBlack.png' alt='icono' />}
                             controls 
                             playing={ isPlaying } 
                             muted = { true }
                             height="100%" 
                             width="100%" 
                  /> 
              }
          </Modal>

      </Layout>
    </>
  )
}
