import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "shze",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "shze.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Karla",
        body: "Karla",
        code: "Latin Modern Mono",
      },
      colors: {
        lightMode: {
          light: "#F7F5ED",
          lightgray: "#C3C3C4",
          gray: "#8E8F93",
          darkgray: "#1E1E1E",
          dark: "#1E1E1E",
          secondary: "#007AFF",
          tertiary: "hsla(218, 100%, 43%, 0.6)",
          highlight: "hsla(218, 100%, 43%, 0)",
        },
        darkMode: {
          light: "#1E1E1E",
          lightgray: "#474850",
          gray: "#505050",
          darkgray: "#F7F5ED",
          dark: "#F7F5ED",
          secondary: "#007AFF",
          tertiary: "hsla(218, 100%, 43%, 0.6)",
          highlight: "hsla(218, 100%, 43%, 0)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      // Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
