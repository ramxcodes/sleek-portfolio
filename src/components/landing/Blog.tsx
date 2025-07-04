import { getPublishedBlogPosts } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

import { BlogCard } from '../blog/BlogCard';
import Container from '../common/Container';
import { Button } from '../ui/button';

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-20">
      <p>Featured</p>
      <h2 className="text-secondary text-2xl font-light">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {posts.slice(0, 2).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>
    </Container>
  );
}
