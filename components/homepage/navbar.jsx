"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">

        <Link href="/" className="text-2xl font-bold text-orange-400">
          Skill<span className="text-blue-600">Swap</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/skills">Explore Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/chats">Chats</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>View Profile</NavigationMenuLink>
                <NavigationMenuLink>Edit Profile</NavigationMenuLink>
                <NavigationMenuLink>Credits</NavigationMenuLink>
                <NavigationMenuLink>Settings</NavigationMenuLink>
                <NavigationMenuLink>Logout</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
