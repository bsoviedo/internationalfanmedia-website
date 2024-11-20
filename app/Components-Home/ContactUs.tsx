// Remember to Add functionality 

export default function ContactUs() {
    return(
<section className="bg-slate-900 dark:bg-white-900">
    <div className="h-auto py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl md:text-5xl lg:text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-lg md:text-xl lg:text-2xl dark:text-white"></p>
        <form action="#" className="space-y-8">
            <div>
                <label className="block mb-2 text-sm md:text-base lg:text-2xl font-medium text-white dark:text-white">Your email</label>
                <input type="email" id="email" 
                placeholder="Email"
                    className="shadow-sm bg-slate-800 border border-gray-600 text-white text-sm md:text-base lg:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required />
            </div>
            <div>
                <label className="block mb-2 text-sm md:text-base lg:text-2xl font-medium text-white dark:text-white">Subject</label>
                <input type="text" id="subject" 
                                placeholder="Subject"
                    className="block p-3 w-full text-sm md:text-base lg:text-lg text-white bg-slate-800 rounded-lg border border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required />
            </div>
            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm md:text-base lg:text-2xl font-medium text-white dark:text-white">Your message</label>
                <textarea id="message" 
                    className="block p-2.5 w-full text-sm md:text-base lg:text-lg text-white bg-slate-800 rounded-lg shadow-sm border border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Leave a comment..."></textarea>
            </div>
            <div className="flex flex-row items-end justify-end	">
            <button type="submit" 
                className="py-3 px-5 text-sm md:text-base lg:text-lg font-medium text-center text-white rounded-lg border-solid border-2 border-white-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700">
                Send message
            </button>
            </div>
       
        </form>
    </div>
</section>

    )
}
