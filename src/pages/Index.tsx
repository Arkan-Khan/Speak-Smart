
import { Check, Play, Star, Users, Video, Clock, BookOpen, Award, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "@/components/CountdownTimer";
import FeatureGrid from "@/components/FeatureGrid";
import CourseHighlights from "@/components/CourseHighlights";
import TargetAudience from "@/components/TargetAudience";
import TestimonialGrid from "@/components/TestimonialGrid";
import AsSeenIn from "@/components/AsSeenIn";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <span className="text-xl font-semibold text-white">Speak Smart</span>
        </div>
        
        <div className="flex space-x-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
            Enroll Now
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-white">ग्रामीण भागातील लोकांसाठी</span><br />
          <span className="text-orange-500">इंग्रजी बोलायला शिकवणारा एकमेव कोर्स</span>
        </h2>
        
        <h3 className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
          इंग्रजीची भीती घालवा ! आत्मविश्वास वाढवा !<br />
          अभ्यास म्हणून नव्हे तर भाषा म्हणून बोलायला शिका
        </h3>

        {/* 5 Star Reviews Badge */}
        <div className="inline-flex flex-col items-center space-y-2 bg-[#222] border border-orange-500 px-6 py-4 rounded-xl mb-12">
          <span className="text-yellow-400 font-medium">५ स्टार Reviews</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mobile: Video First, Desktop: Features First */}
            <div className="md:order-1 order-2">
              <FeatureGrid />
            </div>
            
            {/* Mobile: Features Second, Desktop: Video Second */}
            <div className="md:order-2 order-1 flex flex-col items-center justify-between rounded-lg">
              <div className="w-full p-4 bg-[#222] shadow-md rounded-xl mb-4">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-orange-500 rounded-full p-4">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded">
                    <span className="text-white text-sm">Introduction Video</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-white text-lg leading-normal my-4 text-center">
                Reserve a seat by <span className="text-orange-500 font-bold">June 1, 2025</span> to unlock<br />
                <span className="font-medium">Bonuses worth Rs. 18,000</span>
              </h3>
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-6 rounded-2xl text-xl font-medium">
                Reserve Seat for ₹999 <span className="line-through text-sm ml-2">₹2500</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <AsSeenIn />

      {/* Target Audience Section */}
      <TargetAudience />

      {/* Course Highlights */}
      <CourseHighlights />

      {/* Testimonials */}
      <TestimonialGrid />

      {/* Final CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-white">Join Now</span><br />
            <span className="text-orange-500">60% Discount</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-4xl font-bold text-red-500 line-through">₹2500</span>
            <span className="text-5xl font-bold text-orange-500">₹999</span>
          </div>

          <CountdownTimer />
          
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold mt-8 transform hover:scale-105 transition-transform">
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
