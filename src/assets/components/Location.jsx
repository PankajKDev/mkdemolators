import  { memo } from 'react';

const Location = memo(function Location() {
    return (
        <div className="bg-gray-100 text-gray-900 py-12">
            <div className="container mx-auto px-4 md:w-3/5 w-full">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Location</h2>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="mb-8 md:mb-0 md:mr-4">
                        <h3 className="text-xl font-bold">Paschim Vihar</h3>
                        <p className="mb-2">New Delhi, Delhi, India</p>
                    </div>
                    <div className="md:w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0904561928!2d77.10380131500001!3d28.6688704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d0c4c1c3e3%3A0x6c7d7c5f38ed3c9d!2sPaschim%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1619546991636!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Location;
