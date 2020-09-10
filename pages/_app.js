import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import {CartProvider} from '../services/cartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <MenuBar />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp
