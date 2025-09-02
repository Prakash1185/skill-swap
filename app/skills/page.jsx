"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Search,
  Filter,
  MapPin,
  Clock,
  ArrowUpDown,
  MessageCircle,
} from "lucide-react";

const SkillsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedExchangeType, setSelectedExchangeType] = useState("all");

  const skillExchanges = [
    {
      id: 1,
      user: "Alex Chen",
      userRating: 4.9,
      userReviews: 23,
      skillOffered: "React Development",
      skillWanted: "UI/UX Design",
      category: "Technology",
      location: "San Francisco",
      exchangeType: "In-Person",
      description:
        "I'm a senior React developer with 5+ years experience. Looking to learn UI/UX design principles and Figma.",
      tags: ["React", "JavaScript", "Frontend"],
      availability: "Evenings & Weekends",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      user: "Maya Patel",
      userRating: 4.8,
      userReviews: 31,
      skillOffered: "Data Science & Python",
      skillWanted: "Digital Marketing",
      category: "Technology",
      location: "London",
      exchangeType: "Virtual",
      description:
        "Data scientist with ML expertise. Want to learn digital marketing strategies and social media management.",
      tags: ["Python", "Machine Learning", "Analytics"],
      availability: "Flexible",
      lastActive: "1 hour ago",
    },
    {
      id: 3,
      user: "Jordan Williams",
      userRating: 4.7,
      userReviews: 18,
      skillOffered: "Guitar & Music Theory",
      skillWanted: "Spanish Language",
      category: "Creative",
      location: "Nashville",
      exchangeType: "In-Person",
      description:
        "Professional guitarist and music teacher. Looking for Spanish conversation practice and language skills.",
      tags: ["Guitar", "Music Theory", "Teaching"],
      availability: "Weekday Afternoons",
      lastActive: "30 minutes ago",
    },
    {
      id: 4,
      user: "Marco Rodriguez",
      userRating: 4.9,
      userReviews: 42,
      skillOffered: "Italian Cooking",
      skillWanted: "Photography",
      category: "Lifestyle",
      location: "Barcelona",
      exchangeType: "Both",
      description:
        "Professional chef specializing in Italian cuisine. Want to learn food photography and camera techniques.",
      tags: ["Cooking", "Italian Cuisine", "Recipes"],
      availability: "Weekends",
      lastActive: "15 minutes ago",
    },
    {
      id: 5,
      user: "Zara Ahmed",
      userRating: 5.0,
      userReviews: 29,
      skillOffered: "Graphic Design",
      skillWanted: "Web Development",
      category: "Creative",
      location: "Dubai",
      exchangeType: "Virtual",
      description:
        "Experienced graphic designer proficient in Adobe Creative Suite. Looking to learn modern web development.",
      tags: ["Photoshop", "Illustrator", "Branding"],
      availability: "Mornings",
      lastActive: "5 minutes ago",
    },
    {
      id: 6,
      user: "David Kim",
      userRating: 4.6,
      userReviews: 35,
      skillOffered: "Personal Training",
      skillWanted: "Business Strategy",
      category: "Health",
      location: "Seoul",
      exchangeType: "In-Person",
      description:
        "Certified personal trainer and nutrition coach. Want to learn business development and entrepreneurship.",
      tags: ["Fitness", "Nutrition", "Wellness"],
      availability: "Early Mornings",
      lastActive: "1 day ago",
    },
    {
      id: 7,
      user: "Emma Thompson",
      userRating: 4.8,
      userReviews: 26,
      skillOffered: "Content Writing",
      skillWanted: "Video Editing",
      category: "Creative",
      location: "Toronto",
      exchangeType: "Virtual",
      description:
        "Professional copywriter and blogger. Looking to learn video editing and motion graphics for content creation.",
      tags: ["Writing", "Copywriting", "SEO"],
      availability: "Flexible",
      lastActive: "3 hours ago",
    },
    {
      id: 8,
      user: "Michael Brown",
      userRating: 4.5,
      userReviews: 21,
      skillOffered: "Financial Planning",
      skillWanted: "Public Speaking",
      category: "Business",
      location: "New York",
      exchangeType: "Both",
      description:
        "Financial advisor with 8+ years experience. Want to improve presentation skills and public speaking confidence.",
      tags: ["Finance", "Investment", "Planning"],
      availability: "Weekday Evenings",
      lastActive: "6 hours ago",
    },
  ];

  const categories = [
    "all",
    "Technology",
    "Creative",
    "Business",
    "Lifestyle",
    "Health",
  ];
  const locations = [
    "all",
    "San Francisco",
    "London",
    "Nashville",
    "Barcelona",
    "Dubai",
    "Seoul",
    "Toronto",
    "New York",
  ];
  const exchangeTypes = ["all", "Virtual", "In-Person", "Both"];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const filteredExchanges = skillExchanges.filter((exchange) => {
    const matchesSearch =
      exchange.skillOffered.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exchange.skillWanted.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exchange.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exchange.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || exchange.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "all" || exchange.location === selectedLocation;
    const matchesExchangeType =
      selectedExchangeType === "all" ||
      exchange.exchangeType === selectedExchangeType ||
      exchange.exchangeType === "Both";

    return (
      matchesSearch && matchesCategory && matchesLocation && matchesExchangeType
    );
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Skill Exchange
          </h1>
          <p className="text-muted-foreground">
            Find people to trade skills with - teach what you know, learn what
            you want
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search skills to offer or learn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedExchangeType}
              onValueChange={setSelectedExchangeType}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Exchange Type" />
              </SelectTrigger>
              <SelectContent>
                {exchangeTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLocation("all");
                setSelectedExchangeType("all");
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredExchanges.length} skill exchange
            {filteredExchanges.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExchanges.map((exchange) => (
            <Card
              key={exchange.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{exchange.category}</Badge>
                  <Badge variant="outline">{exchange.exchangeType}</Badge>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="text-sm bg-muted">
                      {getInitials(exchange.user)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{exchange.user}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{exchange.userRating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({exchange.userReviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Exchange */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-600">
                      Offers:
                    </span>
                    <span className="text-sm">{exchange.skillOffered}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-blue-600">
                      Wants:
                    </span>
                    <span className="text-sm">{exchange.skillWanted}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <CardDescription className="text-sm line-clamp-3">
                  {exchange.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {exchange.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>{exchange.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{exchange.availability}</span>
                  </div>
                  <div className="text-xs">
                    Last active: {exchange.lastActive}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button className="flex-1" size="sm">
                  Propose Exchange
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredExchanges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No skill exchanges found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLocation("all");
                setSelectedExchangeType("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
