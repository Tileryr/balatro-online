import { PropsWithChildren } from "react"
import Card from "./Card"
import Background from "./Background"


function App() {
  return (
    <>
    <Background></Background>
    <div className="w-screen h-screen px-16 flex">
      <Sidebar/>
      <div className="w-full h-full px-8 py-16">
        <div className="w-full h-full gap-4 grid grid-rows-[250px_1fr_250px]">
          <div className="bg-black/20 w-full rounded-2xl">

          </div>
          <div>
            
          </div>
          <div className="bg-black/20 w-full rounded-2xl flex gap-6 items-center px-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function Panel({color, children}: PropsWithChildren<{
  color: string
}>) {
  const panelClass = `w-full text-white text-5xl text-center rounded-2xl p-2 mb-2`

  return (
    <div className={panelClass} style={{
      backgroundColor: color,
      boxShadow: `0px 5px color-mix(in srgb, ${color}, #000)`
    }}>
      {children}
    </div>
  )
}

function Sidebar() {
  return (
    <div className='bg-gray w-1/3 h-full border-x-6 border-[#0068ad] py-32 px-2 ring-4 ring-black/25'>
        <Panel color="#1b2629">
          <Panel color="#0068ad">
            <p>Small Blind</p>
          </Panel>

          <Panel color="#0e435f">
            <p>YEE HAW</p>
          </Panel>
        </Panel>

        <Panel color="#1b2629">
          <div className="flex">
            <p className="text-[2rem]">Round score</p>
            <Panel color="var(--color-gray)">
              <p>0</p>
            </Panel>
          </div>
        </Panel>

      </div>
  )
}
export default App
