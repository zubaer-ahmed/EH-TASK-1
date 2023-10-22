import React from 'react'

const Testimonials = () => {
  return (
    <>
    <div className="container mx-auto my-16">
    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl max-w-2xl mt-2">
        From our <span className="underline decoration-blue-500">Customers</span>
    </h3>
    <div className="grid sm:grid-cols-3">
        <div className="w-full max-w-md px-8 py-4 mt-16 border border-blue-200 rounded-lg shadow-lg">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"/>
            </div>

            <h2 className="mt-2 text-xl font-semibold md:mt-0">Design Tools</h2>

            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

            <div className="flex justify-end mt-4">
                <a href="#" className="text-lg font-medium text-blue-600" tabIndex="0" role="link">John Doe</a>
            </div>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 border border-blue-200 rounded-lg shadow-lg">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"/>
            </div>

            <h2 className="mt-2 text-xl font-semibold md:mt-0">Design Tools</h2>

            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

            <div className="flex justify-end mt-4">
                <a href="#" className="text-lg font-medium text-blue-600" tabIndex="0" role="link">John Doe</a>
            </div>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 border border-blue-200 rounded-lg shadow-lg">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"/>
            </div>

            <h2 className="mt-2 text-xl font-semibold md:mt-0">Design Tools</h2>

            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

            <div className="flex justify-end mt-4">
                <a href="#" className="text-lg font-medium text-blue-600" tabIndex="0" role="link">John Doe</a>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Testimonials