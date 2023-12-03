import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { MantineProvider } from '@mantine/core'
import { SideBar } from './ui/SideBar'

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className='bg-#f7f7f7'>
        <MantineProvider>
          <SideBar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  )
}
