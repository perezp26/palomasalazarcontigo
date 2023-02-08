import Image from 'next/image'
import Layout from '../components/layout'

const quiensoy = () => {
  return (
    <>
        <Layout>
            <h2 className='heading'>QUIEN SOY </h2>

            <div className=' container mx-auto md:flex p-12 '>
            <div className='md:w-1/3'>
                    <Image src='/img/foto_paloma.jpeg' width={480} height={640} alt="Paloma" />
            </div>
                <div className='md:w-2/3 text-center md:pl-32'>
                  <div className=' flex h-full font-light '>
                    <div className=''>
                        <h2 className='subtitle' > Currícula </h2>
                          <div className='border -mt-9' style={{ borderColor:'#FFB900' }} ></div>
                          <div className='flex md:justify-start mt-7 mb-5'>
                                <i className="fa-solid fa-certificate pt-1 pr-4"></i>
                                <p className='text-justify'>Egresada de la Universidad Autónoma de Yucatán como licenciada en Nutrición, Mérida, Yucatán.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className="fa-solid fa-certificate pt-1 pr-4"></i>
                                <p className='text-justify'>Master en Nutrición y Dietética Aplicada por la Universidad de León, León España.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className="fa-solid fa-certificate pt-1 pr-4"></i>
                                <p className='text-justify'>Especialidad en Nutrición Hospitalaria y Trastornos de la conducta Alimentaria por la Universidad de León, León España.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className="fa-solid fa-certificate pt-1 pr-4"></i>
                                <p className='text-justify'>Maestra en Nutrición Clínica por la Universidad Anáhuac Mayab, Mérida, Yucatán.</p>
                          </div> 
                          <div className='flex md:justify-start mb-5'>
                                <i className="fa-solid fa-certificate pt-1 pr-4"></i>
                                <p className='text-justify'>Especialidad en Nutrición Estética, por la Universidad Iberoamericana de Desarrollo Humano y Organizacional , CDMX, México</p>
                          </div> 
                          <div className='flex md:justify-start mb-24'>
                                <i className="fa-solid fa-certificate pt-1 pr-4"></i>
                                <p className='text-justify'>Asesora de Imagen y Personal Shopper por ELLE education program, Madrid ,España.</p>
                          </div> 
                        
                          <h2 className=' mt-12 subtitle' > Laboral </h2>
                            <div className='border -mt-9' style={{ borderColor:'#FFB900' }} ></div>
                            <div className='flex md:justify-start mb-5'>
                                  <i class="fa-sharp fa-solid fa-chevron-right pt-1 pr-4"></i>
                                  <p className='text-justify'>Hospital H O&#39;HORAN área de cuidados críticos y nutrición en el paciente adulto.</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className="fa-sharp fa-solid fa-chevron-right pt-1 pr-4"></i>
                                  <p className='text-justify'>LAMP Laboratorio de Mezclas Parenterales .</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className="fa-sharp fa-solid fa-chevron-right pt-1 pr-4"></i>
                                  <p className='text-justify'>Laboratorios PISA, en el centro de Mezclas Parenterales SAFE.</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className="fa-sharp fa-solid fa-chevron-right pt-1 pr-4"></i>
                                  <p className='text-justify'>Laboratorio Fresenius Kabi México.</p>
                            </div> 
                            <div className='flex md:justify-start mb-5'>
                                  <i className="fa-sharp fa-solid fa-chevron-right pt-1 pr-4"></i>
                                  <p className='text-justify'>Actualmente: Paloma Salazar, Nutrición Clínica y Estética</p>
                            </div> 
                    
                    </div>
                  </div>
                </div>

              </div>
        </Layout>
    </>
  )
}

export default quiensoy