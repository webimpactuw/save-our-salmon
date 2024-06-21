import { type QueryParams, createClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

const options = {
  projectId: 'odgsv1k1',
  dataset: 'production',
  apiVersion: '2024-03-11',
  // Set to `true` for production environments
  useCdn: false,
};
export const client = createClient(options);

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

export function getUrlFromId(ref: string) {
  // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
  // We don't need the first part, unless we're using the same function for files and images
  const [_file, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/${options.projectId}/${options.dataset}/${id}.${extension}`;
}
