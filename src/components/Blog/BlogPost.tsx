import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { stringify } from 'querystring';
import React from 'react';
import { Post } from '../../d';

function ReadMore({ slug }: { slug: string }) {
  return (
    <div className="pt-2 w-fit">
      <Link href={`/blog/${slug}`}>
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
  const date = new Date(post.node.createdAt);
  return (
    <div className="py-10">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={post.node.createdAt}>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
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
          <div className="prose max-w-lg text-gray-600 dark:text-gray-400">{post.node.excerpt}</div>
          <div>
            {post.node.authors.map((author) => (
              <div className="flex items-center gap-x-2">
                <Image src={author.avatar.url} width={30} height={30} alt={author.name} className="rounded-full" />
                <h4 className="text-sm text-gray-500 dark:text-slate-400">{author.name}</h4>
              </div>
            ))}
          </div>
          <ReadMore slug={post.node.slug} />
        </div>
      </article>
    </div>
  );
}
