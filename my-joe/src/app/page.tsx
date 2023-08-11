import Link from "next/link"
import { ArrowBigRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <picture>
      <img 
      className="w-full flex"
      src="https://i.pinimg.com/originals/d2/51/9f/d2519f97a780645b9b5335c3460ce25a.gif"
      />
      <img 
      className="w-full flex"
      src="https://i.pinimg.com/originals/4a/cd/2a/4acd2a7d99fb1ba320967efd46ff804f.gif"
      />
      </picture>
      <div className=" fixed top-[0vw] left-[1vw] flex">
        <p className=" text-[3vw] text-violet-400">𝔍𝔬𝔢</p>
        </div>
        <div className="absolute top-[13vw] left-[35vw]">
          <p className="text-[10vw] text-violet-400">ɪɴɪᴄɪᴏ</p>
          <div className="border-violet-400 border-2 rounded-[12px]">
          <Link href="/Sites" className=" justify-center flex text-violet-400">My projects<button><ArrowBigRight /></button></Link>
          </div>
        </div>
      </main>
  )
}

