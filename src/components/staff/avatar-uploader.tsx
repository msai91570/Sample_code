'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { UploadCloud } from 'lucide-react';

interface AvatarUploaderProps {
  src: string;
  alt: string;
}

export function AvatarUploader({ src, alt }: AvatarUploaderProps) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // In a real app, you would handle the file upload to a server/storage here.
    console.log('Uploading file...');
    setOpen(false);
    // Optionally, you can update the parent component state with the new image URL.
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="relative group">
          <Image
            src={src}
            alt={alt}
            width={80}
            height={80}
            className="rounded-full border-4 border-background shadow-md group-hover:opacity-80 transition-opacity"
            data-ai-hint="portrait person"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <UploadCloud className="text-white h-8 w-8" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Upload Profile Picture</DialogTitle>
          <DialogDescription>
            Select a new image to use as your avatar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          {preview && (
            <div className="flex justify-center">
              <Image
                src={preview}
                alt="New avatar preview"
                width={100}
                height={100}
                className="rounded-full border"
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={handleUpload} className="bg-accent hover:bg-accent/90 text-accent-foreground">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
