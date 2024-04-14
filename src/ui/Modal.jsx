import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";
export function Modal({children, onCloseModal}) {
    return (
        <div className='flex justify-center items-center w-full h-full absolute'>
            <div className="shadow-md w-96 z-10 rounded-md bg-white relative">
                <h5 className='absolute top-2 right-3 cursor-pointer' onClick={onCloseModal}>
                    <IoIosCloseCircleOutline className='text-3xl'/>
                </h5>
                <div className='px-5 py-4 overflow-scroll max-h-80'>
                    {children}
                </div>
            </div>
            {createPortal(
                <div className='w-full h-full fixed top-0 bg-[--transparent-black]'></div>,
                document.body
            )}
        </div>
    )
}