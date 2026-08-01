---
title: Building this site
description: Overengineering on many levels
date: 2026-07-31
tags:
---

Since its one week inception, this site has gone through two different frameworks and has been overengineered, through and through. 

This brief blog post roughly goes over the lessons learned and workflows that went into building this site.

## Creating assets and an identity

The first step that I like to do when starting a new art/design project is doing some rough planning, either on paper or digitally of what I want it to be.

I plan out the colour palette, do some light research on what colours relate to the subject matter of the project and what feeling is strived to be achieved. Typography is a big part of this, but for me it often falls by the wayside. 

Most of the projects I've done thus far have a high utilitarian scope, and the most generic and common fonts are the most readable. So they have won in almost all of my projects thus far.

Creating assets is a big part of this. At the start of projects, making a collectionof assets, including icons at different resolutions, wordmarks, and colours and sharing it with your team (if you have one!) is a good way to keep things consistent with an identity long term.

For this site (and the unrelated very coincidentally similiarly named [yaoi.foundation](https://yaoi.foundation)), the logos and icons for both were made in the same workflow with a lot of asset reuse.

You may use any software for this, but [Figma](https://figma.com) works well for my workflow as revisions can be made based on feedback and propagate across several assets instantly.

One example workflow using Figma is creating one base icon design at 192x, turning it into a component, and then duplicating it and resizing it to all the sizes you would like to target, and making per pixel adjustments after the fact. The [Pixel preview](https://help.figma.com/hc/en-us/articles/360041065034-Adjust-your-zoom-and-view-options#pixel-preview) function in Figma can help a lot with this.

Favicons can benefit from amped up contrast or more negative space between forms as their primary size is at 16x. Even though I work in a non-destructive, vector only workflow, for others it may help to use a bitmap editor to augment the vector tools and get their assets pixel perfect.

In terms of wordmarks, for this project I was going for a very curvy, eloquent feeling compared to my usual designs that oftentimes end up looking generic. The vibrant, partially pastel base colour with dark, hue-shifted shadows helps it pop out on both light and dark backgrounds without entirely leaning on vibrancy like many other logos.

It is a compromise, as it ends up having lower contrast on light backgrounds compared to darker ones, but if you compare it to print standards it's not too bad.

The colour scheme ([Rosé Pine](https://rosepinetheme.com/)), the minimalistic layout of centred text with a high amount of negative space and monospaced text were inspired by [yaoi.foundation](https://yaoi.foundation).

## The technical part

The website went through multiple stages before even getting pushed to GitHub, and they were all overengineered. It started off with just a `index.html` and `style.css`.

It worked for the single landing page this site was for a while, but the lack of hot reload I was used to in other projects became a very fast friction point. I was familiar with [Vite](https://vite.dev/) from using it in a school project, so I setup it up with the bare minimum settings and solely used it as a hot reload server.

Even like this, it felt overengineered as there was TypeScript files lying around that were blanked out, CSS had to be imported through the `index.html` to work with HMR hot reload, and a `modulepreload` polyfill was injected into the site adding a JavaScript dependency when it was not needed.

I remembered seeing a few sites using this static site generator called [11ty](https://www.11ty.dev/), so I decided to read the documentation and check it out.

The site was completely ported over in about an hour or so, copy pasting the HTML layouts over, moving the index and 404 pages to markdown files and copying some Nunjucks templates from the official 11ty guide.

I would spend more time learning Nunjucks if it wouldn't take so long for each language I learn. For now, I am just copy paste mashing and guessing the syntax, directly checking against the documentation if anything doesn't work or if I need to know how to do something specific.

Following the initial port, image optimization broke the layout severely, and I didn't catch it until much later. Improvements like cache busting and inline CSS were added, and I find the extensibility of 11ty really cool.

I'm looking forward to using 11ty for this project in the future!

## Conclusion

I have never written a blog post before, this is my first blog post and I don't have the slightest idea of who my target audience is. Maybe all will come in time.