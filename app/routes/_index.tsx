import type { MetaFunction } from '@remix-run/node'
import { useAtom } from 'jotai'
import { sideBarShow } from '~/store'
import { CheckboxDemo } from '~/ui/AppShell'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  const [show, setShow] = useAtom(sideBarShow)

  return (
    <div className={`min-h-100vh p-6 text-#101010 transition-all ${show ? 'ml-60' : 'ml-0'}`}>
      <div className="flex items-center">
        <div
          className="group mr-5 flex flex-col items-center justify-center p-2 rounded-full cursor-pointer hover:bg-blue-400 transition-all"
          onClick={() => setShow(!show)}
        >
          <span className="w-5 h-5 bg-zinc group-hover:bg-white i-lucide:menu"></span>
        </div>
        <div className="text-zinc font-bold text-sm">Dashboards / E-Commerce</div>
      </div>
    </div>
  )
}
