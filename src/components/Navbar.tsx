
import { Star } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Star className="w-5 h-5 text-white/80" />
      </div>
      
      <div className="flex items-center space-x-8">
        <a href="#origins" className="font-manrope font-normal text-white/80 hover:text-white transition-colors">
          Origins
        </a>
        <a href="#records" className="font-manrope font-normal text-white/80 hover:text-white transition-colors">
          Records
        </a>
        <a href="#community" className="font-manrope font-normal text-white/80 hover:text-white transition-colors">
          Community
        </a>
      </div>
      
      <div className="font-manrope font-normal text-white/80">
        EN ⌄
      </div>
    </nav>
  );
};

export default Navbar;
