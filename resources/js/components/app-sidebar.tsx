import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { AdminNavUser } from '@/components/admin-nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { usePage, Link } from '@inertiajs/react';
import { 
  LayoutDashboard, 
  FilePlus, 
  Home, 
  User, 
  Settings, 
  List, 
  BookOpen,
  Newspaper,
  FileEdit,
  FolderOpen,
  PenSquare,
  Eye,
  Trash2,
  Mail,
  Bell,
  Users
} from 'lucide-react';
import { type NavItem } from '@/types';

const adminNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'All Blogs',
    href: '/admin/blogs',
    icon: FolderOpen,
  },
  {
    title: 'Create Blog',
    href: '/admin/blogs/create',
    icon: FilePlus,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: 'Messages',
    href: '/admin/messages',
    icon: Mail,
  },
  {
    title: 'Notifications',
    href: '/admin/notifications',
    icon: Bell,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const { auth, url } = usePage().props as any;
  const isAdmin = auth?.user?.role === 'admin' || auth?.user?.is_admin;
  const currentUrl = url || '';

  // Only show sidebar if user is admin
  if (!isAdmin) {
    return null;
  }

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="border-r border-sidebar-border">
      <SidebarContent className="gap-0">
        <SidebarGroup className="py-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {adminNavItems.map((item, index) => {
                const href = typeof item.href === 'string' ? item.href : item.href.url;
                const isActive = currentUrl === href || currentUrl.startsWith(href + '/');
                const IconComponent = item.icon;
                
                return (
                  <SidebarMenuItem key={`nav-item-${index}`}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      isActive={isActive}
                    >
                      <Link href={href}>
                        {IconComponent && <IconComponent className="h-5 w-5" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <AdminNavUser />
      </SidebarFooter>
    </Sidebar>
  );
}