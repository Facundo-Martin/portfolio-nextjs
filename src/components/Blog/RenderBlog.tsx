import React from 'react';
import { Post } from '../../d';
import BlogPost from './BlogPost';
import SearchModal from './SearchModal';

export default function RenderBlog({ posts }: { posts: Post[] }) {
  return (
    <section className="section divide-y divide-gray-200 dark:divide-gray-700">
      <div>
        <h1 className="text-3xl font-medium">Blog Posts</h1>
        <p className="max-w-xl mt-2 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo optio veniam laborum perspiciatis deserunt dolorum sint reiciendis, omnis
          facilis.
        </p>
        <SearchModal className="w-72" />
      </div>
      <ul className="mt-8 divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post) => (
          <BlogPost key={post.node.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
