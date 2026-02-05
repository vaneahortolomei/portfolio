export const categories = [
  { slug: 'branding', title: 'Branding', disabled: false, src: '/tab1.png' },
  { slug: 'broshures', title: 'Broshures', disabled: false, src: '/tab2.png' },
  { slug: 'ui-ux', title: 'UI/UX', disabled: false, src: '/tab3.png' },
  { slug: 'sketches', title: 'Sketches', disabled: false, src: '/tab4.jpg' },
  {
    slug: 'creatives',
    title: 'Creatives',
    disabled: true,
    src: '/portrait.png',
  },
  { slug: 'fine-art', title: 'FineArt', disabled: true, src: './window.svg' },
] as const

export const categoriesPreviews = [
  { title: 'Branding', src: '/tab1.png' },
  { title: 'Broshures', src: '/tab2.png' },
  { title: 'UI/UX', src: '/tab3.png' },
  { title: 'Sketches', src: '/tab4.jpg' },
  { title: 'Creatives', src: '/portrait.png' },
  { title: 'FineArt', src: './window.svg' },
]

export const brandingCategories = [
  { slug: 'houts', title: 'HOUTS' },
  { slug: 'polar', title: 'Polar' },
  { slug: 'berglicht', title: 'Berglicht' },
  { slug: 'voxel-sounds', title: 'Voxel sounds' },
] as const
