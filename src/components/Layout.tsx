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
          {/* Glass theme illuminating background image */}
          <div className="glass:block hidden absolute inset-0 opacity-30 pointer-events-none" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }} />
          <div className="glass:block hidden absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none" />
          
          {/* Fixed Header */}
          <AppHeader />
          
          <AppSidebar />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Main content with top padding to account for fixed header */}
            <main className="flex-1 overflow-auto p-6 space-y-6 pt-22">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}