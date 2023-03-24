import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import store from '../store/store'
import { Provider } from 'react-redux';
import Layout from "../Layout/layout"
import toast, { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return   (
    <ThemeProvider attribute="class">
      <Toaster/>
    <Provider store={store}>
    <Layout>

    <Component {...pageProps} />

    </Layout>    

    </Provider>
  
    </ThemeProvider> 
  
 )
}

//? Project output path: /home/sayedex/Desktop/ALL FOLDER/Sayedweb/sayedexdevs/sanity
