import React from 'react'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'

const TermsOfService = () => {
    const lastUpdated = 'December 17, 2025'
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        {/* Page header */}
                        <header className="mb-10 text-center">
                            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Terms of Service</h1>
                            <p className="text-gray-500 mt-2">Last updated: {lastUpdated}</p>
                        </header>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            These Terms of Service ("Terms") govern your access to and use of MoodPlate’s website, applications, and
                            related services (the "Services"). By accessing or using the Services, you agree to be bound by these Terms.
                            If you do not agree, do not use the Services.
                        </p>

                        <section className="space-y-8 text-gray-700">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">1) Eligibility</h2>
                                <p>
                                    You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the Services.
                                    If you are under the age of majority, you may use the Services only with the consent and supervision of a
                                    parent or legal guardian.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">2) Accounts and Security</h2>
                                <p className="mb-3">
                                    You are responsible for maintaining the confidentiality of your account credentials and for all
                                    activities that occur under your account. Notify us immediately of any unauthorized use or suspected
                                    breach of security.
                                </p>
                                <p>
                                    We may suspend or terminate your account for violations of these Terms or for conduct that we believe
                                    harms other users, us, or third parties.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">3) Acceptable Use</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Do not use the Services in any unlawful or harmful manner.</li>
                                    <li>Do not attempt to access or disrupt non-public areas, servers, or networks.</li>
                                    <li>Do not misuse the Services by introducing malware or scraping without permission.</li>
                                    <li>Do not infringe the intellectual property or privacy rights of others.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">4) User Content</h2>
                                <p className="mb-3">
                                    You may submit content such as profile information, preferences, reviews, and saved items ("User
                                    Content"). You retain ownership of your User Content, but you grant us a non-exclusive, worldwide,
                                    royalty-free license to host, store, display, and use your User Content to operate and improve the
                                    Services. You are responsible for your User Content and represent that you have the necessary rights to
                                    share it.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">5) Intellectual Property</h2>
                                <p>
                                    The Services and their original content, features, and functionality are the exclusive property of
                                    MoodPlate and its licensors. These Terms do not grant you any rights to use our trademarks, branding, or
                                    logos without our prior written permission.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">6) Subscriptions, Billing, and Refunds</h2>
                                <p className="mb-3">
                                    Some features may require a paid subscription. Prices, billing cycles, and available plans are described
                                    at the point of purchase and may change with notice. Taxes may apply. By subscribing, you authorize us or
                                    our payment processor to charge your chosen payment method.
                                </p>
                                <p>
                                    Unless stated otherwise, subscriptions renew automatically until canceled. You can cancel at any time in
                                    your account settings; access continues until the end of the current billing period. Where a refund
                                    policy applies (e.g., a money‑back guarantee), the terms will be stated at purchase.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">7) Health and Nutrition Disclaimer</h2>
                                <p>
                                    Our content is for informational purposes only and is not a substitute for professional medical advice,
                                    diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with
                                    any questions you may have regarding a medical condition or dietary needs.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">8) Disclaimer of Warranties</h2>
                                <p>
                                    The Services are provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted by
                                    law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular
                                    purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, secure, or
                                    error-free.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">9) Limitation of Liability</h2>
                                <p>
                                    To the fullest extent permitted by law, MoodPlate and its affiliates will not be liable for any indirect,
                                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                                    incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses,
                                    resulting from your use of or inability to use the Services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">10) Indemnification</h2>
                                <p>
                                    You agree to defend, indemnify, and hold harmless MoodPlate and its affiliates from and against any
                                    claims, liabilities, damages, losses, and expenses, including reasonable attorney’s fees, arising out of
                                    or in any way connected with your access to or use of the Services or your violation of these Terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">11) Changes to the Services and Terms</h2>
                                <p className="mb-3">
                                    We may modify or discontinue all or part of the Services at any time. We may also update these Terms from
                                    time to time. When we do, we will revise the "Last updated" date above and may provide additional notice
                                    where appropriate. Your continued use of the Services after changes take effect constitutes acceptance of
                                    the updated Terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">12) Governing Law; Dispute Resolution</h2>
                                <p className="mb-3">
                                    These Terms are governed by the laws of the jurisdiction where MoodPlate is established, without regard
                                    to its conflict of laws principles. Any disputes will be resolved in the courts of that jurisdiction,
                                    unless otherwise required by applicable consumer protection laws.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Optional arbitration/class action waiver language may be provided and agreed separately, depending on
                                    your location and applicable laws.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">13) Privacy</h2>
                                <p>
                                    Please review our <a href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</a> to
                                    understand how we collect, use, and share information about you.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">14) Contact</h2>
                                <p>
                                    If you have questions about these Terms, please contact us at
                                    <a href="mailto:legal@moodplate.com" className="text-orange-600 hover:underline"> legal@moodplate.com</a>.
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

export default TermsOfService