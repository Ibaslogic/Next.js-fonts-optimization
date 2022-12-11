import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="my-0 mx-3">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
