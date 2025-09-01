import React from 'react'
import Navbar from '../components/Navbar.tsx'
import About from '../components/About.tsx'
import Projects from '../components/Projects.tsx'
import Contact from '../components/Contact.tsx'
import Footer from '../components/Footer.tsx'
export default function Home() {
    return (
        <div className="bg-[#111418] min-h-screen w-full">
            <Navbar />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}