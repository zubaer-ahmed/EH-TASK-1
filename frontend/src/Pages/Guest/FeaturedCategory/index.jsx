import React from 'react'
import {Link} from 'react-router-dom';
const FeaturedCategory = () => {
  return (
    <>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Featured Category</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Get Your Desired Product from Featured Category!</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/103565/air-conditioner.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">AC Service</p>
        </div>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/136398/painting-roller-outline.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Painting</p>
        </div>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/490758/fridge-2.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Refrigerator Service</p>
        </div>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/308733/moving-house-house-moving-move-house-move-in.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">House Shifting</p>
        </div>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/287614/cleaning-mop.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Cleaning</p>
        </div>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/5095/plumber.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Plumber</p>
        </div>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/423670/worker-architecture.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Electrician</p>
        </div>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <Link>
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/322769/mechanic-garage.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Mechanic</p>
        </div>
        </Link>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
        <Link>
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/70134/social-worker.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Maid Service</p>
        </div>
        </Link>
      </div>
      <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
      <Link>
        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg">
          <img src="https://www.svgrepo.com/show/480999/delivery.svg" className='h-12 mx-auto' alt="" />
          <p class="leading-relaxed mt-2">Home Delivery</p>
        </div>
      </Link>
      </div>
      </div>
  </div>
</section>
    </>
  )
}

export default FeaturedCategory