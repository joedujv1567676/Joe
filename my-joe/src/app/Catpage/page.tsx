import { ChevronRightSquare, Cat, Fish, Moon, Sun, Twitch} from 'lucide-react';
import './Js/teste'
import './class.css'
import Link from 'next/link';
import Teste from './Js/teste';


export default function CatPage() {
  return (
    <main>
      <div className='w-full max-[768px]:hidden'>
        <img
        className='w-full flex'
        src='https://i.pinimg.com/originals/73/5d/73/735d73725f77188e554756b5e11a2bf1.gif'
        />
        <img 
        className='w-full flex'
        src='https://i.pinimg.com/originals/d8/8c/b0/d88cb09e8888893d83f73f2bd7af8b88.gif'
        />
        <div className='right-[1.5vw] top-[0.5vw] fixed flex'>
          <Link href='/Moonpage'
              className=' m-4 p-2 text-[1.2vw]'>Teste
            </Link>
          <a href='https://br.pinterest.com/' className=' m-4 p-2 text-[1.2vw]'>Mais</a>
          <a href='https://discord.gg/ZxVJb7g6F4' className=' m-4 p-2 text-[1.2vw]'>Discord</a>
          <div className='group'>
          <a href='https://www.twitch.tv/yumis2owo' className=' m-4 p-2 text-[1.2vw] flex border-white border-2 '>Yumis2owo<button className='pl-1 pr-1 group-hover:pl-3 group-hover:duration-200 group-hover:pr-0'><Twitch /></button></a>
        </div>
        </div>
        <div className=' fixed left-10 top-1'>
          <p className=' text-[4.5vw]'>𝓒𝓪𝓽</p>
        </div>
        <div className=' absolute right-[13vw] top-[15vw]'>
          <p className=' text-[6vw]'>𝖌𝖆𝖙𝖎𝖓𝖍𝖔𝖘</p>
          <div className=' border-white border-2 rounded-[12px] group'>
          <a href='https://br.pinterest.com/search/pins/?q=cat&rs=typed' className='flex justify-center text-[2vw]'>𝖌𝖆𝖙𝖎𝖓𝖍𝖔𝖘 𝖋𝖔𝖋𝖔𝖘<button className=' pl-1 group-hover:pl-3 group-hover:duration-200'><ChevronRightSquare /></button></a>
          </div>
        </div>
        <div className=' absolute top-[80vw] left-[3vw]'>
            <p className='text-[4vw] text-center'>𝓛𝓸-𝓕𝓲 𝓐𝓷𝓭 𝓒𝓪𝓽𝓼</p>
            <iframe src="https://www.youtube.com/embed/6lLsE_jPRl8" className=' border-white border-t-2 border-l-2 border-r-2 rounded-t-[6px] w-[41vw] h-[23vw]'></iframe>
            <div className='group'>
            <a href='https://www.youtube.com/results?search_query=Lo-Fi+cat' className=' border-white border-b-2 border-l-2 border-r-2 justify-center flex text-[2vw] rounded-b-[6px]'>𝔐𝔬𝔯𝔢 <button className=' pl-1 group-hover:pl-3 group-hover:duration-200'><ChevronRightSquare/></button></a>
         </div>
         <div className=' fixed top-[20vw] right-0'>
          <div className=' pr-[1vw]'>
          <p><Cat /></p>
          <p><Fish /></p>
          <p><Moon /></p>
          <p><Sun /></p>
          </div>
         </div>
          </div>
        </div>
      <div className='w-full min-[768px]:hidden'>
        <img
        className='w-full flex'
        src='https://i.pinimg.com/564x/b7/fd/24/b7fd24b2384e84c69d5716a20e17fb5d.jpg'
        />
        <img 
        className='w-full flex'
        src='https://i.pinimg.com/564x/17/c3/ab/17c3abfd258333f225797868e6fde7b9.jpg'
        />
        <div className=' fixed top-1 left-1'>
          <p className='text-[9vw]'>𝓒𝓪𝓽</p>
        </div>
        <div className=' absolute top-1 right-1'>
         <Teste />
        </div>
        <div className=' absolute top-[30vw] right-[5vw]'>
          <p className=' text-[12vw]'>𝖌𝖆𝖙𝖎𝖓𝖍𝖔𝖘</p>
          <div className=' border-white border-2 rounded-[12px] '>
          <a href='https://br.pinterest.com/search/pins/?q=cat&rs=typed' className='flex justify-center text-[5vw] pb-[-1vw]'>𝖌𝖆𝖙𝖎𝖓𝖍𝖔𝖘 𝖋𝖔𝖋𝖔𝖘 <button className='pl-1'><ChevronRightSquare /></button></a>
          </div>
          </div>
          <div className='absolute top-[100vw] left-[3vw]'>
            <p className='text-[8vw] sombra'>𝑨𝒍𝒊𝒔𝒂 𝑴𝒆𝒖 𝑷𝒆𝒍𝒐</p>
            <div className='border-white border-2 rounded-[12px]'>
            <a href='https://www.youtube.com/watch?v=f4TYBDZr908' className='flex text-[5vw] justify-center'>𝐀𝐥𝐢𝐬𝐨<button><ChevronRightSquare/></button></a>
          </div>
          </div>
          <div className=' absolute top-[260vw] left-[3vw]'>
            <p className='text-[6vw] text-center'>𝓛𝓸-𝓕𝓲 𝓐𝓷𝓭 𝓒𝓪𝓽𝓼</p>
            <iframe className='w-[51.1vw]'  src="https://www.youtube.com/embed/6lLsE_jPRl8"></iframe>
          </div>
      </div>
    </main>

    
  )
}