import type { NextConfig } from "next";
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import createMDX from '@next/mdx'
 
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
    ],
  },
})
 
export default withMDX(nextConfig)
