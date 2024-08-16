export default function ContactMe() {
    return (
    <section id="Contact" className="contact--section">
        <div>
            <h2 className="about--section--heading">Contact Me</h2>
        </div>
        <form
        className="contact--form--container"
        action="https://formspree.io/f/xldrlnwd"
        method="POST">
        <div className="container">
            <label htmlFor="name" className="contact--label">
                <span className="text-md">Name</span>
                <input
                    type="text"
                    className="contact--input text-md"
                    name="name"
                    id="name"
                    required
                />
            </label>
            <label htmlFor="email" className="contact--label">
                <span className="text-md">Email</span>
                <input
                    type="email"
                    className="contact--input text-md"
                    name="email"
                    id="email"
                    required
                />
            </label>
        </div>
        <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
            />
        </label>
        <div>
                <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
        </form>
    </section>
    );
}
