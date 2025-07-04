import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-secondary text-center">
          Design & Developed by <b>Ramxcodes</b> <br /> &copy;{' '}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Container>
  );
}
