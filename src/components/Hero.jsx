 

const services = [  
    { title: 'Web Development', description: 'Creating responsive websites.' },  
    { title: 'UI/UX Design', description: 'Designing engaging user experiences.' },  
    // Add more services as needed  
];  

const Services = () => {  
    return (  
        <section>  
            <h2>SERVICES</h2>  
            {services.map((service, index) => (  
                <div key={index}>  
                    <h4>{service.title}</h4>  
                    <p>{service.description}</p>  
                </div>  
            ))}  
        </section>  
    );  
};  

export default Services;