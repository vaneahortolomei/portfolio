import { notFound } from 'next/navigation'
import { brandingCategories } from '@/data/categories'

interface BrandingProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return brandingCategories.map((p) => ({
    slug: p.slug,
  }))
}

const BrandingProjectPage = async ({ params }: BrandingProjectPageProps) => {
  const { slug } = await params

  const project = brandingCategories.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <section>
      <h1>Branding Project: {slug}</h1>
    </section>
  )
}

export default BrandingProjectPage
