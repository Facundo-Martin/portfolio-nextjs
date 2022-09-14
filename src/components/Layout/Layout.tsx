import React from "react";
import Header from "./Header";

type LayoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main className="global-style min-h-[80vh]">{props.children}</main>
      <div>Footer</div>
    </>
  );
};

export default Layout;
