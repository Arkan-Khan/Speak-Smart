
const AsSeenIn = () => {
  const mediaLogos = [
    { name: "Media 1", placeholder: "https://dummyimage.com/120x60/cccccc/969696?text=Media+1" },
    { name: "Media 2", placeholder: "https://dummyimage.com/120x60/cccccc/969696?text=Media+2" },
    { name: "Media 3", placeholder: "https://dummyimage.com/120x60/cccccc/969696?text=Media+3" },
    { name: "Media 4", placeholder: "https://dummyimage.com/120x60/cccccc/969696?text=Media+4" },
    { name: "Media 5", placeholder: "https://dummyimage.com/120x60/cccccc/969696?text=Media+5" },
    { name: "Media 6", placeholder: "https://dummyimage.com/120x60/cccccc/969696?text=Media+6" }
  ];

  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          <span className="text-white">As </span>
          <span className="text-orange-500">seen in</span>
        </h2>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-6 grid-rows-2 gap-4 h-64">
          {/* Large item - spans 2x2 */}
          <div className="col-span-2 row-span-2 bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src={mediaLogos[0].placeholder} 
              alt={mediaLogos[0].name}
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          {/* Medium items - span 2x1 each */}
          <div className="col-span-2 bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src={mediaLogos[1].placeholder} 
              alt={mediaLogos[1].name}
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="col-span-2 bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src={mediaLogos[2].placeholder} 
              alt={mediaLogos[2].name}
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          {/* Small items - span 1x1 each */}
          <div className="bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src={mediaLogos[3].placeholder} 
              alt={mediaLogos[3].name}
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src={mediaLogos[4].placeholder} 
              alt={mediaLogos[4].name}
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src={mediaLogos[5].placeholder} 
              alt={mediaLogos[5].name}
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src="https://dummyimage.com/120x60/cccccc/969696?text=Media+7" 
              alt="Media 7"
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
