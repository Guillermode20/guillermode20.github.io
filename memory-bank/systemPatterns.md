# System Patterns: Personal Portfolio and Blog (Hugo with Risotto Theme)

## 1. System Architecture

The website is built using Hugo, a static site generator. The architecture follows Hugo's standard conventions:

* **Content (`content/`):** Markdown files with front matter define the site's content.
    * Blog posts: `content/posts/`
    * Projects: `content/projects/` (to be created)
    * Other pages: (e.g., `content/about.md`)
* **Layouts (`layouts/` and `themes/risotto/layouts/`):** Go HTML templates define how content is rendered.
    * Project-level `layouts/` override theme layouts.
    * **Types:** `_default/single.html` (for single content pages), `_default/list.html` (for lists of content). Specific content types can have their own layouts (e.g., `layouts/posts/single.html`, `layouts/projects/list.html`).
    * **Partials (`layouts/partials/`):** Reusable template snippets (e.g., header, footer, navigation).
    * **Base Templates (`layouts/_default/baseof.html`):** Main site skeleton.
* **Static Assets (`static/` and `themes/risotto/static/`):** CSS, JavaScript, images, fonts, etc.
    * Project-level `static/` overrides theme assets.
* **Assets (`assets/` and `themes/risotto/assets/`):** Files processed by Hugo Pipes (e.g., SCSS to CSS).
* **Configuration (`hugo.toml`):** Site-wide settings, menus, parameters.
* **Data (`data/`):** Data files (JSON, YAML, TOML) accessible in templates.
* **Archetypes (`archetypes/`):** Templates for new content files (e.g., `archetypes/default.md`, `archetypes/projects.md`).

## 2. Key Technical Decisions

* **Static Site Generation:** Chosen for performance, security, and simplicity of deployment.
* **Hugo:** Selected as the static site generator.
* **Risotto Theme:** Chosen as the base theme for its features and aesthetics.
* **Markdown for Content:** Simplifies content creation and management.

## 3. Design Patterns in Use (Hugo Context)

* **Content Types:** Organizing content into logical sections (e.g., "posts", "projects").
* **Taxonomies:** Categorizing content (e.g., tags, categories).
* **Shortcodes:** Reusable snippets of Markdown or HTML embeddable in content.
* **Menu System:** Hugo's built-in menu system for site navigation, configured in `hugo.toml`.
* **Theme Overriding:** Customizing the theme by placing modified or new template files in the project's `layouts` directory rather than editing the theme directly. This allows for easier theme updates.

## 4. Component Relationships

* `hugo.toml` configures site parameters, menus, and can influence theme behavior.
* `archetypes/*.md` define the default front matter for new content.
* `content/**/*.md` files provide the raw data and metadata.
* `layouts/**/*.html` templates consume data from content files and `hugo.toml` to generate HTML.
* `static/` and `assets/` provide styling and client-side interactivity.
* The `public/` directory contains the final, generated static site ready for deployment.

## 5. Critical Implementation Paths

* **Content Creation:** `hugo new <section>/<filename>.md` -> edit Markdown -> `hugo server`.
* **Layout Customization:** Identify theme template -> copy to project `layouts/` -> modify.
* **Styling:** Add/modify CSS in `static/css/` or `assets/css/` (if using Hugo Pipes with the theme).
* **Adding New Sections (like "Projects"):**
    1. Create content directory (e.g., `content/projects/`).
    2. Create archetype (`archetypes/projects.md`).
    3. Create list and single layouts (`layouts/projects/list.html`, `layouts/projects/single.html`).
    4. Add to site navigation in `hugo.toml`.
    5. Add content files.
