import Meta from "./Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="bg-bodyBg min-h-screen overflow-x-hidden">
        <main>{children}</main>
      </div>
      <Footer />
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 3px;
          }

          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }

          ::-webkit-scrollbar-thumb {
            background-color: #58468c;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
