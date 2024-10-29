const Testimonials = () => {
  const testimonials = [
    { author: "Client A", feedback: "Great work!" },
    { author: "Client B", feedback: "I love the design!" },
  ];

  return (
    <section>
      <h2>TESTIMONIALS</h2>
      {testimonials.map((item, index) => (
        <div key={index}>
          <h4>{item.author}</h4>
          <p>{item.feedback}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
