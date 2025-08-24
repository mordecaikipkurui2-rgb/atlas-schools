import { useState } from "react";
import { Search, Filter, Clock, TrendingUp, Users, BookOpen, MessageCircle, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const searchResults = {
  people: [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      role: "Physics Professor",
      department: "Science Department",
      avatar: "/placeholder.svg",
      expertise: ["Quantum Mechanics", "Particle Physics"],
      courses: 3
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Student",
      department: "Computer Science",
      avatar: "/placeholder.svg",
      expertise: ["Machine Learning", "Web Development"],
      courses: 5
    }
  ],
  content: [
    {
      id: 1,
      title: "Quantum Mechanics Assignment Guidelines",
      type: "Document",
      category: "Physics",
      author: "Dr. Sarah Wilson",
      snippet: "This assignment covers the fundamental principles of quantum mechanics including wave-particle duality...",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      title: "Study Group: Advanced Calculus",
      type: "Discussion",
      category: "Mathematics", 
      author: "Study Group",
      snippet: "Join our weekly study sessions every Tuesday at 3 PM. We cover integration techniques and series...",
      timestamp: "5 hours ago"
    }
  ],
  courses: [
    {
      id: 1,
      title: "Advanced Physics",
      instructor: "Dr. Sarah Wilson",
      students: 24,
      progress: 78,
      description: "Comprehensive course covering advanced topics in classical and modern physics"
    },
    {
      id: 2,
      title: "Organic Chemistry",
      instructor: "Prof. Chen",
      students: 32,
      progress: 82,
      description: "Study of carbon-based compounds and their reactions in biological systems"
    }
  ],
  tools: [
    {
      id: 1,
      title: "Scientific Calculator",
      category: "Mathematics",
      description: "Advanced calculator with graphing capabilities",
      usage: "High"
    },
    {
      id: 2,
      title: "Virtual Lab",
      category: "Science",
      description: "Conduct chemistry experiments in virtual environment",
      usage: "Medium"
    }
  ]
};

const recentSearches = [
  "quantum mechanics",
  "calculus derivatives",
  "chemistry lab safety",
  "study groups",
  "Dr. Wilson"
];

const trendingTopics = [
  { term: "Machine Learning", count: 45 },
  { term: "Quantum Physics", count: 32 },
  { term: "Organic Chemistry", count: 28 },
  { term: "Data Structures", count: 24 }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "people":
        return Users;
      case "content":
        return BookOpen;
      case "courses":
        return BookOpen;
      case "tools":
        return Wrench;
      default:
        return Search;
    }
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Search</h1>
          <p className="text-muted-foreground mt-1">Find people, content, courses, and tools</p>
        </div>
      </div>

      {/* Search Bar */}
      <Card className="border-border/50">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-12 h-12 text-lg"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="h-12 px-8 bg-gradient-primary hover:opacity-90"
            >
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Search Results */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="people">People</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {/* People Results */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  People
                </h3>
                {searchResults.people.map((person) => (
                  <Card key={person.id} className="border-border/50 hover:shadow-soft transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={person.avatar} alt={person.name} />
                          <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-card-foreground">{person.name}</h4>
                          <p className="text-sm text-muted-foreground">{person.role} • {person.department}</p>
                          <div className="flex gap-1 mt-2">
                            {person.expertise.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Content Results */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Content
                </h3>
                {searchResults.content.map((content) => (
                  <Card key={content.id} className="border-border/50 hover:shadow-soft transition-shadow">
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-card-foreground hover:text-primary cursor-pointer">
                            {content.title}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {content.type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {content.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{content.snippet}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>by {content.author}</span>
                          <span>{content.timestamp}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="people" className="space-y-4">
              {searchResults.people.map((person) => (
                <Card key={person.id} className="border-border/50 hover:shadow-soft transition-shadow">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={person.avatar} alt={person.name} />
                        <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground">{person.name}</h4>
                        <p className="text-sm text-muted-foreground">{person.role} • {person.department}</p>
                        <p className="text-sm text-muted-foreground">{person.courses} courses</p>
                        <div className="flex gap-1 mt-2">
                          {person.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
              {searchResults.content.map((content) => (
                <Card key={content.id} className="border-border/50 hover:shadow-soft transition-shadow">
                  <CardContent className="pt-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-card-foreground hover:text-primary cursor-pointer">
                          {content.title}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {content.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {content.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{content.snippet}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>by {content.author}</span>
                        <span>{content.timestamp}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="courses" className="space-y-4">
              {searchResults.courses.map((course) => (
                <Card key={course.id} className="border-border/50 hover:shadow-soft transition-shadow">
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-card-foreground">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                        <p className="text-sm text-muted-foreground">{course.students} students enrolled</p>
                      </div>
                      <p className="text-sm">{course.description}</p>
                      <Button variant="outline" size="sm">
                        View Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              {searchResults.tools.map((tool) => (
                <Card key={tool.id} className="border-border/50 hover:shadow-soft transition-shadow">
                  <CardContent className="pt-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-card-foreground">{tool.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {tool.usage} Usage
                        </Badge>
                        <Button variant="outline" size="sm">
                          Launch Tool
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Recent Searches */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Searches
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={() => setSearchQuery(search)}
                >
                  <Search className="h-3 w-3 mr-2" />
                  {search}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto font-normal justify-start"
                    onClick={() => setSearchQuery(topic.term)}
                  >
                    {topic.term}
                  </Button>
                  <Badge variant="secondary" className="text-xs">
                    {topic.count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}