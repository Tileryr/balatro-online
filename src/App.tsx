import { PropsWithChildren } from "react"

function App() {
  return (
    <div className="w-screen h-screen pl-16 bg-[#346c54]">
      <div className='bg-gray w-1/4 h-full border-x-6 border-[#0068ad] py-32 px-2'>
        <Panel color="#0e435f">
          <p>OK BRO</p>
        </Panel>
        
        <Panel color="#0068ad">
          <p>OK BRO</p>
        </Panel>

        <Panel color="#0093ff">
          <p className="text-shadow-md/50">Small Blind</p>
        </Panel>

      </div>
    </div>
  )
}

function Panel({color, children}: PropsWithChildren<{
  color: string
}>) {
  const panelClass = `w-full bg-[${color}] text-white text-5xl text-center rounded-2xl pt-2 my-2 shadow-[0px_5px_color-mix(in_srgb,_${color},_#000)]`

  return (
    <div 
    className={panelClass}>
      
      {children}
    </div>
  )
}

export default App
