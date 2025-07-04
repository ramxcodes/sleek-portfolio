import Container from '@/components/common/Container'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function AIChatPage() {
  return (
    <Container className="py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          AI Chat
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Talk to me about anything.
        </p>
      </div>
      <Separator className="my-8" />
    </Container>
  )
}
