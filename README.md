# David DeWinter — personal website

A small, fast static site built with [Eleventy](https://www.11ty.dev/). Pages are plain HTML templates, blog posts are Markdown files, and there's no database or server to run.

## Preview it on your computer

```bash
npm install
```

```bash
npm start
```

Then open <http://localhost:8080>. The page reloads on its own as you save changes. Press `Ctrl+C` in the terminal to stop it.

## Write a blog post

1. Create a new file in `src/blog/posts/`, named with the date and a short title, for example `2026-12-03-what-i-learned-teaching-ai.md`.
2. Start it with this header, then write the post in Markdown underneath:

   ```markdown
   ---
   title: What I learned teaching AI to lawyers
   description: One sentence that shows up on the blog list and in link previews.
   tags: [ai, teaching]
   ---

   Your post starts here. Use **bold**, _italics_, [links](https://example.com),
   ## headings, - bullet lists, and > quotes.
   ```

3. That's it. The post gets its own page at `/blog/what-i-learned-teaching-ai/`, and shows up at the top of the blog list, on the home page, and in the RSS feed.

**Pull quote (optional):** add `pullquote: A line from the post.` to the header. The newest post's pull quote is shown big on the home page next to the post.

**Drafts:** add `draft: true` to the header. You'll see the post (marked "Draft") while previewing, but it's left out when the site is published. Remove the line when it's ready.

**Images:** put them in `src/assets/images/` and use `![Description of the image](/assets/images/my-image.jpg)`.

The sample post `2026-11-25-hello-world.md` can be edited or deleted.

## Edit the rest of the site

| To change…                                   | Edit                         |
| -------------------------------------------- | ---------------------------- |
| Name, tagline, contact email, social links   | `src/_data/site.js`          |
| Projects (Projects page and home page cards) | `src/_data/projects.json`    |
| Home page text                               | `src/index.njk`              |
| About page and experience                    | `src/about.njk`              |
| Contact page                                 | `src/contact.njk`            |
| Colors, fonts, spacing                       | `src/assets/css/style.css`   |
| Headshot                                     | `src/assets/images/headshot.jpg` |

In `projects.json`, set `"featured": true` to show a project on the home page, and add a web address to `"link"` to show a "Visit" link.

## How the contact form works

The form doesn't send anything itself. When a visitor presses the button, it opens their own email app (Mail, Outlook, Gmail in the browser if set as default, etc.) with a new message to the address in `src/_data/site.js`, the subject and message already filled in. They press send. No form service, no spam inbox to manage. The address is also shown on the page with a Copy button for anyone without an email app set up.

## Put it online for free (GitHub Pages)

Everything is ready; nothing has been published yet. When you want to go live:

1. Create a free account at <https://github.com> if you don't have one.
2. Create a new **public** repository. Name it `<your-username>.github.io` for the address `https://<your-username>.github.io`, or any other name (e.g. `website`) for `https://<your-username>.github.io/website/`. Don't add a README or license.
3. In this folder, connect it and push:

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "First version of my site"
   ```

   ```bash
   git branch -M main
   ```

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   ```

   ```bash
   git push -u origin main
   ```

4. On GitHub, open the repository's **Settings → Pages**, and under **Build and deployment → Source** choose **GitHub Actions**.
5. Open the **Actions** tab; the "Deploy to GitHub Pages" run builds and publishes the site in a minute or two. Its summary shows the live address.

From then on, every push to `main` republishes the site automatically. The workflow is in `.github/workflows/deploy.yml` and works out the right address on its own.

**Custom domain later?** In Settings → Pages, add your domain and follow GitHub's DNS instructions.

## Build it yourself

```bash
npm run build
```

The finished site lands in `_site/`. That folder is generated; don't edit it by hand.
