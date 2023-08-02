import Link from "next/link"

export default function Home() {
  return (
    <main>
      <img className="w-full h-full flex"
      src="https://i.pinimg.com/originals/7b/e5/a1/7be5a1cb85ca4d0483c1ff17a487d50a.gif"
      />
      <div className=" fixed top-0 left-[39vw] flex">
        <Link href='/Catpage' className=" p-[2vw] pt-[1.5vw] pr-[3vw] text-[1.5vw]">𝓒𝓪𝓽𝓼</Link>
        <p className=" text-[3vw]">𝔍𝔬𝔢</p>
        <Link href='/Moonpage' className=" p-[2vw] pt-[1.5vw] pl-[3vw] text-[1.5vw]">𝓢𝓽𝓪𝓻-𝓝𝓲𝓰𝓱𝓽t</Link>
        </div>
      </main>
  )
}
