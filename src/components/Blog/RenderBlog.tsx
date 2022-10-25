import React from 'react';
import { Post } from '../../d';
import BlogPost from './BlogPost';

export default function RenderBlog({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <BlogPost post={post} />
      ))}
    </div>
  );
}
