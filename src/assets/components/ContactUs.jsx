

const ContactUs = () => {
    return (
        <div className="bg-gray-900 py-12 w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                    <p className="text-lg mb-4">
                        If you have any questions or need further information, feel free to reach out to us!
                    </p>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Phone:</h3>
                        <a href="tel:+919911775859">
                        <p className="text-gray-300">+91 9911775859</p>
                        </a>
                       
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Email:</h3>
                        <a className="" href="mailto:manojkirad999@gmail.com">
                        <p className="text-gray-300">manojkirad999@gmail.com</p>
                        </a>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
