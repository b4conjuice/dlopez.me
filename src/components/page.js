import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DEFAULT_TITLE = 'hi my name is daniel'

const nav = [
  {
    url: '/',
    text: 'home',
  },
  {
    url: '/resume',
    text: 'resume',
  },
  {
    url: '/portfolio',
    text: 'portfolio',
  },
]

const Page = ({ title = DEFAULT_TITLE, children }) => {
  const { pathname } = useRouter()
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-cobalt dark:text-gray-100 text-cobalt">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta name="description" content="hi my name is daniel" />
        <meta name="theme-color" content="#193549" />
        <link rel="shortcut icon" href="/favicon.png" />
        {/* <link rel="apple-touch-icon" sizes="57x57" href="/logo-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/logo-72x72.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/logo-114x114.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/logo-144x144.png" /> */}
        <link rel="apple-touch-icon" sizes="57x57" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon.png" />
        <link
          href="splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        {/* <link
        href="splashscreens/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      /> */}
        <title>
          {title === DEFAULT_TITLE ? title : `${title} - ${DEFAULT_TITLE}`}
        </title>
      </Head>
      <header>
        <nav className="px-2 py-1 text-lg">
          <ul className="flex justify-center space-x-3">
            {nav.map(({ url, text }) => (
              <li
                key={url}
                className={
                  pathname === url || pathname.includes(`${url}/`)
                    ? 'border-b-2 border-cobalt dark:border-gray-100'
                    : 'hover:border-b-2 hover:border-cobalt dark:hover:border-gray-100'
                }
              >
                {pathname === url ? (
                  <span>{text}</span>
                ) : (
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}

export default Page
