import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getAllTags, getPublishedBlogPosts } from '@/lib/blog';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const generateMetadata = (): Metadata => {
  const metadata = getMetadata('/blog');
  return {
    ...metadata,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      } as Robots['googleBot']
    }
  };
};

export default function BlogPage() {
  const posts = getPublishedBlogPosts();
  const tags = getAllTags();

  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Blogs
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Thoughts, tutorials, and insights on engineering, and programming.
          </p>
        </div>

        <Separator />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Latest Posts
              {posts.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({posts.length} {posts.length === 1 ? 'post' : 'posts'})
                </span>
              )}
            </h2>
          </div>

          <BlogList posts={posts} />
        </div>
      </div>
    </Container>
  );
}
