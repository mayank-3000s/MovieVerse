import { Form } from "react-router-dom"

export const contactData = async({request}) => {
    try{
        const response = await request.formData();
        const data =  Object.fromEntries(response);
        console.log(data);
        return null;
    } catch(error){
        console.log(error)
    }

}

export const Contact = ()=>{
    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6 py-12">
                <div className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-white text-center mb-2">Contact Us</h1>
                <p className="text-gray-400 text-center mb-8">
                    We'd love to hear from you! Please fill out the form below.
                </p>

                <Form method="POST" action="/contact" className="flex flex-col gap-5">
                    {/* Name Input */}
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />

                    {/* Email Input */}
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />

                    {/* Message Box */}
                    <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
                    />

                    {/* Submit Button */}
                    <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
                    >
                    Submit
                    </button>
                </Form>
                </div>
            </div>
            </>

    )
}