import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Award,
  Users,
  ArrowUpDown,
  Edit,
  Settings,
  CheckCircle,
  XCircle,
} from "lucide-react";

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "Alex Chen",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    rating: 4.9,
    totalReviews: 47,
    completedExchanges: 23,
    responseTime: "< 2 hours",
    lastActive: "Online now",
    bio: "Full-stack developer with 6+ years of experience. Passionate about learning new skills and sharing knowledge. I love cooking, photography, and exploring new technologies.",
    skillsOffered: [
      { name: "React Development", level: "Expert", exchanges: 12 },
      { name: "Node.js", level: "Advanced", exchanges: 8 },
      { name: "Python", level: "Intermediate", exchanges: 3 },
    ],
    skillsWanted: [
      { name: "UI/UX Design", status: "Actively seeking" },
      { name: "Digital Marketing", status: "Interested" },
      { name: "Photography", status: "Casual interest" },
    ],
    availability: {
      weekdays: "6:00 PM - 10:00 PM",
      weekends: "9:00 AM - 8:00 PM",
      timezone: "PST (UTC-8)",
    },
  };

  const recentExchanges = [
    {
      id: 1,
      partner: "Maya Patel",
      skillGiven: "React Development",
      skillReceived: "Data Science",
      status: "Completed",
      date: "Dec 2024",
      rating: 5,
      review: "Alex was an amazing teacher! Very patient and knowledgeable.",
    },
    {
      id: 2,
      partner: "Jordan Williams",
      skillGiven: "Python Basics",
      skillReceived: "Guitar Lessons",
      status: "In Progress",
      date: "Nov 2024",
      rating: null,
      review: null,
    },
    {
      id: 3,
      partner: "Emma Thompson",
      skillGiven: "Web Development",
      skillReceived: "Content Writing",
      status: "Completed",
      date: "Oct 2024",
      rating: 4,
      review: "Great experience learning web development fundamentals.",
    },
  ];

  const reviews = [
    {
      id: 1,
      reviewer: "Maya Patel",
      rating: 5,
      date: "Dec 15, 2024",
      skill: "React Development",
      comment:
        "Alex is an exceptional teacher. His explanations are clear and he's very patient with questions. Highly recommended!",
    },
    {
      id: 2,
      reviewer: "Sarah Kim",
      rating: 5,
      date: "Nov 28, 2024",
      skill: "Node.js",
      comment:
        "Amazing knowledge of backend development. Made complex concepts easy to understand.",
    },
    {
      id: 3,
      reviewer: "David Rodriguez",
      rating: 4,
      date: "Nov 10, 2024",
      skill: "Python",
      comment:
        "Good teacher, helped me get started with Python. Would exchange again!",
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar and Basic Info */}
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarFallback className="text-2xl bg-primary/10">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {user.joinDate}</span>
                    </div>
                  </div>
                </div>

                {/* Stats and Actions */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">{user.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {user.totalReviews} reviews
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="font-bold">
                            {user.completedExchanges}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Exchanges
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-bold text-sm">
                            {user.responseTime}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Response time
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="font-bold text-sm">Online</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Status</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm">
                        <ArrowUpDown className="w-4 h-4 mr-2" />
                        Propose Exchange
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-4">
                    <p className="text-muted-foreground">{user.bio}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Profile Content Tabs */}
        <Tabs defaultValue="skills" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="exchanges">Exchanges</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Skills Offered */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Skills I Offer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {user.skillsOffered.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.level} level
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">
                          {skill.exchanges} exchanges
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Skills Wanted */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Skills I Want to Learn
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {user.skillsWanted.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Exchanges Tab */}
          <TabsContent value="exchanges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Skill Exchanges</CardTitle>
                <CardDescription>
                  History of skill exchanges and current activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentExchanges.map((exchange) => (
                    <div
                      key={exchange.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-muted">
                            {getInitials(exchange.partner)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{exchange.partner}</h4>
                          <div className="text-sm text-muted-foreground">
                            <span className="text-green-600">
                              Taught: {exchange.skillGiven}
                            </span>
                            <span className="mx-2">•</span>
                            <span className="text-blue-600">
                              Learned: {exchange.skillReceived}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            exchange.status === "Completed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {exchange.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {exchange.date}
                        </p>
                        {exchange.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{exchange.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Feedback</CardTitle>
                <CardDescription>
                  What others say about skill exchanges with {user.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b pb-4 last:border-b-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-muted text-sm">
                              {getInitials(review.reviewer)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{review.reviewer}</h4>
                            <p className="text-sm text-muted-foreground">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{review.rating}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-2">
                        {review.skill}
                      </Badge>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Availability Tab */}
          <TabsContent value="availability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Availability Schedule</CardTitle>
                <CardDescription>
                  When {user.name} is available for skill exchanges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-medium mb-2">Weekdays</h4>
                      <p className="text-muted-foreground">
                        {user.availability.weekdays}
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-medium mb-2">Weekends</h4>
                      <p className="text-muted-foreground">
                        {user.availability.weekends}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-2">Timezone</h4>
                    <p className="text-muted-foreground">
                      {user.availability.timezone}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Typically responds within {user.responseTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
