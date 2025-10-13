export default function OurStory() {
  return (
    <section className="min-h-[calc(100vh-65px)] flex justify-center px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-16">
            Our Roadmap
          </h1>
          
          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500 h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24">
              
              {/* Timeline Item 1 - The Problem */}
              <div className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content - Left Side */}
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">The Problem</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Independent game developers often create technically brilliant games, but face serious challenges 
                      when it comes to marketing and visibility. The development process usually happens behind closed 
                      doors, and games only emerge on launch day.
                    </p>
                  </div>
                </div>
                
                {/* Empty space for right side */}
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Timeline Item 2 - Our Vision */}
              <div className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Empty space for left side */}
                <div className="w-1/2 pr-12"></div>
                
                {/* Content - Right Side */}
                <div className="w-1/2 pl-12 text-left">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                    <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Vision</h2>
                    <p className="text-gray-300 leading-relaxed">
                      IndieFable is a platform where developers share their game development journey from the very 
                      beginning, presenting this process through visual and interactive "developer logs" (devlogs). 
                      We enable developers to market their process while players witness creation stories.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 - Our Philosophy */}
              <div className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content - Left Side */}
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Philosophy</h2>
                    <p className="text-gray-300 text-xl font-medium mb-3">
                      "The process itself is the best marketing."
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      We believe that by sharing the journey, the struggles, the breakthroughs, and the passion 
                      behind game development, developers can build authentic relationships with their audience.
                    </p>
                  </div>
                </div>
                
                {/* Empty space for right side */}
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Timeline Item 4 - Join the Movement */}
              <div className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Empty space for left side */}
                <div className="w-1/2 pr-12"></div>
                
                {/* Content - Right Side */}
                <div className="w-1/2 pl-12 text-left">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Join the Movement</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Whether you're an indie developer looking to share your journey or a gaming enthusiast 
                      who loves to see how games come to life, IndieFable is your platform. Let's change how 
                      games are discovered, one development story at a time.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}