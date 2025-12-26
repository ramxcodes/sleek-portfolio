import Container from '@/components/common/Container';
import CheckCircle from '@/components/svgs/CheckCircle';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { settingsJson, steps } from '@/config/Setup';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
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
      'max-snippet': -1,
    },
  },
};

export default function SetupPage() {
  return (
    <Container className="py-8 md:py-16">
      <div className="space-y-6 md:space-y-8">
        {/* Header */}
        <div className="space-y-3 text-center md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Setup
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl px-4 text-base md:text-lg">
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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <div className="bg-muted flex w-fit items-center justify-center rounded-md border border-black/10 px-3 py-2 text-[#736F70] dark:border-white/10">
                  <span className="text-secondary text-sm font-medium">
                    Step {step.id}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
                    {step.icon}
                  </div>
                  <h2 className="text-xl font-semibold md:text-2xl">
                    {step.title}
                  </h2>
                </div>
              </div>

              {/* Step Content */}
              <div className="ml-4 space-y-3 sm:ml-8 md:ml-16 md:space-y-4">
                {step.content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {item.type === 'download' && (
                      <Link
                        href={item.href || '#'}
                        download
                        className="bg-muted/50 hover:bg-muted/70 flex w-full flex-col gap-3 rounded-lg border border-black/10 p-3 transition-colors sm:flex-row sm:items-center md:p-4 dark:border-white/10"
                      >
                        <Download className="text-muted-foreground size-4 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>
                            <ExternalLink className="text-muted-foreground size-3" />
                          </div>
                          <p className="text-muted-foreground mt-1 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    )}

                    {item.type === 'instruction' && (
                      <div className="flex items-center gap-3">
                        <p className="text-secondary text-sm">{item.text}</p>
                      </div>
                    )}

                    {item.type === 'shortcut' && (
                      <div className="bg-accent/50 flex w-full items-center gap-3 rounded-lg border border-black/10 p-3 dark:border-white/10">
                        <kbd className="bg-muted rounded border border-black/20 px-2 py-1 font-mono text-xs break-all dark:border-white/20">
                          {item.text}
                        </kbd>
                      </div>
                    )}

                    {item.type === 'prompt' && (
                      <div className="bg-muted/50 flex w-full items-center gap-3 rounded-lg border border-black/10 p-3 dark:border-white/10">
                        <FileText className="text-muted-foreground size-4 flex-shrink-0" />
                        <code className="text-secondary font-mono text-sm break-all">
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="bg-muted flex w-fit items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
                <FileText className="size-4" />
              </div>
              <h3 className="text-lg font-semibold md:text-xl">
                settings.json
              </h3>
            </div>

            <div className="ml-4 sm:ml-8 md:ml-12">
              <div className="bg-muted/30 overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                <div className="bg-muted flex items-center justify-between border-b border-black/10 px-3 py-2 md:px-4 dark:border-white/10">
                  <span className="text-sm font-medium">settings.json</span>
                  <button className="text-muted-foreground hover:text-primary text-xs transition-colors">
                    Copy
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <pre className="min-w-full p-3 text-xs md:p-4">
                    <code className="language-json text-secondary block font-mono leading-relaxed whitespace-pre">
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="bg-muted flex w-fit items-center justify-center rounded-md border border-black/10 px-3 py-2 text-[#736F70] dark:border-white/10">
                <span className="text-secondary text-sm font-medium">
                  Final
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
                  <CheckCircle className="text-secondary size-4" />
                </div>
                <h2 className="text-xl font-semibold md:text-2xl">
                  Complete Setup
                </h2>
              </div>
            </div>

            <div className="ml-4 space-y-3 sm:ml-8 md:ml-16 md:space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-secondary text-sm">
                  Paste the code in the settings.json file in VS Code
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <p className="text-secondary text-sm">
                  Save the settings.json file
                </p>
                <kbd className="bg-muted w-fit rounded border border-black/20 px-2 py-1 font-mono text-xs dark:border-white/20">
                  Cmd + S (Mac) / Ctrl + S (Windows)
                </kbd>
                <span className="text-secondary text-sm">
                  and restart VS Code
                </span>
              </div>

              <div className="bg-muted/50 mt-4 flex items-center gap-3 rounded-lg border border-black/10 p-3 md:mt-6 md:p-4 dark:border-white/10">
                <CheckCircle className="text-secondary size-5" />
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-medium">Done!</span>
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
