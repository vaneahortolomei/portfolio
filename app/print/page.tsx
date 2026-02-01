import { brandingCategories } from '@/data/categories'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const PrintPage = () => {
  if (!brandingCategories.length) return notFound()
  return (
    <section>
      <h1>Print</h1>
      <ul>
        {brandingCategories.map((c) => (
          <li key={c.slug}>
            <Link href={`/print/${c.slug}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PrintPage
