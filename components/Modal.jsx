import { useState } from "react"


export const Modal = ({ children, viewModal, handleViewVideo }) => {


  return (
    <div id="modal-component-container" className={` fixed inset-0 ${ viewModal.animacionBackground } ${ !viewModal.openClose ? 'hidden'  : '' }` } >
        <div className=" modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
                <div className="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75" onClick= { handleViewVideo }></div>
                <div className="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen"></div>

                <div className={`modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-lx transform transition-all w-full sm:my-8 sm:align-middle sm:max-w-screen-lg `}>
                    <div className={`modal-wrapper bg-white px-4 pt-5 sm:p-6 sm:pb-4 w-full `}>
                        <div className="modal-wrapper-flex ">
                            <div className="w-full flex justify-end">
                               
                                        <span className="fa-solid fa-close cursor-pointer " onClick={ handleViewVideo }></span>
                            </div>
                            <div className="modal-content text-center mt-3 sm:mt-0 sm:text-left">
                                <h3 className="text-lg font-medium text-gray-900"></h3>
                                <div className={`modal-text mt-2 flex ${ viewModal.animacionContent }` }>
                                   {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-actions  bg-gray-50 px-4 py-3 sm:flex sm:px-6 sm:flex-row-reverse">
                    </div>
                </div>
        </div>
    </div>
  )
}
