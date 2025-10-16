import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';
import { Shield, FileText, FilePlus, FileEdit, Eye } from 'lucide-react';
import { type NavItem } from '@/types';

const adminNavItems: NavItem[] = [
  {
    title: 'Admin Dashboard',
    href: '/admin/dashboard',
    icon: Shield,
  },
  {
    title: 'Manage',
    href: '/admin/manage',
    icon: FileText,
  },
  {
    title: 'Create',
    href: '/admin/create',
    icon: FilePlus,
  },
  {
    title: 'Edit',
    href: '/admin/edit',
    icon: FileEdit,
  },
  {
    title: 'View',
    href: '/admin/view',
    icon: Eye,
  },
];

export function AppSidebar() {
  const { auth } = usePage().props as any;
  const isAdmin = auth?.user?.role === 'admin' || auth?.user?.is_admin;

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarContent>
        {isAdmin && (
          <>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-muted-foreground">
                Admin
              </h2>
            </div>
            <NavMain items={adminNavItems} />
          </>
        )}
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
