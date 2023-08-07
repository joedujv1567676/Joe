import Link from "next/link"
import './css.css'

export default function Home() {
  return (
    <main>
      <picture>
      <img 
      className="w-full flex"
      src="https://i.pinimg.com/originals/8a/63/3d/8a633dbb14009411650a5a914d73c950.gif"
      />
      <img 
      className="w-full flex"
      src="https://i.pinimg.com/originals/1e/b5/4e/1eb54ebc7da10c609cb0ba9268facef9.gif"
      />
      </picture>
      <div className=" fixed top-[1vw] left-[1vw]">
      <div className="menu">
        <button>Sites</button>
        <div className="menu-content">
        <li><Link href='/Moonpage'>𝓢𝓽𝓪𝓻-𝓝𝓲𝓰𝓱𝓽t</Link></li>
        <li><Link href='/Catpage'>𝓒𝓪𝓽𝓼</Link></li>
      </div>
      </div>
      </div>
      <div className=" fixed top-0 left-[47vw] flex">
        <p className=" text-[3vw]">𝔍𝔬𝔢</p>
        </div>
        <div className="absolute top-[20vw] left-[35vw]">
          <p className="text-[10vw]">ɪɴɪᴄɪᴏ</p>
        </div>
      
      </main>
  )
}
