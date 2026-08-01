import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { transform } from 'lightningcss';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "css": "/assets" });
  // Inspired by https://codeberg.org/amberstarlight/website/src/commit/21ba38eac36ec72b8710aca371239a42e3163442/eleventy.config.js#L57
  // (thanks!!!)
  eleventyConfig.addBundle("css", {
    toFileDirectory: "css",
    transforms: [
      async function (content) {
        const { page } = this;
        const { code } = transform({
          filename: page.inputPath,
          code: Buffer.from(content),
          minify: true
        });

        return code;
      }
    ]
  });
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["webp", "png", "jpeg"]
  });
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Miso Blog",
      subtitle: "Tidbits from Miso",
      base: "https://yuri.foundation/",
      author: {
        name: "Miso",
        email: "", // Optional
      }
    }
  });
  eleventyConfig.addFilter("readableDate", (d, f, z) => {
    const o = { timeZone: z || "UTC", year: "numeric", month: "long", day: "2-digit" };
    if (f === "dd LLLL yyyy") Object.assign(o, { day: "2-digit", month: "long", year: "numeric" });
    return new Intl.DateTimeFormat("en-US", o).format(d);
  });

  eleventyConfig.addFilter("htmlDateString", d => d.toISOString().split('T')[0]);

  return {
    dir: {
      input: "src"
    }
  };
};