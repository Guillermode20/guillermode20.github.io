# Active Context: Personal Portfolio and Blog

## 1. Current Work Focus

* **Task:** Create a new "Projects" section for the Hugo website.
* **Status:** Projects section implemented and styled to match the Risotto theme. Two sample projects added.

## 2. Recent Changes

* Created all core Memory Bank files.
* Defined project content structure and archetype.
* Added `content/projects/sample-project.md` and `content/projects/portfolio-site.md`.
* Created `layouts/projects/list.html` and `layouts/projects/single.html` using Risotto theme classes.
* Updated navigation in `hugo.toml` to include "Projects".
* Ensured image paths and embedding work as expected.

## 3. Next Steps

* Add more projects as needed.
* Further refine styling or content structure if desired.
* Keep Memory Bank updated with future changes.

## 4. Active Decisions and Considerations

* **Theme:** Confirmed as Risotto.
* **Project Information:** Standardized fields: title, description, tech stack, images, links.
* **Layout Design:** Uses Risotto's classes for full theme consistency.

## 5. Important Patterns and Preferences

* **Memory Bank:** Adherence to the Memory Bank structure and update process is crucial.
* **Hugo Best Practices:**
    * Override theme files in the project's `layouts` and `static` directories rather than modifying the theme directly.
    * Use archetypes for consistent content creation.
    * Leverage Hugo's built-in features (menus, taxonomies) where possible.

## 6. Learnings and Project Insights

* Projects section is best integrated by reusing theme classes and patterns.
* Image embedding requires correct path and placement in `static/`.
