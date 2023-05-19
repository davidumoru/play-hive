import Link from 'next/link'

export default function Home() {
  return (
    <>
    <p className='flex justify-center mt-[20rem] text-[10rem] font-bold'>.Play Hive.</p>
    <Link href="/about"><p className='flex justify-center text-[1.5rem]'>Read More...</p></Link>
    </>
  )
}
