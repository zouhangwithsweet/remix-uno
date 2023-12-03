import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider>
          <div className="fixed top-0 left-0 h-full w-60 bg-blue-50"></div>
          <main className="pl-60">
            <Outlet />
          </main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  )
}
