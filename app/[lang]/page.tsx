import Hero from '@/Components/Home/Hero'
import Image from 'next/image'
import { getDictionary } from './Dictionary';

export default async function Home({params}: {params:{lang:string}}) {
  const lang = params.lang
  const dict = await getDictionary(lang);

  return (
    <main className="">
      <Hero data={dict}/>
      بسم الله الرحمن الرحیم
    </main>
  )
}
