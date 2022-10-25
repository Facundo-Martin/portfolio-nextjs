import React from 'react';
import { Post } from '../../d';

export default function RenderBlog({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <div>{post.node.title}</div>
      ))}
    </div>
  );
}
