import { footerConfig } from '@/config/Footer';
import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-sm">
          {footerConfig.text} <b>{footerConfig.developer}</b> <br /> &copy;{' '}
          {new Date().getFullYear()}. {footerConfig.copyright}
        </p>
      </div>
    </Container>
  );
}
