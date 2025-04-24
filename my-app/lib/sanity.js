
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'j6lbxkyr',       
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true
});
