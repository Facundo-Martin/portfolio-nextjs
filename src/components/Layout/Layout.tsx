import React from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto bg-white dark:bg-zinc-800 shadow-sm">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
