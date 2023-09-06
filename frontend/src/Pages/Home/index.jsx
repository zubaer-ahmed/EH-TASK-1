export default () => {

    return (
    <>
        <section>
            <div className="max-w-screen-xl mx-auto px-4 pt-12 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                <div className='flex-none space-y-5 max-w-xl'>
                    
                    <h1 className="text-4xl mt-24 text-gray-800 font-extrabold sm:text-5xl">
                        Tech Piece Pilot
                    </h1>
                    <p>
                        Build your dream with us. Get the world class service from us through your nearst outlet country wide.
                    </p>
                    <div className='flex items-center gap-x-3 sm:text-sm'>
                        <a href="http://localhost:5173/Login" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='flex-1 hidden md:block'>
                    {/* Replace with your image */}
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="max-w-xl" />
                </div>
            </div>
        </section>
    </>
    )
}