
import { Check, Users, Brain, Clock, Video, Award, HeadphonesIcon } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    { icon: HeadphonesIcon, text: "Weekly Live Support" },
    { icon: Video, text: "36 Videos" },
    { icon: Award, text: "36 Assignments" },
    { icon: Clock, text: "Life Time Access" }
  ];

  return (
    <div className="bg-[#222] rounded-2xl overflow-hidden p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white text-black rounded-xl flex p-3 h-full items-center">
            <feature.icon className="text-orange-500 w-6 h-6 flex-shrink-0 mr-3" />
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center mt-6 px-2">
        <div className="flex-shrink-0 -mb-5 -ml-16">
          <img 
            src="/lovable-uploads/01d70fc5-289f-47c6-ba99-a5c6094395a3.png" 
            alt="Reshma Dabholkar Damari" 
            className="rounded w-[280px] object-cover"
          />
        </div>
        
        <div className="max-w-[300px] flex flex-col items-start justify-start leading-6 gap-4 pl-2 pr-1">
          <div className="bg-orange-500 px-4 py-2 text-sm rounded-xl text-white font-semibold">
            Your Trainer
          </div>
          <h3 className="sm:text-2xl text-base text-white font-semibold">
            Reshma Dabholkar Damari
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            इंग्रजी भाषा अगदी सहज सोप्या पद्धतीने शिकवणारी आणि आत्मविश्वास वाढवणारी अनुभवी प्रशिक्षक
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
