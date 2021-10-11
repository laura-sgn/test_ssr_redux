import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { wrapper, store } from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
