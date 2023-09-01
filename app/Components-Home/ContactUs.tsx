// Remember to Add functionality 

export default function ContactUs() {
    return(
        <section className="bg-blue-900 dark:bg-white-900">
            <div className="h-screen py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white-500 dark:text-white-400 sm:text-xl"></p>
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white-900 dark:text-white-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white-900 dark:text-white-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-white-900 bg-white-50 rounded-lg border border-white-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label  className="block mb-2 text-sm font-medium text-white-900 dark:text-white-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white-900 bg-white-50 rounded-lg shadow-sm border border-white-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    )
}
