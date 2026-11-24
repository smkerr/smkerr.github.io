import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
// Each file's `id` is derived from its filename, e.g. studio-os.md -> "studio-os",
// which becomes the URL at /work/studio-os.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      role: z.string(),
      // Start of the work; its year is shown in the list and it sets the order within a year.
      date: z.coerce.date(),
      // When the work ended, for projects spanning more than one year. The list sorts by
      // this date (or by `date` when there is no end date), newest first.
      endDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      url: z.url().optional(),
      // Text for the main link button on the detail page, e.g. "Read the paper".
      linkLabel: z.string().optional(),
      repo: z.url().optional(),
      // Extra buttons on the detail page, e.g. a project's about page.
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
