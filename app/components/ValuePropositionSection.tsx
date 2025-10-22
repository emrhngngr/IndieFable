import { FaGem, FaCheckCircle, FaHeart } from "react-icons/fa";

export default function ValuePropositionSection() {
  return (
    <section className="py-24 relative overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <FaGem className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Discover Hidden Gems
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Discover indie games made with passion that stand out among
                thousands. Find unique experiences crafted by talented creators.
              </p>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <FaCheckCircle className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Hand-Picked Quality
              </h3>
              <p className="text-gray-300 leading-relaxed">
                No algorithms, no noise. Every game on IndieFable is
                hand-selected for its quality and creativity. If it's here, it's
                worth your time.
              </p>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                <FaHeart className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Support Talented Devs
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We link directly to the developers' Steam, Itch.io, or personal
                pages. Find a game you love and support its creator directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}