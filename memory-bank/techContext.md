# Tech Context: Personal Portfolio and Blog

## 1. Technologies Used

* **Static Site Generator:** Hugo
    * Version: (To be determined - can be checked with `hugo version`)
* **Theme:** Risotto
    * Theme Source: themes/risotto
    * Theme Documentation: (Add link if available)
* **Primary Language for Content:** Markdown
* **Templating Language:** Go Templates (used by Hugo)
* **Styling:** CSS (and possibly SCSS/Sass if Hugo Pipes is used)
* **Version Control:** Git
* **Deployment:** (To be determined - e.g., Netlify, GitHub Pages, Vercel, self-hosted)

## 2. Development Setup

* **Local Development:** Run `hugo server` for live preview.
* **Content Creation:** Write Markdown files in the `content/` directory.
* **Layout Customization:** Modify or add templates in the `layouts/` directory (overriding theme defaults).
* **Configuration:** Managed in `hugo.toml`.

## 3. Technical Constraints

* Static site: dynamic server-side functionality is limited without external services.
* Build times may increase with a very large number of content pages, but Hugo is generally fast.
* Theme updates for Risotto may require manual merging if customizations are made directly in the theme folder. Prefer overriding in `layouts/`.

## 4. Dependencies

* **Hugo:** Core dependency.
* **Git:** For version control and managing themes as submodules.
* (Add any other CLI tools or services as needed.)

## 5. Tool Usage Patterns

* **Content Management:** Blog posts in `content/posts/`, projects in `content/projects/`.
* **Customization:** Override theme templates in `layouts/`, add custom CSS in `static/css/` or `assets/css/`.
* **Building for Production:** Use `hugo` to generate the static site in `public/`.
