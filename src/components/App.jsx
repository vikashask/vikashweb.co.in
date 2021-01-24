import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import {
  aboutData,
  contactData,
  footerData,
  heroData,
  organizationData,
  projectsData,
} from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Organizations from './Organizations/Organizations';
import Projects from './Projects/Projects';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setOrganization([...organizationData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, organization, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Organizations />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
