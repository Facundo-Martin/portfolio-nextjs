import Link from 'next/link';
import React from 'react';
import { Post } from '../../d';

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={post.node.createdAt}>createdAt</time>
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-3">
          <div>
            <h3 className="text-2xl font-bold leading-8 tracking-tight">
              <Link href={`/blog/${post.node.slug}`} className="text-gray-900 dark:text-gray-100">
                {post.node.title}
              </Link>
            </h3>
            <div className="flex flex-wrap">
              {post.node.categories.map((x) => (
                <div>{x.name}</div>
              ))}
            </div>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{post.node.excerpt}</div>
        </div>
      </article>
    </div>
  );
}
