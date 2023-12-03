import { useAtom } from 'jotai'
import { Logo } from './AppShell'
import { sideBarShow } from '~/store'

export function SideBar() {
  const [show] = useAtom(sideBarShow)

  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 bg-white shadow-md shadow-gray-200 transition-all ${
        show ? '' : '-translate-x-full'
      }`}
    >
      <div className="p-4 py-8 flex items-center justify-center">
        <Logo />
      </div>
    </div>
  )
}
