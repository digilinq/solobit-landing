import React from "react";
import Service from "./Service";

const services = [
    {
        title: "Price Service",
        description: "Get the best prices for your products."
    },
    {
        title: "Product Service",
        description: "Manage your product listings efficiently."
    },
    {
        title: "Order Service",
        description: "Handle orders seamlessly with our service."
    }
];

const Services = () => {
    return (
        <section className="services my-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <Service
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
