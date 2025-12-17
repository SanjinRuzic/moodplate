import React, { useCallback, useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import FeaturesSection from '../components/home/FeaturesSection.jsx';
import PricingSection from '../components/home/PricingSection.jsx';

const HomePage = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    // centralizes simple navigation/scroll behavior
    const scrollToId = useCallback((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const handleGetStarted = useCallback(() => {
        // Optionally set a default plan; for now just scroll to pricing
        if (!selectedPlan) setSelectedPlan('Pro');
        scrollToId('pricing');
    }, [scrollToId, selectedPlan]);

    const handleLearnMore = useCallback(() => {
        scrollToId('testimonials');
    }, [scrollToId]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main>
                <HeroSection onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
                <FeaturesSection />
                <PricingSection />
                <Testimonials />
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
