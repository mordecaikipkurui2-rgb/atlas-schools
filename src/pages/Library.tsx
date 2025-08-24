import { useState } from "react";
import { Book, Download, Eye, Star, Filter, Search, BookOpen, FileText, Video, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const libraryResources = [
  {
    id: 1,
    title: "Advanced Quantum Mechanics",
    author: "Dr. Jennifer Chen",
    type: "Book",
    category: "Physics",
    description: "Comprehensive guide to quantum mechanics principles and applications in modern physics.",
    thumbnail: "/placeholder.svg",
    rating: 4.8,
    downloads: 1234,
    size: "25 MB",
    pages: 432,
    icon: BookOpen,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Organic Chemistry Lab Manual",
    author: "Prof. Michael Rodriguez",
    type: "PDF",
    category: "Chemistry",
    description: "Step-by-step laboratory procedures and safety guidelines for organic chemistry experiments.",
    thumbnail: "/placeholder.svg",
    rating: 4.6,
    downloads: 892,
    size: "12 MB",
    pages: 156,
    icon: FileText,
    color: "text-accent"
  },
  {
    id: 3,
    title: "Calculus III Video Lectures",
    author: "Dr. Sarah Kim",
    type: "Video",
    category: "Mathematics",
    description: "Complete video lecture series covering multivariable calculus and vector analysis.",
    thumbnail: "/placeholder.svg",
    rating: 4.9,
    downloads: 2156,
    size: "2.1 GB",
    pages: "24 hours",
    icon: Video,
    color: "text-warning"
  },
  {
    id: 4,
    title: "Spanish Conversation Practice",
    author: "Prof. Isabella Martinez",
    type: "Audio",
    category: "Languages",
    description: "Audio exercises for improving Spanish pronunciation and conversational skills.",
    thumbnail: "/placeholder.svg",
    rating: 4.7,
    downloads: 543,
    size: "150 MB",
    pages: "8 hours",
    icon: Headphones,
    color: "text-success"
  },
  {
    id: 5,
    title: "Data Structures and Algorithms",
    author: "Dr. Alex Thompson",
    type: "Book",
    category: "Computer Science",
    description: "Essential guide to data structures, algorithms, and computational complexity analysis.",
    thumbnail: "/placeholder.svg",
    rating: 4.8,
    downloads: 1876,
    size: "18 MB",
    pages: 324,
    icon: BookOpen,
    color: "text-primary"
  },
  {
    id: 6,
    title: "World History Research Papers",
    author: "Prof. David Wilson",
    type: "PDF",
    category: "History",
    description: "Collection of peer-reviewed research papers on modern world history topics.",
    thumbnail: "/placeholder.svg",
    rating: 4.5,
    downloads: 678,
    size: "45 MB",
    pages: 289,
    icon: FileText,
    color: "text-accent"
  }
];

const recentlyViewed = [
  { title: "Advanced Quantum Mechanics", progress: 78 },
  { title: "Calculus III Video Lectures", progress: 34 },
  { title: "Organic Chemistry Lab Manual", progress: 92 }
];

const categories = ["All", "Physics", "Chemistry", "Mathematics", "Languages", "Computer Science", "History"];
const types = ["All Types", "Book", "PDF", "Video", "Audio"];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All Types");

  const getRatingColor = (rating: number) => {
    if (rating >= 4.8) return "text-success";
    if (rating >= 4.5) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Library</h1>
          <p className="text-muted-foreground mt-1">Access learning materials and resources</p>
        </div>
        
        <Button size="sm" className="bg-gradient-primary hover:opacity-90">
          <Download className="h-4 w-4 mr-2" />
          My Downloads
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-border/50">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search library resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          
          {/* Filter Pills */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "secondary" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
                className="whitespace-nowrap"
              >
                {type}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Resources Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {libraryResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-primary/10 ${resource.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">
                            {resource.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                          {resource.title}
                        </CardTitle>
                        
                        <p className="text-sm text-muted-foreground mt-1">
                          by {resource.author}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Star className={`h-3 w-3 ${getRatingColor(resource.rating)}`} />
                        <span className={getRatingColor(resource.rating)}>{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{resource.downloads} downloads</span>
                        <span>{resource.size}</span>
                        <span>{resource.pages} {resource.type === 'Book' || resource.type === 'PDF' ? 'pages' : ''}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Recently Viewed */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Recently Viewed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentlyViewed.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium truncate">{item.title}</span>
                    <span className="text-muted-foreground">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-1" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Book className="h-5 w-5 text-accent" />
                Your Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Books Read</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Downloads</span>
                <span className="font-semibold">34</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Favorites</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Reading Time</span>
                <span className="font-semibold">45h</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}