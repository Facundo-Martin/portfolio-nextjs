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
      <main className="global-style">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
