
import { Check, Users, Brain, Clock, Video, Award } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    { icon: Video, text: "Demo Session 1" },
    { icon: Video, text: "36 Videos" },
    { icon: Award, text: "36 Assignments" },
    { icon: Clock, text: "Life Time Access" }
  ];

  return (
    <div className="bg-[#222] rounded-2xl overflow-hidden p-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white text-black rounded-xl flex p-3 h-full items-center">
            <feature.icon className="text-orange-500 w-6 h-6 flex-shrink-0 mr-3" />
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center mt-6">
        <div className="flex-shrink-0 mr-6">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">AR</span>
          </div>
        </div>
        
        <div className="flex flex-col items-start justify-start leading-6 gap-4">
          <div className="bg-orange-500 px-4 py-2 text-sm rounded-xl text-white font-semibold">
            Your Teacher
          </div>
          <h3 className="text-2xl text-white font-semibold">
            Aleena Rais
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            10 वर्षांचा Corporate क्षेत्रात, Mumbai मध्ये, Human Resource Management (HR) मध्ये अनुभव तसेच 9 वर्षांपासून students, teachers, business professionals, working professionals आणि housewives यांना — Spoken English, Confidence Building, Soft Skills आणि Personality Development या areas मध्ये. आजपर्यंत 1000+ students ना train केलं आहे.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
