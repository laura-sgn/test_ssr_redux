import Head from 'next/head'
import { Global } from '@emotion/react'
import styles from '../styles/global'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={styles} />
      <Head />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout