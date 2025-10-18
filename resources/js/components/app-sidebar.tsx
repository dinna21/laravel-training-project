import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';
import { Shield, FileText, FilePlus, Home, Users, Settings } from 'lucide-react';
import { type NavItem } from '@/types';

const adminNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: Shield,
  },
  {
    title: 'Blogs',
    href: '/admin/blogs',
    icon: FileText,
  },
  {
    title: 'Create Blog',
    href: '/admin/blogs/create',
    icon: FilePlus,
  },
];

const userNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: Users,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const { auth } = usePage().props as any;
  const isAdmin = auth?.user?.role === 'admin' || auth?.user?.is_admin;

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarContent>
        {isAdmin ? (
          <>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-muted-foreground">
                Admin
              </h2>
            </div>
            <NavMain items={adminNavItems} />
          </>
        ) : (
          <>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-muted-foreground">
                Navigation
              </h2>
            </div>
            <NavMain items={userNavItems} />
          </>
        )}
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}