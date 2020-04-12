import App from "next/app";
import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./../styles/styles.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || MainLayout;

    return (
      <>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </>
    );
  }
}

export default MyApp;
