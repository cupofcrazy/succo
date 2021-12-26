import sanityClient from '@sanity/client'


export const client = sanityClient({
  projectId: 'womt4e8o',
  dataset: 'production',
  useCdn: true
})
