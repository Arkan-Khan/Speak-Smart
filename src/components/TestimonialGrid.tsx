
import { Star, Quote } from "lucide-react";

const TestimonialGrid = () => {
  const testimonials = [
    {
      name: "राहुल शर्मा",
      role: "Student",
      content: "या कोर्समुळे माझा आत्मविश्वास खूप वाढला आहे. आता मी इंग्रजीत freely बोलू शकतो.",
      rating: 5,
      size: "large"
    },
    {
      name: "प्रिया पाटील",
      role: "Teacher",
      content: "अलीना मॅडमचा teaching style खूप सोपा आणि effective आहे.",
      rating: 5,
      size: "medium"
    },
    {
      name: "अमित कुमार",
      role: "Working Professional",
      content: "Office मध्ये presentation देताना आता confident feel होतो.",
      rating: 5,
      size: "medium"
    },
    {
      name: "सुनीता देवी",
      role: "Housewife",
      content: "मुलांना help करताना आता English मध्ये guidance देऊ शकते.",
      rating: 5,
      size: "large"
    },
    {
      name: "विकास जाधव",
      role: "Business Owner",
      content: "Business meetings मध्ये fluently communicate करू शकतो.",
      rating: 5,
      size: "small"
    }
  ];

  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">विद्यार्थ्यांचे </span>
          <span className="text-orange-500">फीडबॅक</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 hover:shadow-lg transition-shadow ${
                testimonial.size === 'large' ? 'md:col-span-2' : 
                testimonial.size === 'medium' ? 'md:col-span-1' : 'md:col-span-1'
              }`}
            >
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-black font-semibold">{testimonial.name}</h4>
                  <p className="text-orange-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
