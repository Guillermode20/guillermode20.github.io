---
title: "DITHERMAN"
date: 2025-05-13
description: "Web-based image dithering app"
featured: false
project_url: "https://ditherman.subs2all.workers.dev/"
source_url: "https://github.com/Guillermode20/ditherman"
tech_stack:
  - React w/ TypeScript

images:
- /projects/images/Ditherman.webp
draft: false
---

I basically made this project because I found an app called [Dither Boy](https://studioaaa.com/product/dither-boy/) and didn't really feel like paying for it. As much as I applaud indie studios like this for trying to make a neat piece of software all in one, the concept isn't exactly novel and not particularly hard to replicate, however Dither Boy is absolutely a much better product. From just the videos I've seen it's faster, can do videos and gifs, and applies the dithering effects much better. 

My alternative does have a pretty neat benefit though: completely runs in the browser (and open source free). 

The frontend is simple React and TypeScript, and I'm also using a Web Worker to apply the dithering effects so there's no impact to the responsiveness of the UI when working on applying the image affects. It's relatively quick though not as much as I would like, might try improve it at some point. 
