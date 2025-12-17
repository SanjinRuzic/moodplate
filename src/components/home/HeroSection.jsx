import React from 'react'
import { ChevronRight } from 'lucide-react'

const HeroSection = ({
  title = (
    <>
      Eat how you{' '}
      <span className="relative inline-block animate-levitate">
        <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          feel
        </span>
        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
          <path d="M2 10C60 4 140 4 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </>
  ),
  subtitle = 'Get instant, personalized recommendations that match your mood in seconds.',
  backgroundUrl = 'https://media.istockphoto.com/id/1459614849/photo/assorted-take-out-or-delivery-foods-above-view-side-border-on-a-dark-wood-background.jpg?s=612x612&w=0&k=20&c=WHXeojMhdKcMvwUKuWzyQW8U-svdauhodopm8QCEZc0=',
  onGetStarted,
  onLearnMore,
  trustIndicators = [
    { label: '500+ Recipes', colorClass: 'bg-orange-400' },
    { label: 'AI-Powered', colorClass: 'bg-amber-400' },
  ],
}) => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0">
        <img src={backgroundUrl} alt="Assorted take-out foods" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-amber-900/20"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 max-w-5xl leading-tight text-center">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 mx-auto text-gray-200 text-center leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onGetStarted}
            className="group relative flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
          >
            Get Started
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onLearnMore}
            className="group relative flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Trust Indicators */}
        {trustIndicators?.length > 0 && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-white/80 text-sm">
            {trustIndicators.map((ti, idx) => (
              <React.Fragment key={idx}>
                {idx !== 0 && <div className="hidden sm:block w-px h-4 bg-white/30"></div>}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${ti.colorClass || 'bg-orange-400'} animate-pulse`}></div>
                  <span>{ti.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
