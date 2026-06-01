import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { BlogPostPreview } from '@/types/blog';
import Image from 'next/image';

import { TrackedLink } from '../common/TrackedLink';
import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <TrackedLink
            href={`/blog/${slug}`}
            track={{
              name: 'button_click',
              data: {
                buttonId: 'blog_card_image',
                section: 'blog_card',
                action: slug,
              },
            }}
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </TrackedLink>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <TrackedLink
            href={`/blog/${slug}`}
            track={{
              name: 'button_click',
              data: {
                buttonId: 'blog_card_title',
                section: 'blog_card',
                action: slug,
              },
            }}
          >
            <h3 className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold">
              {title}
            </h3>
          </TrackedLink>
          <p className="text-secondary mt-4 line-clamp-3">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex w-full flex-col space-y-3">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between gap-2">
            <time
              className="text-secondary flex items-center gap-2 text-sm"
              dateTime={date}
            >
              <Calender className="size-4" /> {formattedDate}
            </time>
            <TrackedLink
              href={`/blog/${slug}`}
              className="text-secondary flex items-center justify-end gap-2 underline-offset-4 hover:underline"
              track={{
                name: 'button_click',
                data: {
                  buttonId: 'blog_card_read_more',
                  section: 'blog_card',
                  action: slug,
                },
              }}
            >
              Read More <ArrowRight className="size-4" />
            </TrackedLink>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
