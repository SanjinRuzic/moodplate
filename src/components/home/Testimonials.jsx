import React from 'react'
import { Quote, Star, CheckCircle2 } from 'lucide-react'

// Simple star rating renderer (4–5 stars typical)
const Stars = ({ rating = 5 }) => {
  const stars = Array.from({ length: 5 })
  return (
    <div className="flex items-center" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((_, i) => {
        const active = i < rating
        return (
          <Star
            key={i}
            className={
              `w-4 h-4 mr-1 ${active ? 'text-amber-400' : 'text-gray-300'}`
            }
            // Lucide icons can be visually filled by setting fill to currentColor
            fill={active ? 'currentColor' : 'none'}
            strokeWidth={active ? 0 : 2}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}

const defaultItems = [
  {
    name: 'Alicia Gomez',
    subtitle: 'Busy Mom, Seattle',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 5,
    text:
      'MoodPlate takes the pressure off dinner. On stressful days, I just pick my mood and it serves up quick, comforting meals my kids actually eat.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Marcus Lee',
    subtitle: 'Fitness Enthusiast, NYC',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 5,
    text:
      'I love how the suggestions match my post‑workout vibe. High‑protein ideas when I need fuel, lighter dishes when I want something clean.',
    date: 'November 2025',
    verified: true,
  },
  {
    name: 'Priya Nair',
    subtitle: 'Product Manager, Austin',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 4,
    text:
      'The recipes feel curated, not random. It saves me from decision fatigue and helps me discover new flavors I actually enjoy.',
    date: 'October 2025',
    verified: true,
  },
  {
    name: 'Daniel Carter',
    subtitle: 'Student, Chicago',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 5,
    text:
      'As someone on a budget, the quick suggestions and simple ingredients are clutch. I’m cooking more and wasting less.',
    date: '3 days ago',
    verified: false,
  },
  {
    name: 'Sofia Rossi',
    subtitle: 'Designer, Milan',
    avatar: 'https://images.unsplash.com/photo-1544005316-04ceeeaa17d3?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 5,
    text:
      'The interface is beautiful and the mood tags are spot on. My partner and I stopped arguing about what to cook!',
    date: 'January 2025',
    verified: true,
  },
  {
    name: 'Hiro Tanaka',
    subtitle: 'Engineer, Tokyo',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 5,
    text:
      'Suggestions are surprisingly accurate. I set my mood to cozy and instantly got a lineup of soups and rice bowls I loved.',
    date: '1 month ago',
    verified: true,
  },
  {
    name: 'Emily Chen',
    subtitle: 'Nurse, Vancouver',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 5,
    text:
      'Long shifts make meal planning hard. MoodPlate’s quick picks help me eat well without overthinking it.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Omar Farouk',
    subtitle: 'Entrepreneur, Dubai',
    avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=256&auto=format&fit=facearea&facepad=3&h=256',
    rating: 4,
    text:
      'Great balance of healthy and indulgent. I’d love more Middle Eastern options, but what’s here already hits the spot.',
    date: 'September 2025',
    verified: false,
  },
]

const Testimonials = ({ items = defaultItems }) => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <CheckCircle2 className="w-4 h-4" /> Loved by food lovers
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            What Our Users Are Saying
          </h2>
          <p className="text-gray-600 mt-3">Real stories from people using MoodPlate to turn feelings into meals.</p>
        </header>

        {/* Grid: 1 / 2 / 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((t, idx) => (
            <article key={idx} className="relative bg-white rounded-2xl shadow-soft p-6 md:p-7">
              {/* Decorative quote */}
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-orange-200" aria-hidden="true" />

              <div className="flex items-start gap-4">
                <img
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    {t.verified && (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified User
                      </span>
                    )}
                  </div>
                  {t.subtitle && (
                    <p className="text-sm text-gray-500">{t.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <Stars rating={t.rating} />
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {t.text}
                </p>
              </div>

              <footer className="mt-4 text-sm text-gray-500">{t.date}</footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
