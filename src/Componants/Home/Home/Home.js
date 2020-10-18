import React from 'react'
import Brand from '../Brand/Brand';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import WorkSlider from '../WorkSlider/WorkSlider';
import './Home.css';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Hero></Hero>
           <Brand></Brand>
           <Services></Services>
           <WorkSlider></WorkSlider>
           <ClientFeedback></ClientFeedback>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;