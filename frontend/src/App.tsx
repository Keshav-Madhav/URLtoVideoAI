import { useState } from "react"

function App() {
  const [url, setUrl] = useState('')

  return (
    <>
      <main className="max-w-4xl w-full max-h-[50rem] h-full m-auto flex flex-wrap justify-center items-center gap-16 p-4">
        <div className="py-8 flex flex-col justify-center h-fit flex-1 min-w-[22rem]">
          <h1 className="text-4xl font-bold uppercase mb-8">
            <span className="text-5xl">
              URL to Video
            </span>
            <br />
            <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">
              with power of AI
            </span>
          </h1>
          <form className="grid gap-4">
            <input
              className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow hover:scale-105 hover:bg-white/5 transition-all"
              value={url}
              onChange={ev => setUrl(ev.target.value)}
              type="url" placeholder="https://..."/>
            <button
              className="bg-emerald-500 text-white px-4 py-2 rounded-full uppercase hover:scale-105 hover:bg-emerald-600 transition-all"
              type="submit">
              Create&nbsp;video
            </button>
          </form>
        </div>
        <div className="flex-1 min-w-[17rem] py-4 h-fit flex items-center justify-center">
          <div className="text-gray-500 w-[240px] h-[380px] relative">
            <video
              playsInline={true}
              muted={true}
              controls={false}
              loop={true}
              autoPlay={true}
              className="shadow-4xl shadow-sky-400 rounded-2xl overflow-hidden absolute top-2 transition-all duration-300"
              style={{
                transform: 'scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg)'
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
