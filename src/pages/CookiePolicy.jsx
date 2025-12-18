import React from 'react'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'

const CookiePolicy = () => {
  const lastUpdated = 'December 18, 2025'
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Page header */}
            <header className="mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Cookie Policy</h1>
              <p className="text-gray-500 mt-2">Last updated: {lastUpdated}</p>
            </header>

            <p className="text-gray-700 leading-relaxed mb-8">
              This Cookie Policy explains how MoodPlate ("we", "our", or "us") uses cookies and similar technologies on
              our website and applications (the "Services"). It should be read together with our Privacy Policy to
              understand how we process personal data.
            </p>

            {/* Summary box */}
            <div className="rounded-xl bg-white border border-gray-200 p-6 mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">At a glance</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We use essential, performance/analytics, functional, and marketing cookies.</li>
                <li>Where required by law, we only set non-essential cookies with your consent.</li>
                <li>You can withdraw or change your consent anytime via our cookie settings or your browser.</li>
                <li>Contact us at <a className="text-orange-600 hover:underline" href="mailto:privacy@moodplate.com">privacy@moodplate.com</a> for any cookie-related questions.</li>
              </ul>
            </div>

            <section className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">1) What are cookies?</h2>
                <p>
                  Cookies are small text files placed on your device when you visit a website. They are widely used to
                  make websites work, or work more efficiently, as well as to provide reporting information. Similar
                  technologies (such as local storage, pixels, and SDKs) are also used for these purposes and are treated
                  as cookies in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">2) Types of cookies we use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Essential (Strictly Necessary)</h3>
                    <p>Required for core functionality like page navigation, security, and form submissions. These cannot be switched off.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Performance & Analytics</h3>
                    <p>Help us understand how users interact with the Services so we can improve performance and features.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Functional</h3>
                    <p>Remember preferences (such as language, theme, and saved settings) to provide a more personalized experience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketing/Advertising</h3>
                    <p>Used to deliver and measure the effectiveness of advertising. These may be set by us or third parties.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">3) Lawful basis & consent</h2>
                <p>
                  Under GDPR/UK GDPR and similar laws, we only set non-essential cookies with your consent. Essential
                  cookies are processed based on our legitimate interest in providing secure, functioning Services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">4) Managing your preferences</h2>
                <p className="mb-3">
                  You can manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Cookie banner/settings: Use our cookie banner to accept, reject, or customize non-essential cookies. You can revisit preferences at any time using the link below.
                  </li>
                  <li>
                    Browser controls: Configure your browser to block or delete cookies. Instructions are available in your browser's help documentation.
                  </li>
                  <li>
                    Mobile identifiers: On mobile devices, use your system settings to reset or limit advertising identifiers.
                  </li>
                </ul>
                {/* Placeholder button for future cookie preferences UI */}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => alert('Cookie preferences UI not yet implemented.')}
                    className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Open cookie preferences
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">5) Third-party cookies</h2>
                <p>
                  Some cookies are set by third-party services we use (for example, analytics, customer support widgets,
                  or embedded content). These providers may process data about your use of our Services subject to their
                  own privacy policies. We contractually require appropriate protections where applicable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">6) Retention</h2>
                <p>
                  Cookie lifetimes vary. Session cookies expire when you close your browser. Persistent cookies remain on
                  your device until they expire or you delete them via your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">7) Changes to this Cookie Policy</h2>
                <p>
                  We may update this policy from time to time. We will post the updated version with the revised "Last
                  updated" date. If changes are material, we may provide additional notice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">8) Contact</h2>
                <p>
                  Questions or requests regarding cookies? Contact us at
                  {' '}<a href="mailto:privacy@moodplate.com" className="text-orange-600 hover:underline">privacy@moodplate.com</a>
                  {' '}or by mail at MoodPlate, San Francisco, CA 94102, USA.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CookiePolicy
