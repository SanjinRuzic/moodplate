import React from 'react'
import { Check, Crown, Sparkles } from 'lucide-react'

const defaultPlans = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    tagline: 'Get started with mood-based recipes',
    highlighted: false,
    features: [
      'Basic mood selector',
      '50+ curated recipes',
      'Save 10 favorites',
      'Email support',
    ],
    cta: { label: 'Start Free', href: '#signup' },
  },
  {
    name: 'Pro',
    price: 9,
    period: 'month',
    tagline: 'Unlock personalization & advanced filters',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'All Free features',
      'Full mood & intent tuning',
      'Dietary & cuisine filters',
      'Unlimited favorites & collections',
      'Meal planning & grocery list',
      'Priority support',
    ],
    cta: { label: 'Go Pro', href: '#checkout' },
  },
  {
    name: 'Family',
    price: 19,
    period: 'month',
    tagline: 'Everything in Pro for up to 5 people',
    highlighted: false,
    features: [
      'All Pro features',
      'Up to 5 member profiles',
      'Shared meal plans',
      'Allergy & kid-friendly modes',
      'Household pantry sync',
      'Family priority support',
    ],
    cta: { label: 'Get Family', href: '#checkout' },
  },
]

const PlanCard = ({ plan }) => {
  const isPro = plan.highlighted
  return (
    <div
      className={
        `relative rounded-2xl bg-white p-6 md:p-8 shadow-soft transition-all duration-300 ` +
        `${isPro ? 'ring-2 ring-orange-400/60 shadow-medium' : 'hover:shadow-medium hover:-translate-y-0.5'}`
      }
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shadow-sm">
            <Crown className="w-3.5 h-3.5" /> {plan.badge}
          </span>
        </div>
      )}

      <header className="mb-5">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          {isPro && <Sparkles className="w-5 h-5 text-amber-500" aria-hidden="true" />}
          {plan.name}
        </h3>
        <p className="text-gray-500 mt-1">{plan.tagline}</p>
      </header>

      <div className="flex items-end gap-2 mb-6">
        <span className="text-4xl font-bold text-gray-900">{plan.price === 0 ? 'Free' : `$${plan.price}`}</span>
        {plan.price !== 0 && (
          <span className="text-gray-500 mb-1">/ {plan.period}</span>
        )}
      </div>

      <ul className="space-y-3 mb-6" role="list">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={
              `mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full ` +
              `${isPro ? 'bg-amber-500' : 'bg-green-500'}`
            }>
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-gray-700">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.cta.href}
        className={
          `block w-full text-center rounded-xl font-semibold py-3 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ` +
          `${isPro
            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 focus:ring-orange-500'
            : 'border-2 border-gray-200 text-gray-900 hover:bg-gray-50 focus:ring-gray-400'}`
        }
        aria-label={`${plan.cta.label} - ${plan.name} plan`}
      >
        {plan.cta.label}
      </a>
    </div>
  )
}

const PricingSection = ({ plans = defaultPlans }) => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            Flexible pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Choose a plan that fits your appetite</h2>
          <p className="text-gray-600 mt-3">Start free. Upgrade anytime. Cancel whenever you like.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} plan={plan} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Prices shown in USD. Taxes may apply. 14‑day money‑back guarantee.
        </p>
      </div>
    </section>
  )
}

export default PricingSection
