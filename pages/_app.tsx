import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import store from '../store/store'
import { Provider } from 'react-redux';
import Layout from "../Layout/layout"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter();

  
  return   (
    <ThemeProvider attribute="class">
        <ToastContainer />
    <Provider store={store}>
    <Layout pathname={pathname}>

    <Component {...pageProps} />

    </Layout>    

    </Provider>
  
    </ThemeProvider> 
  
 )
}

