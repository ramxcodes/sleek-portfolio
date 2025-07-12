import Container from '@/components/common/Container';
import CheckCircle from '@/components/svgs/CheckCircle';
import { Separator } from '@/components/ui/separator';
import { settingsJson, steps } from '@/config/Setup';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Download, ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/setup'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function SetupPage() {
  return (
    <Container className="py-8 md:py-16">
      <div className="space-y-6 md:space-y-8">
        {/* Header */}
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Setup
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground px-4">
            Complete guide to setting up VS Code with my preferred
            configuration, extensions, and fonts.
          </p>
        </div>
        <Separator />

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="space-y-4 md:space-y-6">
              {/* Step Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="px-3 py-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10 w-fit">
                  <span className="text-sm font-medium text-secondary">
                    Step {step.id}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
                    {step.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {step.title}
                  </h2>
                </div>
              </div>

              {/* Step Content */}
              <div className="ml-4 sm:ml-8 md:ml-16 space-y-3 md:space-y-4">
                {step.content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {item.type === 'download' && (
                      <Link
                        href={item.href || '#'}
                        download
                        className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 md:p-4 bg-muted/50 rounded-lg border border-black/10 dark:border-white/10 w-full hover:bg-muted/70 transition-colors"
                      >
                        <Download className="size-4 text-muted-foreground flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span className="font-medium text-sm">
                              {item.name}
                            </span>
                            <ExternalLink className="size-3 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    )}

                    {item.type === 'instruction' && (
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-secondary">{item.text}</p>
                      </div>
                    )}

                    {item.type === 'shortcut' && (
                      <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg border border-black/10 dark:border-white/10 w-full">
                        <kbd className="px-2 py-1 text-xs font-mono bg-muted border border-black/20 dark:border-white/20 rounded break-all">
                          {item.text}
                        </kbd>
                      </div>
                    )}

                    {item.type === 'prompt' && (
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-black/10 dark:border-white/10 w-full">
                        <FileText className="size-4 text-muted-foreground flex-shrink-0" />
                        <code className="text-sm font-mono text-secondary break-all">
                          {item.text}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Settings JSON Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10 w-fit">
                <FileText className="size-4" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">
                settings.json
              </h3>
            </div>

            <div className="ml-4 sm:ml-8 md:ml-12">
              <div className="bg-muted/30 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
                <div className="px-3 md:px-4 py-2 bg-muted border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium">settings.json</span>
                  <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Copy
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <pre className="p-3 md:p-4 text-xs min-w-full">
                    <code className="language-json text-secondary font-mono leading-relaxed whitespace-pre block">
                      {settingsJson.split('\n').map((line, index) => {
                        const trimmedLine = line.trim();
                        if (trimmedLine.startsWith('//')) {
                          return (
                            <div
                              key={index}
                              className="text-muted-foreground/60 italic"
                            >
                              {line}
                            </div>
                          );
                        } else if (
                          trimmedLine.includes(':') &&
                          trimmedLine.includes('"')
                        ) {
                          const [key, ...valueParts] = line.split(':');
                          const value = valueParts.join(':');
                          return (
                            <div key={index}>
                              <span className="text-secondary font-medium">
                                {key}
                              </span>
                              <span className="text-muted-foreground">:</span>
                              <span className="text-muted-foreground">
                                {value}
                              </span>
                            </div>
                          );
                        } else {
                          return (
                            <div key={index} className="text-muted-foreground">
                              {line}
                            </div>
                          );
                        }
                      })}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Final Steps */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="px-3 py-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10 w-fit">
                <span className="text-sm font-medium text-secondary">
                  Final
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
                  <CheckCircle className="size-4 text-secondary" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Complete Setup
                </h2>
              </div>
            </div>

            <div className="ml-4 sm:ml-8 md:ml-16 space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-sm text-secondary">
                  Paste the code in the settings.json file in VS Code
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <p className="text-sm text-secondary">
                  Save the settings.json file
                </p>
                <kbd className="px-2 py-1 text-xs font-mono bg-muted border border-black/20 dark:border-white/20 rounded w-fit">
                  Cmd + S (Mac) / Ctrl + S (Windows)
                </kbd>
                <span className="text-sm text-secondary">
                  and restart VS Code
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 md:p-4 bg-muted/50 rounded-lg border border-black/10 dark:border-white/10 mt-4 md:mt-6">
                <CheckCircle className="size-5 text-secondary" />
                <div className="flex items-center gap-2">
                  <span className="font-medium text-secondary">Done!</span>
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
