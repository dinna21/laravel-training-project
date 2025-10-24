import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GripVertical, Trash2 } from 'lucide-react';

interface ContentBlock {
    id: string;
    type: 'heading' | 'paragraph' | 'quote';
    content: string;
    level?: 'H1' | 'H2' | 'H3' | 'H4';
}

interface ContentBlockItemProps {
    block: ContentBlock;
    onChange: (id: string, field: keyof ContentBlock, value: string) => void;
    onRemove: (id: string) => void;
}

export default function ContentBlockItem({ 
    block, 
    onChange, 
    onRemove 
}: ContentBlockItemProps) {
    return (
        <Card>
            <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                    <button 
                        type="button" 
                        className="mt-2 cursor-move text-muted-foreground hover:text-foreground"
                    >
                        <GripVertical className="h-5 w-5" />
                    </button>

                    <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">
                                {block.type.charAt(0).toUpperCase() + block.type.slice(1)} Text
                            </Label>
                            {block.type === 'heading' && (
                                <select
                                    value={block.level}
                                    onChange={(e) => onChange(block.id, 'level', e.target.value)}
                                    className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                                >
                                    <option value="H1">H1</option>
                                    <option value="H2">H2</option>
                                    <option value="H3">H3</option>
                                    <option value="H4">H4</option>
                                </select>
                            )}
                        </div>

                        <Input
                            value={block.content}
                            onChange={(e) => onChange(block.id, 'content', e.target.value)}
                            placeholder="Your heading here"
                        />

                        {/* Preview */}
                        <div className="rounded-md bg-muted/50 p-3 border border-border">
                            <p className="text-xs text-muted-foreground mb-2">Preview:</p>
                            {block.type === 'heading' && (
                                <div className={`font-bold ${
                                    block.level === 'H1' ? 'text-3xl' :
                                    block.level === 'H2' ? 'text-2xl' :
                                    block.level === 'H3' ? 'text-xl' : 'text-lg'
                                }`}>
                                    {block.content || 'Your heading here'}
                                </div>
                            )}
                            {block.type === 'paragraph' && (
                                <p>{block.content || 'Your paragraph here'}</p>
                            )}
                            {block.type === 'quote' && (
                                <blockquote className="border-l-4 pl-4 italic">
                                    {block.content || 'Your quote here'}
                                </blockquote>
                            )}
                        </div>
                    </div>

                    <button 
                        type="button" 
                        onClick={() => onRemove(block.id)} 
                        className="mt-2 text-red-500 hover:text-red-700"
                    >
                        <Trash2 className="h-5 w-5" />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}

export type { ContentBlock };