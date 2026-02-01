import Link from 'next/link'
import { categories } from '@/data/categories'

export const Categories = () => {
  return (
    <section className="categories">
      <h2>Categories</h2>

      <ul>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/${c.slug}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
