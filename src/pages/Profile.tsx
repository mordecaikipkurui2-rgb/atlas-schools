import { useState } from "react";
import { MapPin, Calendar, Award, BookOpen, TrendingUp, Edit3, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const achievements = [
  { id: 1, title: "Top Student", description: "Achieved highest GPA this semester", icon: "🏆", date: "Dec 2024" },
  { id: 2, title: "Research Star", description: "Published paper in school journal", icon: "⭐", date: "Nov 2024" },
  { id: 3, title: "Perfect Attendance", description: "100% attendance this term", icon: "📅", date: "Oct 2024" },
  { id: 4, title: "Study Group Leader", description: "Led study group for 20+ students", icon: "👥", date: "Sep 2024" }
];

const currentCourses = [
  { name: "Advanced Physics", progress: 78, grade: "A-", instructor: "Dr. Wilson" },
  { name: "Organic Chemistry", progress: 82, grade: "A", instructor: "Prof. Chen" },
  { name: "Calculus III", progress: 75, grade: "B+", instructor: "Dr. Johnson" },
  { name: "Computer Science", progress: 90, grade: "A+", instructor: "Prof. Davis" }
];

const stats = [
  { label: "GPA", value: "3.8", icon: TrendingUp, color: "text-success" },
  { label: "Courses", value: "4", icon: BookOpen, color: "text-primary" },
  { label: "Credits", value: "16", icon: Award, color: "text-accent" }
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your academic profile and achievements</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button 
            variant={isEditing ? "default" : "outline"} 
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit3 className="h-4 w-4 mr-2" />
            {isEditing ? "Save" : "Edit"}
          </Button>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="border-border/50">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-card-foreground">Jordan Davis</h2>
                <p className="text-muted-foreground">Computer Science Major</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Class of 2025</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-3 gap-4">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={stat.label} className="text-center">
                    <CardContent className="pt-4">
                      <IconComponent className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="courses">Current Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="space-y-4">
          <div className="grid gap-4">
            {currentCourses.map((course, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>Instructor: {course.instructor}</CardDescription>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`
                        ${course.grade.startsWith('A') ? 'border-success text-success bg-success/10' : 
                          course.grade.startsWith('B') ? 'border-warning text-warning bg-warning/10' : 
                          'border-muted-foreground text-muted-foreground'}
                      `}
                    >
                      {course.grade}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <Badge variant="secondary" className="text-xs">{achievement.date}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest academic activities and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Submitted Chemistry Lab Report</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Joined Study Group for Physics</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-2 w-2 bg-warning rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Completed Calculus Assignment</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}