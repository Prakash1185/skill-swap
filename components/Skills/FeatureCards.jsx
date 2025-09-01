import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 m-2">
      <Card>
        <CardHeader>
          <CardTitle>Skill Exchange</CardTitle>
          <CardDescription>Share and learn new skills with peers.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Connect with learners globally and exchange knowledge.</p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Get Started</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verified Profiles</CardTitle>
          <CardDescription>Trust and transparency first.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Profiles are verified so you can connect confidently.</p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Learn More</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Global Network</CardTitle>
          <CardDescription>Build connections across the globe.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Collaborate with people worldwide and grow your skillset.</p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Join Now</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
