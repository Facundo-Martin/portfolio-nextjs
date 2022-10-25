import React from 'react';
import { Post } from '../../d';
import BlogPost from './BlogPost';

export default function RenderBlog({ posts }: { posts: Post[] }) {
  return (
    <section className="section divide-y divide-gray-200 dark:divide-gray-700">
      <h1 className="mb-10 text-3xl font-medium">Blog Posts</h1>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post) => (
          <BlogPost key={post.node.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
