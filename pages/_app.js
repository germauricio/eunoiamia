import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import {CartProvider} from '../services/cartContext';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {


  return (
    <CartProvider>
      <Head>
        <title>Eunoia Mia</title>
      </Head>
      { pageProps ? (
        <>
          <Header />
          <MenuBar />
          <Component {...pageProps} />
          <Footer></Footer>
        </>
      ) : (
        <div className="container">
          <img src="/Rolling-1s-200px.gif" height="200px" className="loading" alt="loading"/>
        </div>
      )}
    </CartProvider>
  );
}

export default MyApp
