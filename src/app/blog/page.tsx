import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
import { Badge } from '@/components/ui/badge';
import { getAllTags, getPublishedBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts, tutorials, and insights on web development, technology, and programming.',
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
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Thoughts, tutorials, and insights on web development, technology,
            and programming.
          </p>
        </div>

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
