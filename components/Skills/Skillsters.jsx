import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, Users } from "lucide-react";

function Skillsters() {
  const skillsters = [
    {
      id: 1,
      name: "Alex Chen",
      title: "Full Stack Developer",
      rating: 4.9,
      reviews: 127,
      location: "San Francisco",
      studentsHelped: 342,
      skills: ["React", "Node.js", "TypeScript"],
      hourlyRate: "$75",
      category: "Technology",
    },
    {
      id: 2,
      name: "Maya Patel",
      title: "AI Research Scientist",
      rating: 5.0,
      reviews: 89,
      location: "London",
      studentsHelped: 156,
      skills: ["Machine Learning", "Python", "TensorFlow"],
      hourlyRate: "$120",
      category: "AI",
    },
    {
      id: 3,
      name: "Jordan Williams",
      title: "Vocal Coach",
      rating: 4.8,
      reviews: 203,
      location: "Nashville",
      studentsHelped: 487,
      skills: ["Vocal Technique", "Performance", "Music Theory"],
      hourlyRate: "$60",
      category: "Music",
    },
    {
      id: 4,
      name: "Marco Rodriguez",
      title: "Culinary Expert",
      rating: 4.7,
      reviews: 164,
      location: "Barcelona",
      studentsHelped: 298,
      skills: ["Mediterranean Cuisine", "Knife Skills", "Plating"],
      hourlyRate: "$85",
      category: "Culinary",
    },
    {
      id: 5,
      name: "Zara Ahmed",
      title: "UI/UX Designer",
      rating: 4.9,
      reviews: 156,
      location: "Dubai",
      studentsHelped: 234,
      skills: ["Figma", "User Research", "Prototyping"],
      hourlyRate: "$90",
      category: "Design",
    },
    {
      id: 6,
      name: "David Kim",
      title: "Fitness Coach",
      rating: 4.8,
      reviews: 298,
      location: "Seoul",
      studentsHelped: 512,
      skills: ["Strength Training", "Nutrition", "Wellness"],
      hourlyRate: "$55",
      category: "Fitness",
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Skillsters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced professionals ready to share their
            expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsters.map((skillster) => (
            <Card
              key={skillster.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <Avatar className="w-16 h-16 mx-auto mb-3">
                  <AvatarFallback className="text-lg font-semibold bg-muted">
                    {getInitials(skillster.name)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg mb-1">{skillster.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {skillster.title}
                </p>
                <Badge variant="secondary" className="mt-2">
                  {skillster.category}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Rating */}
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{skillster.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({skillster.reviews})
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {skillster.skills.slice(0, 3).map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 text-sm text-center">
                  <div className="flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{skillster.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{skillster.studentsHelped}</span>
                  </div>
                </div>

                <div className="text-center">
                  <span className="font-semibold text-lg">
                    {skillster.hourlyRate}/hr
                  </span>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" className="w-full">
                  Connect
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Skillsters</Button>
        </div>
      </div>
    </section>
  );
}

export default Skillsters;
