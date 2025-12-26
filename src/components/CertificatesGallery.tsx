'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import React, { useState } from 'react';

export interface Certificate {
  file: string;
  title?: string;
  issuer?: string;
  date?: string;
}

interface CertificatesGalleryProps {
  certificates: Certificate[];
  className?: string;
}

export default function CertificatesGallery({
  certificates,
  className,
}: CertificatesGalleryProps) {
  const [active, setActive] = useState<string | null>(null);

  if (certificates.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">No certificates found</h2>
        <p className="text-muted-foreground">
          Check back later for certificates and achievements!
        </p>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ${className}`}
      >
        {certificates.map((cert) => (
          <Card
            key={cert.file}
            className="group h-full w-full overflow-hidden transition-all p-0 border-gray-100 dark:border-gray-800 shadow-none cursor-pointer"
            onClick={() => setActive(cert.file)}
          >
            <CardHeader className="p-0">
              <div className="group relative aspect-video overflow-hidden bg-muted/20">
                <Image
                  src={cert.file}
                  alt={cert.title || 'certificate'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>

            <CardContent className="px-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold leading-tight group-hover:text-primary">
                  {cert.title || 'Certificate'}
                </h3>
                {cert.issuer && (
                  <p className="text-sm text-secondary">{cert.issuer}</p>
                )}
              </div>
            </CardContent>

            {cert.date && (
              <CardFooter className="p-6 pt-0">
                <time className="text-sm text-secondary" dateTime={cert.date}>
                  {formatDate(cert.date)}
                </time>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {/* Fullscreen viewer */}
      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full p-0 border-0 bg-background/95 backdrop-blur-sm">
          {active && (
            <>
              <DialogTitle className="sr-only">
                {certificates.find((c) => c.file === active)?.title ||
                  'Certificate'}
              </DialogTitle>
              <div className="h-60 md:h-92 flex items-center justify-center p-4">
                <div className="relative w-full h-full rounded-lg">
                  <Image
                    src={active}
                    alt={
                      certificates.find((c) => c.file === active)?.title ||
                      'certificate'
                    }
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
              {certificates.find((c) => c.file === active) && (
                <div className="px-6 pb-6 pt-2 border-t">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">
                      {certificates.find((c) => c.file === active)?.title ||
                        'Certificate'}
                    </h3>
                    {certificates.find((c) => c.file === active)?.issuer && (
                      <p className="text-sm text-muted-foreground">
                        {certificates.find((c) => c.file === active)?.issuer}
                      </p>
                    )}
                    {certificates.find((c) => c.file === active)?.date && (
                      <time
                        className="text-xs text-muted-foreground"
                        dateTime={
                          certificates.find((c) => c.file === active)?.date
                        }
                      >
                        {formatDate(
                          certificates.find((c) => c.file === active)?.date,
                        )}
                      </time>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
