import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  return {
    dir: {
      input: "src"
    }
  };
};