import '../styles/globals.css'
import '../styles/styles.scss'
import { useEffect } from 'react'
import { SessionProvider, getSession } from 'next-auth/react'
import App from 'next/app'
import Script from 'next/script'
function MyApp({ Component, pageProps,session }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []); 

  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // perhaps getSession(appContext.ctx) would also work
  const session = await getSession({ req: appContext.ctx.req })
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps, session }
}

export default MyApp