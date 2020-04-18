import App from "next/app";
import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SiteProvider from "./../provider/SiteProvider";
import "./../styles/styles.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || MainLayout;

    return (
      <SiteProvider>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </SiteProvider>
    );
  }
}

export default MyApp;
