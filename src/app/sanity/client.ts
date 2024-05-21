import { type QueryParams, createClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'odgsv1k1',
  dataset: 'production',
  apiVersion: '2024-03-11',
  // Set to `true` for production environments
  useCdn: false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}

const { projectId, dataset } = client.config();
export function urlFor(source: SanityImageSource) {
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source).url()
    : null;
}
