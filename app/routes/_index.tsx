import type { MetaFunction } from '@remix-run/node'
import { CheckboxDemo } from '~/ui/AppShell'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="min-h-100vh p-6 bg-#f7f7f7 text-#101010">
      <div className="flex items-center">
        <div className="group mr-5 flex flex-col items-center justify-center p-2 rounded-full hover:bg-blue-400 transition-all">
          <span className="w-5 h-5 bg-zinc cursor-pointer group-hover:bg-white i-lucide:menu"></span>
        </div>
        <div className="text-zinc font-bold text-sm">Dashboards / E-Commerce</div>
      </div>
    </div>
  )
}
