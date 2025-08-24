import { useState } from "react";
import { Heart, MessageCircle, Share2, Plus, Filter } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const feedPosts = [
  {
    id: 1,
    author: "Dr. Sarah Wilson",
    role: "Physics Professor",
    avatar: "/placeholder.svg",
    timestamp: "2 hours ago",
    content: "Great work on today's quantum mechanics lab! Remember to submit your observations by Friday. The interference patterns you observed demonstrate the wave nature of light beautifully.",
    likes: 24,
    comments: 8,
    shares: 3,
    type: "announcement"
  },
  {
    id: 2,
    author: "Alex Chen",
    role: "Student - Class of 2025",
    avatar: "/placeholder.svg",
    timestamp: "4 hours ago",
    content: "Just finished my chemistry project on sustainable energy! Really excited about the results. Has anyone else experimented with solar cell efficiency?",
    likes: 15,
    comments: 6,
    shares: 2,
    type: "discussion"
  },
  {
    id: 3,
    author: "Prof. Michael Davis",
    role: "Mathematics Department",
    avatar: "/placeholder.svg",
    timestamp: "1 day ago",
    content: "📚 New resource added to the library: 'Advanced Calculus Applications in Engineering'. Perfect for those working on differential equations assignments!",
    likes: 31,
    comments: 12,
    shares: 8,
    type: "resource"
  }
];

export default function Feeds() {
  const [filter, setFilter] = useState("all");

  const getTypeColor = (type: string) => {
    switch (type) {
      case "announcement":
        return "bg-primary/10 text-primary border-primary/20";
      case "discussion":
        return "bg-accent/10 text-accent border-accent/20";
      case "resource":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Feeds</h1>
          <p className="text-muted-foreground mt-1">Stay updated with announcements and discussions</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["all", "announcements", "discussions", "resources"].map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(filterType)}
            className="whitespace-nowrap"
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </Button>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="space-y-4">
        {feedPosts.map((post) => (
          <Card key={post.id} className="transition-all hover:shadow-soft border border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-card-foreground">{post.author}</h3>
                    <Badge variant="secondary" className="text-xs">{post.role}</Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getTypeColor(post.type)}`}
                    >
                      {post.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-card-foreground mb-4 leading-relaxed">{post.content}</p>
              
              <Separator className="my-4" />
              
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <Share2 className="h-4 w-4 mr-1" />
                    {post.shares}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}