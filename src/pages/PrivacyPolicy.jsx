import React from 'react'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'

const PrivacyPolicy = () => {
    const lastUpdated = 'December 17, 2025'
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        {/* Page header */}
                        <header className="mb-10 text-center">
                            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Privacy Policy</h1>
                            <p className="text-gray-500 mt-2">Last updated: {lastUpdated}</p>
                        </header>

                        {/* Intro */}
                        <p className="text-gray-700 leading-relaxed mb-8">
                            MoodPlate ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                            what personal data we collect, how we use it, and the rights available to you. It applies to our website,
                            applications, and related services (collectively, the "Services").
                        </p>

                        {/* Contents */}
                        <div className="rounded-xl bg-white border border-gray-200 p-6 mb-10">
                            <h2 className="text-lg font-semibold text-gray-900 mb-3">In this policy</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Who we are and how to contact us</li>
                                <li>Data we collect and how we use it</li>
                                <li>Cookies and similar technologies</li>
                                <li>Sharing and international transfers</li>
                                <li>Data retention and security</li>
                                <li>Your rights (GDPR/EEA, UK, and other regions)</li>
                                <li>Children’s privacy</li>
                                <li>Changes to this policy</li>
                            </ul>
                        </div>

                        <section className="space-y-8 text-gray-700">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">1) Who we are</h2>
                                <p>
                                    The data controller for your personal data is MoodPlate, San Francisco, CA 94102, United States.
                                    You can contact us at <a href="mailto:privacy@moodplate.com" className="text-orange-600 hover:underline">privacy@moodplate.com</a>.
                                    If required, we will provide contact details of our EU/UK representative or Data Protection Officer.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">2) What data we collect</h2>
                                <p className="mb-3">We collect the following categories of personal data, depending on your interactions with the Services:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Account and contact information: name, email address, preferences, and any details you choose to
                                        provide when registering or contacting support.
                                    </li>
                                    <li>
                                        Usage data: device and browser information, IP address, pages viewed, clicks, and interaction
                                        patterns to improve performance and content relevance.
                                    </li>
                                    <li>
                                        Content you submit: saved recipes, favorites, mood inputs and dietary selections you choose to
                                        provide to personalize recommendations.
                                    </li>
                                    <li>
                                        Transactional data (for paid plans): limited billing details handled by our payment processor. We do
                                        not store full payment card numbers.
                                    </li>
                                    <li>
                                        Cookies and similar technologies as described below.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">3) How we use your data and legal bases</h2>
                                <p className="mb-3">We process personal data for the following purposes and legal bases under GDPR:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        To provide and operate the Services, personalize content, and maintain security (performance of a
                                        contract, Art. 6(1)(b)).
                                    </li>
                                    <li>
                                        To improve and develop features, analytics, and user experience (legitimate interests, Art. 6(1)(f)).
                                    </li>
                                    <li>
                                        To send service communications and respond to inquiries (performance of a contract/legitimate
                                        interests).
                                    </li>
                                    <li>
                                        To send marketing communications with your consent, where required (consent, Art. 6(1)(a)). You can
                                        withdraw consent at any time.
                                    </li>
                                    <li>
                                        To comply with legal obligations and enforce our terms (legal obligation, Art. 6(1)(c); legitimate
                                        interests).
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">4) Cookies and similar technologies</h2>
                                <p className="mb-3">
                                    We use cookies and similar technologies to operate the site, remember preferences, analyze traffic, and
                                    measure the effectiveness of campaigns. Where required by law, we request your consent before setting
                                    non-essential cookies. You can manage preferences in your browser or via our cookie banner/settings.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">5) Sharing and international transfers</h2>
                                <p className="mb-3">
                                    We may share data with service providers that help us operate the Services (e.g., hosting, analytics,
                                    customer support, payments). These providers process data on our behalf under contractual safeguards.
                                    Where data is transferred outside your jurisdiction (e.g., to the United States), we rely on
                                    appropriate safeguards such as Standard Contractual Clauses or other lawful transfer mechanisms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">6) Data retention</h2>
                                <p>
                                    We retain personal data only as long as necessary for the purposes described above, and as required by
                                    law. Retention periods depend on the type of data and your interactions (e.g., account lifetime plus a
                                    reasonable period for backup and legal compliance).
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">7) Security</h2>
                                <p>
                                    We implement technical and organizational measures designed to protect personal data against
                                    unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                                    Internet is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">8) Your rights</h2>
                                <p className="mb-3">
                                    Depending on your location, you may have rights to access, correct, delete, or port your data; object to
                                    or restrict certain processing; and withdraw consent. To exercise these rights, contact
                                    <a href="mailto:privacy@moodplate.com" className="text-orange-600 hover:underline"> privacy@moodplate.com</a>.
                                </p>
                                <p className="mb-3">
                                    EEA/UK users: you also have the right to lodge a complaint with your local supervisory authority. We will
                                    respond to verified requests as required by applicable law.
                                </p>
                                <p>
                                    California residents: we provide disclosures consistent with the CCPA/CPRA, including the right to know,
                                    delete, and opt-out of certain sharing. We do not sell personal information as defined by CPRA.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">9) Children’s privacy</h2>
                                <p>
                                    Our Services are not directed to children under 13 (or the age defined by your jurisdiction). We do not
                                    knowingly collect personal data from children. If you believe a child has provided us data, please
                                    contact us to remove it.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">10) Changes to this policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. We will post the updated version and revise the
                                    "Last updated" date. Material changes may be communicated via the Services or by email where
                                    appropriate.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">11) Contact</h2>
                                <p>
                                    Questions about this Privacy Policy or our privacy practices? Contact us at
                                    <a href="mailto:privacy@moodplate.com" className="text-orange-600 hover:underline"> privacy@moodplate.com</a> or by mail at
                                    MoodPlate, San Francisco, CA 94102, USA.
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
export default PrivacyPolicy