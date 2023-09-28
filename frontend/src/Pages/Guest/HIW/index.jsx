import React from 'react'

const HIW = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col text-center w-full mb-20  mt-24">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 underline decoration-blue-500">How it works</h1>
                </div>
                <div className="flex justify-center flex-col sm:flex-row">
                    <div className="basis-2/5 px-16 sm:px-4">
                        <img className="rounded-full w-full shadow-lg aspect-square object-cover" src="https://images.unsplash.com/photo-1587573088697-b4fa10460683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
                        <p className='text-2xl mt-2 text-center'>Book</p>
                        <p className='mt-2 text-center'>Select a date and time you'd like your professional to show up</p>
                    </div>
                    <div className="basis-1/5 w-2/6 flex items-center mx-auto">
                        <img className="m-4 rotate-90 sm:rotate-0 aspect-1/1" src="https://www.svgrepo.com/show/24700/3d-forward-arrow.svg" alt="..." />
                    </div>
                    <div className="basis-2/5 px-16 sm:px-4">
                        <img className="rounded-full w-full shadow-lg aspect-square object-cover" src="https://images.unsplash.com/photo-1609775436218-78e51e5e61dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNsb2NrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
                        <p className='text-2xl mt-2 text-center'>Schedule</p>
                        <p className='mt-2 text-center'>Certified individual comes over and complete your task</p>
                    </div>
                    <div className="basis-1/5 w-2/6 flex items-center mx-auto">
                        <img className="m-4 rotate-90 sm:rotate-0 aspect-1/1" src="https://www.svgrepo.com/show/24700/3d-forward-arrow.svg" alt="..." />
                    </div>
                    <div className="basis-2/5 px-16 sm:px-4">
                        <img className="rounded-full w-full shadow-lg aspect-square object-cover" src="https://images.unsplash.com/photo-1520206455633-f4f86d44a8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxyZWxheHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
                        <p className='text-2xl mt-2 text-center'>Relax</p>
                        <p className='mt-2 text-center'>Your task is completed to your satisfaction - guaranteed</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HIW