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


function Skillsters() {
    const technologySkillsters = [
        { Name: "John Doe", Description: "JavaScript Developer" },
        { Name: "Jane Smith", Description: "Python Developer" },
        { Name: "Alice Johnson", Description: "React Developer" }
    ]
    const aiSkillsters = [
        { Name: "Bob Brown", Description: "AI Researcher" },
        { Name: "Charlie Davis", Description: "Machine Learning Engineer" },
        { Name: "Dana Lee", Description: "Data Scientist" }
    ]
    const singingSkillsters =[
        { Name: "Ella Fitzgerald", Description: "Jazz Singer" },
        { Name: "Freddie Mercury", Description: "Rock Singer" },
        { Name: "Adele", Description: "Pop Singer" }
    ]
    const cookingSkillsters = [
        { Name: "Gordon Ramsay", Description: "Celebrity Chef" },
        { Name: "Julia Child", Description: "French Cuisine Expert" },
        { Name: "Jamie Oliver", Description: "Italian Cuisine Specialist" }
    ]
    const photographySkillsters = [
        { Name: "Ansel Adams", Description: "Landscape Photographer" },
        { Name: "Dorothea Lange", Description: "Documentary Photographer" },
        { Name: "Steve McCurry", Description: "Portrait Photographer" }
    ]
    const writingSkillsters = [
        { Name: "George Orwell", Description: "Novelist and Essayist" },
        { Name: "Virginia Woolf", Description: "Modernist Writer" },
        { Name: "Mark Twain", Description: "Humorist and Novelist" }
    ]
    const dancingSkillsters = [
        { Name: "Mikhail Baryshnikov", Description: "Ballet Dancer" },
        { Name: "Misty Copeland", Description: "Ballet Dancer" },
        { Name: "Fred Astaire", Description: "Tap Dancer" }
    ]
    const fitnessSkillsters = [
        { Name: "Adam Wilfred", Description: "Personal Trainer" },
        { Name: "Jonathan Green", Description: "Yoga Instructor" },
        { Name: "Alice Cooper", Description: "Nutritionist" }
    ]
    const meditationSkillsters = [
        { Name: "Thich Nhat Hanh", Description: "Zen Master" },
        { Name: "Jon Kabat-Zinn", Description: "Mindfulness Expert" },
        { Name: "Pema Chödrön", Description: "Buddhist Teacher" }
    ]

    const skillTypes = [
        { title: "Technology", description: "Top Skillsters in technology-related fields", members: technologySkillsters },
        { title: "AI", description: "Top Skillsters specializing in artificial intelligence", members: aiSkillsters },
        { title: "Singing", description: "Top Skillsters with singing talents", members: singingSkillsters },
        { title: "Cooking", description: "Top Skillsters who are culinary experts", members: cookingSkillsters },
        { title: "Photography", description: "Top Skillsters with photography skills", members: photographySkillsters },
        { title: "Writing", description: "Top Skillsters who are talented writers", members: writingSkillsters },
        { title: "Dancing", description: "Top Skillsters with dancing abilities", members: dancingSkillsters },
        { title: "Fitness", description: "Top Skillsters who are fitness enthusiasts", members: fitnessSkillsters },
        { title: "Meditation", description: "Top Skillsters who practice meditation", members: meditationSkillsters }
    ]

 return(
    
    <div>
        {skillTypes.map((skill) => (
        <div key={skill.description} >
            <h2>{skill.description}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
            {skill.members.map((member, idx) => (
                <Card key={idx} className="mt-1 shadow-md hover:shadow-lg transition rounded-2xl">
                <CardHeader>
                    <CardTitle>{member.Name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{member.Description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                    <CardAction>Connect</CardAction>
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Skillsters