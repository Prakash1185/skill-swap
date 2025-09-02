import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function SkillTypeCards() {
  const skillTypes = [
    { title: "Technology", description: "Dive into the world of newest technologies" },
    { title: "AI", description: "Learn about artificial intelligence and its applications" },
    { title: "Singing", description: "Enhance your vocal skills and techniques" },
    { title: "Cooking", description: "Master the art of culinary skills" },
    { title: "Photography", description: "Capture stunning images and moments" },
    { title: "Writing", description: "Express your thoughts and ideas through words" },
    { title: "Dancing", description: "Learn various dance styles and techniques" },
    { title: "Fitness", description: "Improve your physical health and wellness" },
    { title: "Meditation", description: "Practice mindfulness and mental well-being" }
  ];

  return (
    <div>
        <h2 className="text-3xl font-bold text-center mb-4">Explore Skills, Upgrade Yourself</h2>
        <h3 className='text-2xl font-semibold text-left mb-2'>Which field do you want to explore today?</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {skillTypes.map((skill) => (
            <Card key={skill.title} className="mt-1">
              <img src={`/images/${skill.title.toLowerCase()}.jpeg`} alt={skill.title} className="w-full h-48 object-cover rounded-lg p-1" />
              <CardHeader>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{skill.description}</CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <CardAction>Explore</CardAction>
              </CardFooter>
            </Card>
          ))}
        </div>
    </div>
  )
}

export default SkillTypeCards