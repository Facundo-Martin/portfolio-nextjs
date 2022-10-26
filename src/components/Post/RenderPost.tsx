import React from 'react';
import Post from './Post';
import Sidebar from './Sidebar';

export default function RenderPost() {
  return (
    <section className="section">
      <Sidebar />
      <Post />
    </section>
  );
}
