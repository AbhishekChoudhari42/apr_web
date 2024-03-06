import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

const ContactForm = () => {

  return (
    <div className='w-full min-h-fit pb-16 flex justify-center items-center max-sm:px-10 '>

      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 max-w-[400px] w-full flex flex-col">
        
        <input type="hidden" name="access_key" value="7e990d6d-fe6e-4fb0-9bf4-7b15b050e052"/>

          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1  text-white bg-black block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 text-white bg-black block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="mt-1  text-white bg-black block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        <button type="submit" className="text-black bg-neutral-200 hover:bg-white w-full  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Send
        </button>
        <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
        <Link 
          className="text-green-950 bg-green-400 hover:bg-green-500 w-full  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 flex justify-center items-center gap-2"
          href={"https://wa.me/+919004820390"}>
          Connect on Whatsapp
          <FaWhatsapp className='hover:brightness-200' size={20} color='#040' />
        </Link>
      </form>
    </div>

  )
}

export default ContactForm