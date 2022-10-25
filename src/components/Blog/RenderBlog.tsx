import React from 'react';
import { Post } from '../../d';

export default function RenderBlog({ posts }: Post[]) {
  return (
    <div>
      {posts.map((post) => (
        <div>{post.slug}</div>
      ))}
    </div>
  );
}
