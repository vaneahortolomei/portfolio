import { Hero } from '@/components/sections/home/Hero'
import { Categories } from '@/components/sections/home/Categories'
import { About } from '@/components/sections/home/About'
import { Feedback } from '@/components/sections/home/Feedback'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Feedback />
    </>
  )
}
