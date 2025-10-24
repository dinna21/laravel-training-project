import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { type User } from '@/types';

interface AdminUserInfoProps {
    user: User;
}

export function AdminUserInfo({ user }: AdminUserInfoProps) {
    const getInitials = () => {
        return user.name
            ?.split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2) || 'AD';
    };

    return (
        <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 rounded-lg border-2 border-primary">
                <AvatarImage 
                    src={user.avatar ? `/storage/${user.avatar}` : undefined} 
                    alt={user.name} 
                />
                <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
                    {getInitials()}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <div className="flex items-center gap-1">
                    <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                </div>
            </div>
        </div>
    );
}