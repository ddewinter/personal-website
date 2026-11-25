import { HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import site from "./src/_data/site.js";


export default function (eleventyConfig) {
  // Copy static files straight through to the built site.
  eleventyConfig.addPassthroughCopy("src/assets");

  // Rewrites root-relative links ("/about/") to include the path prefix,
  // so the site also works at https://<user>.github.io/<repo>/.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Drafts (draft: true) are visible while previewing with `npm start`,
  // but skipped entirely when the site is built for publishing.
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") return false;
  });

  // All blog posts, newest first.
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => b.date - a.date)
  );

  // RSS feed at /feed.xml
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: "en",
      title: `${site.name} — Blog`,
      subtitle: site.description,
      base: site.url,
      author: { name: site.name },
    },
  });

  // "November 25, 2026"
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  // "2026-11-25" for <time datetime>
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

  // "4 min read"
  eleventyConfig.addFilter("readingTime", (content = "") => {
    const words = content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 225))} min read`;
  });

  eleventyConfig.addFilter("head", (array, n) => (Array.isArray(array) ? array.slice(0, n) : []));

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  // "November 2026" — the month the site was last built, for the home page dateline.
  eleventyConfig.addFilter("monthYear", () =>
    new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Set by the GitHub Pages workflow (e.g. "/my-repo/"). Empty locally.
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
