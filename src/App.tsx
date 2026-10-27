/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractivePredictor from './components/InteractivePredictor';
import HowItWorks from './components/HowItWorks';
import AboutProject from './components/AboutProject';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors bg-white dark:bg-[#0c1017] text-slate-900 dark:text-slate-100">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <InteractivePredictor />
          <HowItWorks />
          <AboutProject />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
