import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import FeaturesSection from '../components/home/FeaturesSection.jsx';
import PricingSection from '../components/home/PricingSection.jsx';
import MoodSelector from '../components/home/MoodSelector.jsx';

const HomePage = () => {
    const navigate = useNavigate();
    const [selectedMood, setSelectedMood] = useState(null);

    // centralizes simple navigation/scroll behavior
    const scrollToId = useCallback((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const handleGetStarted = useCallback(() => {
        navigate('/auth/register');
    }, [navigate]);

    const handleLearnMore = useCallback(() => {
        scrollToId('testimonials');
    }, [scrollToId]);

    const handleRecommend = useCallback((queryString) => {
        if (queryString && typeof queryString === 'string') {
            navigate(`/recipes?${queryString}`)
            return
        }
        const qp = selectedMood ? `?mood=${encodeURIComponent(selectedMood)}` : ''
        navigate(`/recipes${qp}`)
    }, [navigate, selectedMood])

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main>
                <HeroSection onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
                {/* Pass 'plan' to preview tier gating in the selector. Change to 'pro' or 'family' to preview more options. */}
                <MoodSelector plan="free" selected={selectedMood} onSelect={setSelectedMood} onRecommend={handleRecommend} />
                <FeaturesSection />
                <PricingSection />
                <Testimonials />
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
