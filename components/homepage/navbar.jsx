"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors flex-shrink-0"
        >
          Skill<span className="text-blue-600">Swap</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium leading-none">
                        Skills
                      </h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/skills"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Technology
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Programming, Web Dev, Mobile Apps
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/skills"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Creative
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Design, Art, Photography, Music
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium leading-none">More</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/skills"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Business
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Marketing, Finance, Management
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/skills"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Lifestyle
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Fitness, Cooking, Languages
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/how-it-works">How It Works</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/pricing">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className={"hidden"}>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col space-y-2 p-4 w-64">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/community/blog"
                        className="block px-2 py-2 rounded hover:bg-accent transition-colors"
                      >
                        Blog
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/community/success-stories"
                        className="block px-2 py-2 rounded hover:bg-accent transition-colors"
                      >
                        Success Stories
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/community/events"
                        className="block px-2 py-2 rounded hover:bg-accent transition-colors"
                      >
                        Events
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/support"
                        className="block px-2 py-2 rounded hover:bg-accent transition-colors"
                      >
                        Support
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {/* <ModeToggle /> */}
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/profile">Profile</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* <ModeToggle /> */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              {/* Skills Section */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Browse Skills
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/skills"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Technology
                  </Link>
                  <Link
                    href="/skills"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Creative
                  </Link>
                  <Link
                    href="/skills"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Business
                  </Link>
                  <Link
                    href="/skills"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Lifestyle
                  </Link>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="space-y-2 pt-2 border-t">
                <Link
                  href="/how-it-works"
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/pricing"
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </div>

              {/* Community Section */}
              <div className="space-y-2 pt-2 border-t hidden">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Community
                </h3>
                <Link
                  href="/community/blog"
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/community/success-stories"
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/community/events"
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/support"
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Support
                </Link>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/profile" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
