import React from 'react'

// Material UI Icons
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const CTA = () => {
  return (
    <>
    <section class="bg-blue-500 py-8">
        <div class="container flex flex-col items-center px-4 py-12 text-center">
            <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl">
                Connect with us in matter of few clicks!
            </h2>
            <p class="block max-w-4xl mt-4 text-black">
                Get any kind of service from anywhere more easily with our mobile app in matter of clicks
            </p>
            <div class="mt-6">
                <a href="https://www.apple.com/store" class="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    <AppleIcon/>
                    <span class="mx-2">
                        Get it on the App Store
                    </span>
                </a>
                <a href="https://play.google.com/store/games?hl=en&gl=US"
                    class="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-black transition-colors duration-300 bg-white rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-200 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    <GoogleIcon className='text-black'/>
                    <span class="mx-2">
                        Get it on Google Play
                    </span>
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default CTA