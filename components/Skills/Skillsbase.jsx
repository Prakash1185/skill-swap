import React from 'react'
import { FeatureCards } from './FeatureCards'
import SkillTypeCards from "@/components/Skills/SkillTypeCards"

function Skillsbase() {
  return (
    <div className="text-center space-y-4 mx-2">
      <h2 className="text-3xl font-bold">Browse through your favourite skills</h2>
      <p className="text-gray-600">Discover and explore a variety of skills to enhance your knowledge and expertise</p>
      <FeatureCards />
      <SkillTypeCards />
    </div>
  )
}


export default Skillsbase