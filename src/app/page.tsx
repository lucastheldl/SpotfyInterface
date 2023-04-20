import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebar"
import { Laptop2, LayoutList, Maximize, Maximize2, Mic2, Volume } from "lucide-react"
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className="flex gap-4 items-center">
            <button className=" rounded-full bg-black/40 p-1"> 
              <ChevronLeft/>
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>
          <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="album cover"/>
              <strong>35xxxv</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 p-2 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="album cover"/>
              <strong>35xxxv</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 p-2 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="album cover"/>
              <strong>35xxxv</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 p-2 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="album cover"/>
              <strong>35xxxv</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 p-2 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="album cover"/>
              <strong>35xxxv</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 p-2 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="album cover"/>
              <strong>35xxxv</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 p-2 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
          </div>

          <h2 className="font-bold text-2xl mt-10">Made for Lucas Emanoel</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="album cover"/>
            <strong className="font-semibold ">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">Taka, Oneokrock</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="album cover"/>
            <strong className="font-semibold ">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">Taka, Oneokrock</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="album cover"/>
            <strong className="font-semibold ">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">Taka, Oneokrock</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="album cover"/>
            <strong className="font-semibold ">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">Taka, Oneokrock</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="album cover"/>
            <strong className="font-semibold ">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">Taka, Oneokrock</span>
            </a>
          </div>
        </main>
      </div>
      <Footer/>
      
    </div>
  )
}
