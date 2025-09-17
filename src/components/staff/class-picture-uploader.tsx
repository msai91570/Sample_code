'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface ClassPictureUploaderProps {
    className: string;
}

export function ClassPictureUploader({ className }: ClassPictureUploaderProps) {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleUpload = () => {
        if (file) {
            // In a real app, you would handle the file upload to a server/storage here.
            console.log(`Uploading picture for ${className}:`, file.name);
            // After successful upload, you might want to clear the preview
            setPreview(null);
            setFile(null);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-headline">Class Picture</CardTitle>
                <CardDescription>Upload a photo for the class.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <div className="w-48 h-32 rounded-lg bg-muted flex items-center justify-center relative overflow-hidden">
                    {preview ? (
                        <Image src={preview} alt="Class picture preview" layout="fill" objectFit="cover" />
                    ) : (
                        <Camera className="h-12 w-12 text-muted-foreground" />
                    )}
                </div>

                <Input id="picture-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                 <label htmlFor="picture-upload" className="w-full">
                    <Button asChild className="w-full">
                       <span>Select Picture</span>
                    </Button>
                </label>


                {preview && (
                     <Button onClick={handleUpload} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}
