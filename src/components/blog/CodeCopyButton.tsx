'use client';

import { useUmami } from '@/hooks/use-umami';
import React, { useState } from 'react';

import Copied from '../svgs/Copied';
import Copy from '../svgs/Copy';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface CodeCopyButtonProps {
  code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { trackEvent } = useUmami();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      trackEvent({
        name: 'button_click',
        data: { buttonId: 'copy_code', section: 'blog' },
      });
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <form
      action={copyToClipboard}
      className="absolute top-3 right-3 rounded-md opacity-0 transition-all duration-200 group-hover:opacity-100 hover:cursor-pointer"
      title={isCopied ? 'Copied!' : 'Copy code'}
    >
      {isCopied ? (
        <Tooltip>
          <TooltipTrigger className="cursor-pointer">
            <Copied className="h-4 w-4 text-green-500" />
          </TooltipTrigger>
          <TooltipContent>Copied to clipboard!</TooltipContent>
        </Tooltip>
      ) : (
        <Tooltip>
          <TooltipTrigger className="cursor-pointer">
            <Copy className="text-secondary h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>Copy to clipboard</TooltipContent>
        </Tooltip>
      )}
    </form>
  );
}
