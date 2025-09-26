import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(handlebarsPlugin);
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("dist");
    eleventyConfig.setLayoutsDirectory("_layouts");
    eleventyConfig.setServerOptions({
        port: 8000,
        watch: ['dist/**/*.css', 'dist/**/*.js'],
    })
};