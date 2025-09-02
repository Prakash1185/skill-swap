import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, Globe } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: Users,
      title: "Skill Exchange",
      description: "Share and learn new skills with peers",
      content:
        "Connect with learners globally and exchange knowledge in a collaborative environment.",
      cta: "Start Learning",
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "Trust and transparency first",
      content:
        "All profiles are thoroughly verified to ensure safe and reliable connections.",
      cta: "Learn More",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Build connections across the globe",
      content:
        "Join a worldwide community of learners and expand your skillset through diverse perspectives.",
      cta: "Join Network",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose SkillSwap?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make learning and teaching skills
            seamless and effective
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground/80">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground/90 leading-relaxed mb-6 text-sm">
                    {feature.content}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    {feature.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
