import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const news = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/news" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
	}),
})

export const collection = { news }