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
      <Header />
      <MenuBar />
      <Component {...pageProps} />
      <Footer></Footer>
    </CartProvider>
  );
}

export default MyApp
