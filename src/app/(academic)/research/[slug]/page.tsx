
import {
  Image,
  Divider,
} from '@mantine/core';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Header } from '@/components/AcademicPost/Header';
import { H1, H2, H3, H4, H5, H6 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';
import { Blockquote } from '@/components/Blockquote';
import { Anchor } from '@/components/Anchor';
import { NarrowContainer } from '@/components/NarrowContainer';
import { List, ListItem } from '@/components/List';

const overrideComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  hr: () => (<Divider />),
  br: () => (<br />),
  img: ({src, alt, title}) => (
    <Image src={src} alt={alt} title={title} radius="md" />
  ),
  blockquote: Blockquote,
  a: ({ children, href, title }) => (
    <Anchor href={href} title={title} target="_blank">{children}</Anchor>
  ),
  em: ({ children }) => (
    <em>{children}</em>
  ),
  strong: ({ children }) => (
    <strong>{children}</strong>
  ),
  li: ({ children }) => (
    <ListItem>{children}</ListItem>
  ),
  ol: ({ children }) => (
    <List type="ordered">{children}</List>
  ),
  ul: ({ children }) => (
    <List type="unordered">{children}</List>
  ),
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Post({ params }: Props) {

  const { slug } = await params
  const post = await import(`@/data/posts/${slug}.mdx`)
  const Content = post.default
  const metadata = post.metadata

  return (
    <>
      <H1
        title={metadata.title}
        authors={metadata.authors}
        affiliation={metadata.affiliation}
      />
      <Header links={metadata.links} />
      <ScrollToTop />
      <NarrowContainer>
        <div id="mdx">
          <Content components={overrideComponents} />
        </div>
      </NarrowContainer>
    </>
  );
}

export function generateStaticParams() {
  // A list of params, which we will update shortly to use the file system.
  return [
  ]
}

// By marking as false, accessing a route not defined in generateStaticParams will 404.
export const dynamicParams = false