
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
    <section className="px-6 py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          <span className="text-white">As </span>
          <span className="text-orange-500">seen in</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {mediaLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-[#222] rounded-xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <img 
                src={logo.placeholder} 
                alt={logo.name}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
