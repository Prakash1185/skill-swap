import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 w-full">
      <div className="mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of learners and experts sharing knowledge worldwide.
          Connect, learn, and grow your skills today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg">
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-3 text-lg"
          >
            Browse Skills
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CTA;
