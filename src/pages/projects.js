import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercelmmmmmmmmmmmmmmmmmmmmmmmm.
          </p>
       
      </div>
    </main>
  )
}
