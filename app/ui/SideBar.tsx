import { Logo } from "./AppShell";

export function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-full w-60 bg-white">
      <div className="p-4 py-5 flex items-center justify-center">
        <Logo />
      </div>
    </div>
  )
}
