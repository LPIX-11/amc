import { DefaultSeo } from 'next-seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import SEO from '../next-seo.config'
function MyApp({ Component, pageProps }) {
  return <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
}

export default MyApp
