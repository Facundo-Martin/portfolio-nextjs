import React from 'react';
import { Post as PostType } from '../../d';
import Post from './Post';
import Sidebar from './Sidebar';

export default function RenderPost({ post }: { post: PostType }) {
  return (
    <section className="section">
      <Sidebar />
      <Post />
    </section>
  );
}
