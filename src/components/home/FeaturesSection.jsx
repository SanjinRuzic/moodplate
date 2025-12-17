import React from 'react'
import { Check } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    { title: 'Smart AI Recommendations', description: 'Get personalized recommendations based on your current mood and preferences.' },
    { title: 'Save Time & Energy', description: 'No more endless scrolling - find the perfect recipe in seconds.' },
    { title: 'Track Your Journey', description: 'See how your mood changes over time and stay on top of your meal plans.' },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Header */}
          <div>
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-semibold text-sm rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Eating Made{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-semibold">Simple</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              MoodPlate takes the guesswork out of meal planning by matching recipes to your emotional state.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                {/* Checkmark icon */}
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                {/* Feature description */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 transition-colors group-hover:text-orange-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
