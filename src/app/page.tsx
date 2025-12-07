import { SideArea } from "@/components/interface/SideArea"
import { ToggleThemeMode } from "@/components/ToggleThemeMode"
import { ImcProvider } from "@/contexts/ImcContext"

const Page = () => {
  return (
    <div className="w-full min-h-full">
      <div className="fixed top-5 right-5"><ToggleThemeMode/></div>

      <ImcProvider>
        <main className="container mx-auto max-w-7xl my-15 px-6">
        <div className="flex gap-2 items-center">
          <h1 className="text-xl text-white font-bold bg-cyan-900 px-4 py-1">IMC</h1>

          <p className="text-muted-foreground text-sm">powered by <a href="https://github.com/wgutto" target="_blank" className="font-semibold hover:underline">Augusto Brito</a></p>
        </div>
        <SideArea/>
      </main>
      </ImcProvider>
    </div>
  )
}

export default Page