import { useState } from "react";
import { 
  Home, 
  Wrench, 
  User, 
  MessageCircle, 
  BookOpen, 
  Search,
  GraduationCap
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Feeds", url: "/", icon: Home },
  { title: "Tools", url: "/tools", icon: Wrench },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Library", url: "/library", icon: BookOpen },
  { title: "Search", url: "/search", icon: Search },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isExpanded = items.some((i) => isActive(i.url));

  return (
    <Sidebar className={`transition-all duration-300 ${state === 'collapsed' ? 'w-16' : 'w-64'}`}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-elegant">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          {state !== 'collapsed' && (
            <div>
              <h2 className="font-bold text-lg text-sidebar-foreground">EduHub</h2>
              <p className="text-xs text-sidebar-foreground/70">Learning Portal</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-medium">
            {state !== 'collapsed' ? 'Navigation' : ''}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-soft' 
                            : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {state !== 'collapsed' && (
                        <span className="truncate">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}