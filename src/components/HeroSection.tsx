
const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video 
        src="https://res.cloudinary.com/anubhav1602/video/upload/v1750880023/g81ygrvfr9cjf4gydbg0.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-2xl px-8 pt-32 text-white">
          <h1 className="font-libre-caslon text-6xl font-light tracking-tight leading-[1.1]">
            Into the Quiet Unknown
          </h1>
          <p className="mt-4 font-manrope text-base font-normal text-white/80">
            The unknown isn't always loud. Sometimes it whispers. And if you pause long enough, you'll hear where it wants to take you.
          </p>
          <button className="mt-6 bg-white text-black px-5 py-2 rounded-lg font-manrope text-sm font-medium hover:bg-gray-100 transition">
            Walk With Us →
          </button>
        </div>
      </div>
      
      {/* Right Side Decorative Text */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="transform rotate-90 origin-center">
          <span className="font-manrope text-sm font-normal text-white/60 tracking-widest uppercase">
            FIELD ENTRY CHAPTER ONE
          </span>
        </div>
      </div>
      
      {/* Bottom Right Copyright */}
      <div className="absolute bottom-6 right-8 z-20">
        <span className="font-manrope text-xs text-white/60">© Luna</span>
      </div>
      
      {/* Bottom Left Founded Label */}
      <div className="absolute bottom-6 left-8 z-20">
        <span className="font-manrope text-xs text-white/50">✦ Founded in Stillness, 2025</span>
      </div>
    </div>
  );
};

export default HeroSection;
