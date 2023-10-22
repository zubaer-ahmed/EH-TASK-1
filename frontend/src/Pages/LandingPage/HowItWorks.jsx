import React from 'react'

// Material UI Icons
import CheckIcon from '@mui/icons-material/Check';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

const HIW = () => {
    return (
        <>
        <section className="my-16 ">
                  <h3 className="text-gray-800 text-3xl font-semibold text-center sm:text-4xl">
                  How to get <span className="underline decoration-blue-500">Service</span> easily
                  </h3>
            <div className="max-w-screen-xl mx-auto px-4 my-12 text-black gap-x-12 items-center justify-between lg:flex md:px-8">
                <div className="mt-6 sm:mt-0 md:flex lg:block">
                  <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                    <ol class="space-y-4 w-full">
                        <li>
                            <div class="w-full p-4 text-blue-600 border border-blue-400 rounded-lg bg-transparent" role="alert">
                                <div class="flex items-center justify-between">
                                    <div className='pr-8 py-3.5'>
                                        <h3 class="font-bold">Find your service</h3>
                                        <p>Pick the service you are looking for- from the website or the app.</p>
                                    </div>
                                    <FindReplaceIcon/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="w-full p-4 text-blue-600 border border-blue-400 rounded-lg bg-transparent" role="alert">
                                <div class="flex items-center justify-between">
                                    <div className='pr-8 py-3.5'>
                                        <h3 class="font-bold">Schedule suitable time</h3>
                                        <p>Pick the service you are looking for- from the website or the app.</p>
                                    </div>
                                    <HistoryToggleOffIcon/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="w-full p-4 text-blue-600 border border-blue-400 rounded-lg bg-transparent" role="alert">
                                <div class="flex items-center justify-between">
                                    <div className='pr-8 py-3.5'>
                                        <h3 class="font-bold">Submit your request and relax</h3>
                                        <p>Pick the service you are looking for- from the website or the app.</p>
                                    </div>
                                    <CheckIcon/>
                                </div>
                            </div>
                        </li>
                    </ol>
                  </div>
                </div>
                <div className="sm:hidden lg:block lg:max-w-xl mt-5">
                    <img src="https://plus.unsplash.com/premium_photo-1682310539039-1a65c8fc0b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80" className="rounded-lg" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}

export default HIW