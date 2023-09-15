import React from 'react'

const HIW = () => {
  return (
    <>
    <div className="container mx-auto hidden lg:block">
        <div class="flex flex-col text-center w-full mb-20  mt-24">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 underline decoration-blue-500">How it works</h1>
        </div>
        <div class="flex justify-center">
            <div class="sm:w-4/12 px-4">
                <img src="https://images.unsplash.com/photo-1587573088697-b4fa10460683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." class="shadow rounded-full h-64 object-cover w-64 mx-auto align-middle border-none" />
                <p className='text-2xl mt-2 text-center'>Book</p>
                <p className='mt-2 text-center'>Select a date and time you'd like your professional to show up</p>
            </div>
            <div class="w-2/12 sm:w-4/12 flex items-center mx-auto">
                <img src="https://www.svgrepo.com/show/24700/3d-forward-arrow.svg" alt="..." class="shadow rounded-full h-24 mb-24 border-none mx-auto" />
            </div>
            <div class="sm:w-4/12 px-4">
                <img src="https://images.unsplash.com/photo-1609775436218-78e51e5e61dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNsb2NrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." class="shadow rounded-full h-64 object-cover w-64 align-middle border-none" />
                <p className='text-2xl mt-2 text-center'>Schedule</p>
                <p className='mt-2 text-center'>Certified individual comes over and complete your task</p>
            </div>
            <div class="w-2/12 sm:w-4/12 flex items-center mx-auto">
                <img src="https://www.svgrepo.com/show/24700/3d-forward-arrow.svg" alt="..." class="shadow rounded-full h-24 mb-24 border-none mx-auto" />
            </div>
            <div class="sm:w-4/12 px-4">
                <img src="https://images.unsplash.com/photo-1520206455633-f4f86d44a8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxyZWxheHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." class="shadow rounded-full h-64 object-cover w-64 align-middle border-none" />
                <p className='text-2xl mt-2 text-center'>Relax</p>
                <p className='mt-2 text-center'>Your task is completed to your satisfaction - guaranteed</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default HIW