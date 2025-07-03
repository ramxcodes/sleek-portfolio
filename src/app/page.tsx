import Container from "@/components/common/Container";
import Experience from "@/components/landing/Experience";
import Hero from "@/components/landing/Hero";
import React from "react";

export default function page() {
  return (
    <Container className="py-10 min-h-screen">
      <Hero />
      <Experience />
    </Container>
  );
}
