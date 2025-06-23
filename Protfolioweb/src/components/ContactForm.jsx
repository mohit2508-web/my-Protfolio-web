export default function ContactForm() {
  return (
    <section id="contact" className="p-10 text-center bg-gray-200">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 rounded" />
        <textarea placeholder="Message" rows="4" className="w-full p-2 rounded" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800">
          Send
        </button>
      </form>
    </section>
  );
}
