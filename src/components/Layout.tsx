import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { ThemeProvider } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background relative">
          {/* Glass theme illuminating background */}
          <div className="glass:block hidden absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 pointer-events-none" />
          <div className="glass:block hidden absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent pointer-events-none" />
          
          <AppSidebar />
          
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <AppHeader />
            
            <main className="flex-1 overflow-auto p-6 space-y-6">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}