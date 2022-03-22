import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import BaseLayout from '../layouts/BaseLayout'
import store from '@store/index'

function MyApp({ Component, pageProps}: AppProps) {
  
  return (
    <Provider store={store}>
      {/* <BaseLayout> */}
      <Component {...pageProps} />
    {/* </BaseLayout> */}
    </Provider>
    
  )
}

export default MyApp
