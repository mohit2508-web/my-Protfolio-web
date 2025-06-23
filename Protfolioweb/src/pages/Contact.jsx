export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-6">Let's Build Something Amazing</h2>
      <p className="text-gray-400 text-center max-w-xl mb-12">
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <form
        action="https://formspree.io/f/xnnvgvqr"  // <-- your Formspree endpoint
        method="POST"
        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl w-full max-w-xl shadow-xl space-y-6"
      >
        <div className="relative w-full">
          <input
            type="text"
            name="name"
            required
            className="peer w-full bg-transparent border border-gray-300 text-white rounded-md p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-transparent"
            placeholder=" "
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all
                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-500
                            peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400">
            Your Name
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="email"
            name="email"
            required
            className="peer w-full bg-transparent border border-gray-300 text-white rounded-md p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-transparent"
            placeholder=" "
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all
                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-500
                            peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400">
            Your Email
          </label>
        </div>

        <div className="relative w-full">
          <textarea
            name="message"
            rows="4"
            placeholder=" "
            className="peer w-full p-4 pt-6 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all
                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-500
                            peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400">
            Your Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-xl transition"
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}
