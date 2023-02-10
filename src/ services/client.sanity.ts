import { createClient } from 'next-sanity';
import imageUrl from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-02-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

const bulderImg = imageUrl(client);

export const imageurl = (source: string) => bulderImg.image(source);
