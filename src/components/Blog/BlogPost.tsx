import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Post } from '../../d';

function ReadMore({ slug }: { slug: string }) {
  return (
    <div className="pt-2 w-fit">
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="flex items-center gap-x-2 text-teal-500 group">
            <h4>Read More</h4>
            <ArrowRightIcon className="w-4 group-hover:translate-x-1 transition-all duration-700" />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={post.node.createdAt}>{post.node.createdAt}</time>
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-3">
          <div>
            <h3 className="text-2xl font-bold leading-8 tracking-tight">
              <Link href={`/blog/${post.node.slug}`} className="text-gray-900 dark:text-gray-100">
                <h3> {post.node.title}</h3>
              </Link>
            </h3>
            <div className="flex flex-wrap">
              {post.node.categories.map((x) => (
                <div>{x.name}</div>
              ))}
            </div>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{post.node.excerpt}</div>
          <ReadMore slug={post.node.slug} />
        </div>
      </article>
    </div>
  );
}
