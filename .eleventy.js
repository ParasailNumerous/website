import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { transform } from 'lightningcss';

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "public": "/" });
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

  return {
    dir: {
      input: "src"
    }
  };
};