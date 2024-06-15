import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MyComponent from './MyComponent.jsx';
import Footer from './footer.jsx'; 
import Contact from './contact.jsx'; 
import Services from './services.jsx'; 
import About from './about.jsx'; 
import Header from './header.jsx'; 


const rootElement = document.getElementById('root');
const footerElement = document.getElementById('footer');
const contactElement = document.getElementById('contact');
const servicesElement = document.getElementById('services');
const aboutElement = document.getElementById('about');
const headerElement = document.getElementById('head');

const root = createRoot(rootElement);
const footerRoot = createRoot(footerElement);
const contactRoot = createRoot(contactElement);
const servicesRoot = createRoot(servicesElement);
const aboutRoot = createRoot(aboutElement);
const headRoot = createRoot(headerElement);

root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);

footerRoot.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

contactRoot.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

servicesRoot.render(
  <React.StrictMode>
    <Services /> 
  </React.StrictMode>
);

aboutRoot.render(
  <React.StrictMode>
    <About /> 
  </React.StrictMode>
);

headRoot.render(
  <React.StrictMode>
    <Header /> 
  </React.StrictMode>
);
