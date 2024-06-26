import type { PluggableList } from 'lume/deps/remark.ts'
// remark plugins
import remarkSmartyPants from 'npm:remark-smartypants@2.1.0'
// rehype plugins
import rehypeSlug from 'npm:rehype-slug@5.1.0'
import rehypeAutolinkHeadings from 'npm:rehype-autolink-headings@7.1.0'
import rehypePrettyCode from 'npm:rehype-pretty-code@0.12.6'
// shikiji transformers
// import { transformerNotationDiff } from 'npm:shikiji-transformers@0.10.1'
import { transformerTwoslash } from 'npm:shikiji-twoslash@0.10.1'

export const remarkPlugins: PluggableList = [
  remarkSmartyPants,
]

export const rehypePlugins: PluggableList = [
  // deno-lint-ignore no-explicit-any
  rehypeSlug as any,
  rehypeAutolinkHeadings,
  [
    rehypePrettyCode,
    {
      defaultLang: 'plaintext',
      keepBackground: false,
      theme: {
        // light: 'material-theme-lighter',
        // dark: 'material-theme-darker',
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        // transformerNotationDiff(),
        transformerTwoslash({
          explicitTrigger: true,
        }),
      ],
    },
  ],
]
