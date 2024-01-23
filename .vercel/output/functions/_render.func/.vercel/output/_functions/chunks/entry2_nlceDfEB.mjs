const id = "entry2.mdx";
						const collection = "posts";
						const slug = "entry2";
						const body = "\nLet's talk about this blog.\n\nSomething clicked recently, when Mastodon's `rel=me` feature forced me to conceptualize this as my \"experimental\" blog, thus\nleading by the shocking—_shocking_, I say!—realization that it is indeed such. Indeed (as you might notice by half-baked features,\nlinks leading to nowhere, and mostly unfilled project entries), I'm leaving trails for myself of knicks and knacks to\nexplore with time.\n\n## The why\n\nIn short, the reason I'm building this blog is that there I believe there is a perfect storm brewing.\nFor the first time in history, technology is coming out to make the Dream started by the IndieWeb finally not\njust possible, but accessible and customizable.\n\nIn short: for a _there is a great, new type of modern website engine_\njust waiting to to be born, _just out of my reach_. In a way, this blog is my attempt to carve out \"the solution\" out of\na mishmash of the pieces that other people have seen and worked on. Part of my 2022 is going to be exploring how to make what you see here all fit together, and hopefully sharing\nsome of the building block I'll inevitably build with all of you.\n\n## The goals\n\n1. Act as a \"command center\" for your existence on the web: there is a lot of interesting microdata that you\n   might want to propagate about you on the web, and it's kinda telling that we let link.tree be so popular.\n2. Be born _from_ your content, not be the source of it: a blog should be a layer on top of things you can\n   port around the web.'\n3. Propagate metadata to other website, and have everything be scrapable and targetable\n4. Be easily modifiable at the level someone wants it to be modifiable at. It should never be harder than\n   it can be. Everything should be customizable in a way that's shareable.\n5. Be easily deployable, with no compromises.\n\nSomewhere there is also this diagram here, and the fact that I have bought the `shrines.club` domain.\n\n## The tech stack in place\n\n### MDX\n\n[meme: shut up about mdx shut up about mdx]\n\nIf you haven't heard me rant about how good MDX is, consider yourself lucky. Here's the downlow: MDX\nis _really, really_ good.\n\n#### UnifiedJS\n\nMy love for MDX is inseperable from my love for the unifiedjs ecosystem (and their organizational structure).\n\nUnifiedJS allows you to apply plugins to stuff. For example, here's some plugins I could add (and whether I added)\n\n- [x] Github-flavored markdwon, allowing me to ~~strike through~~ things, and\n- [x] Automatically adiding header links to my things\n- [ ] Some TOC thing, though I haven't found the perfecrt one yet. Will have to write a plugin.\n- [ ] A plugin I've actually been writing, to reimplement a more flexible version of docusaurs notes.\n\n### ContentLayer\n\nI have been somewhat disappointed with the development experience of content layer, and can't really reccommend it\nas wholeheartidly as i wish i could, but i still find the idea to be just wha'ts needed. It does two main things:\n\n1. Puts the content in its own folders, and compiles it for you before serving\n2. Applies the MDX plugins\n3. Makes it easy for you to import the content where you want\n\nProblems:\n\n- [ ] Images are separated from the source\n- [ ] Not as fine-grained as I'd like (hard to add plugins only to specific things, for example)\n- [ ] Should rely on more portable things like Zod\n\n### NextJS (most likely axed for Astro, _possibly_ Remix)\n\nRight now, this is using NextJS 13. Big reason: NextJS is what Boba is written in, and i've been dying to fix some\nproblems that NextJS version 13 would. So I've been using it for it.\n\nBut I think NextJS is a bit too much for what I want to write here: I don't want enterprise software, and I am actually\ntempted to even go as far as Astro. If nothing else, I'm going to\n\n#### Straight up vanilla CSS\n\n### Payments that I own\n\n## The tech stack to come\n\n### TODO: ActivityPub & RSS & other microformats\n\n### TODO: NixOS\n\nThis will allow me to also explore other stuff, like adding image services, my own \"iframely\"\nimplementation (I'll rant about iframely another time).\n\n### The final frontier: Netlify CMS\n\nSometimes you have a good idea and then realize someone else has done it. That's me with netlify CMS.\n";
						const data = {title:"\u003Cdel>test\u003C/del> A quick primer on this blog (engine)",created_at:new Date(1657937229000),unlisted:true,tags:["mood: write high edit sober","type: design doc","yes, why, I did indeed write (the first draft of) this while high, and what a better way to set the tone\"","okes aside, the #1 killer of fun is taking yourself too seriously or professionally","nce you start your own blog with a post you've written high, you have set the floor you're authorized to stoop down to","hus ensuring people will know better than to take you so seriously that you'll be too self conscious to write a post while high"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/entry2.mdx",
							rawData: "\ntitle: ~~test~~ A quick primer on this blog (engine)\ncreated_at: 2022-07-16T02:07:09+00:00\ntags:\n  - \"+mood: write high edit sober\"\n  - \"+type: design doc\"\n  - '\"yes, why, I did indeed write (the first draft of) this while high, and what a better way to set the tone\"'\n  - \"jokes aside, the #1 killer of fun is taking yourself too seriously or professionally\"\n  - once you start your own blog with a post you've written high, you have set the floor you're authorized to stoop down to\n  - thus ensuring people will know better than to take you so seriously that you'll be too self conscious to write a post while high\nunlisted: true",
						};

export { _internal, body, collection, data, id, slug };
