import { Label } from '@/components/ui/label';

interface FormFieldProps {
    label: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
    htmlFor?: string;
}

export default function FormField({ 
    label, 
    error, 
    required, 
    children,
    htmlFor 
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={htmlFor}>
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            {children}
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    );
}