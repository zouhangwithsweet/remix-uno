import type { MetaFunction } from '@remix-run/node'
import { CheckboxDemo } from '~/ui/AppShell'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="min-h-100vh px-4 pt-4 flex-center flex-col gap-5 bg-#f7f7f7 text-#101010">
      <div className="flex-center gap-2 -mt-40">
        <span className="w-10 h-10 i-logos:remix-icon"></span>
        <span className="text-7">💕</span>
        <CheckboxDemo />
        <span className="w-10 h-10 i-logos:unocss"></span>
      </div>
      <h1
        className="text-4xl font-bold bg-clip-text"
        style={
          {
            backgroundImage: 'linear-gradient(270deg, rgb(180, 234, 161) 0%, rgb(248, 208, 122) 100%)',
            display: 'inline-block',
            lineHeight: '1',
            WebkitTextFillColor: 'transparent',
          } as any
        }
      >
        Welcome to Remix + unocss
      </h1>
    </div>
  )
}
