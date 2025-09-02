  import React from "react";
  import { Button } from "../ui/button";

  const HeroSection = () => {
    return (
      <section className="relative w-full py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
            Welcome to SkillSwap
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-muted-foreground">
            Your platform for skill exchange
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect globally, learn personally. Share your expertise and discover
            new skills through meaningful exchanges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto px-8 py-3">
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
