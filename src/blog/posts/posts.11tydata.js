// Settings shared by every Markdown file in this folder.
// Drop a new .md file in here and it becomes a blog post at /blog/<file-name>/.
// A leading date in the file name (2026-11-25-my-post.md) is used as the post date
// and left out of the web address.
// Posts with `draft: true` show while previewing (npm start) but are skipped when
// the site is built for publishing (see eleventy.config.js).
export default {
  layout: "layouts/post.njk",
  permalink: (data) => `/blog/${data.page.fileSlug}/`,
};
