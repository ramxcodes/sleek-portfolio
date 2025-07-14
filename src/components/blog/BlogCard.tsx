import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { BlogPostPreview } from '@/types/blog';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

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
    <Card className="group h-full w-full overflow-hidden transition-all p-0 border-gray-100 dark:border-gray-800 shadow-none">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Link href={`/blog/${slug}`}>
            <Image src={image} alt={title} fill className="object-cover" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Link href={`/blog/${slug}`}>
            <h3 className="line-clamp-2 text-xl font-semibold leading-tight group-hover:text-primary">
              {title}
            </h3>
          </Link>
          <p className="line-clamp-3 text-secondary mt-4">{description}</p>
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
          <div className="flex items-center gap-2 justify-between mt-4">
            <time
              className="text-sm text-secondary flex items-center gap-2"
              dateTime={date}
            >
              <Calender className="size-4" /> {formattedDate}
            </time>
            <Link
              href={`/blog/${slug}`}
              className="flex items-center justify-end gap-2 hover:underline underline-offset-4 text-secondary"
            >
              Read More <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
