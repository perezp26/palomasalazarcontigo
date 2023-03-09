import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/quiensoy.module.css'

const quiensoy = () => {
  return (
    <>
        <Layout>
            <h2 className='heading'>QUIEN SOY </h2>

            <div className=' container mx-auto md:flex p-12 '>
            <div className='md:w-1/3 '>
                  <div className='flex h-full'>
                        <div className=' '>
                              <Image src='/img/foto_paloma.jpeg' width={480} height={640} alt="Paloma"  />
                        </div>
                  </div>
            </div>
                <div className='md:w-2/3 text-center md:pl-32 '>
                  <div className='font-light '>
                    <div className=' md:-mt-10'>

                        <h2 className='subtitle' >ACERCA DE MI </h2>
                        
                        <p className=' text-justify  leading-relaxed' > 
                              {`
                                    Soy una gran apasionada de la nutrición clínica y artificial en el paciente adulto y una
                                    enamorada de la nutrición en la medicina estética a nivel celular.

                              `}<i className="fa-solid fa-heart"></i>
                        </p>
                        <p className=' text-justify font-light pt-7 leading-relaxed mb-20'>
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
                        <h2 className='subtitle' > Currícula </h2>
                          <div className='border -mt-9' style={{ borderColor:'#FFB900' }} ></div>
                          <div className='flex md:justify-start mt-7 mb-5'>
                                <i className={ `fa-solid fa-circle ${ styles.vinieta } `} ></i>
                                <p className='text-justify'>Egresada de la Universidad Autónoma de Yucatán como licenciada en Nutrición, Mérida, Yucatán.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className={ `fa-solid fa-circle ${ styles.vinieta } `}></i>
                                <p className='text-justify'>Master en Nutrición y Dietética Aplicada por la Universidad de León, León España.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className={ `fa-solid fa-circle ${ styles.vinieta } `}></i>
                                <p className='text-justify'>Especialidad en Nutrición Hospitalaria y Trastornos de la conducta Alimentaria por la Universidad de León, León España.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className={ `fa-solid fa-circle ${ styles.vinieta } `}></i>
                                <p className='text-justify'>Maestra en Nutrición Clínica por la Universidad Anáhuac Mayab, Mérida, Yucatán.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className={ `fa-solid fa-circle ${ styles.vinieta } `}></i>
                                <p className='text-justify'>Especialidad en Nutrición Estética, por la Universidad Iberoamericana de Desarrollo Humano y Organizacional , CDMX, México</p>
                          </div> 
                          <div className='flex md:justify-start mb-24'>
                                <i className={ `fa-solid fa-circle ${ styles.vinieta } `}></i>
                                <p className='text-justify'>Asesora de Imagen y Personal Shopper por ELLE education program, Madrid ,España.</p>
                          </div> 
                        
                          <h2 className=' mt-12 subtitle' > Laboral </h2>
                            <div className='border -mt-9' style={{ borderColor:'#FFB900' }} ></div>
                            <div className='flex md:justify-start mt-7 mb-5'>
                                  <i className={`fa-sharp fa-solid fa-chevron-right ${ styles.vinieta} `}></i>
                                  <p className='text-justify'>Hospital H O&#39;HORAN área de cuidados críticos y nutrición en el paciente adulto.</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className={`fa-sharp fa-solid fa-chevron-right ${ styles.vinieta} `}></i>
                                  <p className='text-justify'>LAMP Laboratorio de Mezclas Parenterales .</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className={`fa-sharp fa-solid fa-chevron-right ${ styles.vinieta} `}></i>
                                  <p className='text-justify'>Laboratorios PISA, en el centro de Mezclas Parenterales SAFE.</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className={`fa-sharp fa-solid fa-chevron-right ${ styles.vinieta} `}></i>
                                  <p className='text-justify'>Laboratorio Fresenius Kabi México.</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className={`fa-sharp fa-solid fa-chevron-right ${ styles.vinieta} `}></i>
                                  <p className='text-justify'>Actualmente: Paloma Salazar, Nutrición Clínica y Estética</p>
                            </div> 
                    
                    
                  </div>
                </div>

              </div>
        </Layout>
    </>
  )
}

export default quiensoy