import { Calculator, FileText, Video, Beaker, Globe, BookOpen, Zap, Timer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const educationalTools = [
  {
    id: 1,
    title: "Scientific Calculator",
    description: "Advanced calculator with graphing capabilities for complex mathematical operations",
    icon: Calculator,
    category: "Mathematics",
    usage: "High",
    color: "text-primary"
  },
  {
    id: 2,
    title: "Essay Writer",
    description: "AI-powered writing assistant to help structure and improve your essays",
    icon: FileText,
    category: "Writing",
    usage: "Medium",
    color: "text-accent"
  },
  {
    id: 3,
    title: "Video Lectures",
    description: "Access recorded lectures and educational videos from top universities",
    icon: Video,
    category: "Learning",
    usage: "High",
    color: "text-warning"
  },
  {
    id: 4,
    title: "Virtual Lab",
    description: "Conduct chemistry and physics experiments in a safe virtual environment",
    icon: Beaker,
    category: "Science",
    usage: "Medium",
    color: "text-success"
  },
  {
    id: 5,
    title: "Language Translator",
    description: "Translate text and documents between multiple languages instantly",
    icon: Globe,
    category: "Languages",
    usage: "Medium",
    color: "text-primary"
  },
  {
    id: 6,
    title: "Research Assistant",
    description: "Find credible sources and citations for your research projects",
    icon: BookOpen,
    category: "Research",
    usage: "High",
    color: "text-accent"
  },
  {
    id: 7,
    title: "Quiz Generator",
    description: "Create interactive quizzes and practice tests for any subject",
    icon: Zap,
    category: "Assessment",
    usage: "Medium",
    color: "text-warning"
  },
  {
    id: 8,
    title: "Study Timer",
    description: "Pomodoro timer with focus sessions and break reminders",
    icon: Timer,
    category: "Productivity",
    usage: "High",
    color: "text-success"
  }
];

const categories = ["All", "Mathematics", "Writing", "Learning", "Science", "Languages", "Research", "Assessment", "Productivity"];

export default function Tools() {
  const getUsageBadge = (usage: string) => {
    switch (usage) {
      case "High":
        return "bg-success/10 text-success border-success/20";
      case "Medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "Low":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Educational Tools</h1>
          <p className="text-muted-foreground mt-1">Enhance your learning with powerful digital tools</p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {educationalTools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <Card key={tool.id} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg bg-gradient-primary/10 ${tool.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getUsageBadge(tool.usage)}`}
                  >
                    {tool.usage} Usage
                  </Badge>
                </div>
                
                <div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {tool.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-sm mb-4 leading-relaxed">
                  {tool.description}
                </CardDescription>
                
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  size="sm"
                >
                  Launch Tool
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Access */}
      <Card className="border-primary/20 bg-gradient-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Quick Access
          </CardTitle>
          <CardDescription>
            Your most frequently used tools for faster access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            {educationalTools.slice(0, 4).map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Button
                  key={tool.id}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  {tool.title}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}