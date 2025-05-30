
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      
      if (section) {
        window.scrollTo({
          top: section.offsetTop, // Offset to account for fixed navbar
          behavior: 'smooth'
        });
      }
    };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 z-0"></div>
      
      <div className="z-10 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="block">Hi, I'm</span>
          <span className="block gradient-text text-5xl md:text-7xl lg:text-8xl mt-2">Edmar Bevilaqua</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-8">
          Data Scientist & Machine Learning Engineer, creating impactful solutions through data-driven insights
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 border-none text-white font-medium px-6 py-2"
            onClick={scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button
            className="border-white/20 hover:bg-white/10"
            onClick={scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href=""
            onClick={scrollToSection('about')}
          >
            <ArrowDown className="w-6 h-6" />
          </a>
      </div>
    </section>
  );
};

export default HeroSection;
