
import {
  Image,
  Divider,
} from '@mantine/core';
import { Anchor } from '@/components/Anchor';
import { Blockquote } from '@/components/Blockquote';
import { Content } from '@/components/Content';
import { H1, H2, H3, H4, H5, H6 } from '@/components/Headings';
import { Header } from '@/components/AcademicPost/Header';
import { List, ListItem } from '@/components/List';
import { Paragraph } from '@/components/Paragraph';
import { ScrollToTop } from '@/components/ScrollToTop';

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
    <Anchor href={href} title={title}>{children}</Anchor>
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
  const MDXContent = post.default
  const metadata = post.metadata

  return (
    <>
      <H1
        title={metadata.title}
        authors={metadata.authors}
        affiliation={metadata.affiliation}
        venue={metadata.venue}
      />
      <Header links={metadata.links} />
      <ScrollToTop />
      <Content mt="md">
        <div id="mdx">
          <MDXContent components={overrideComponents} />
        </div>
      </Content>
    </>
  );
}

export function generateStaticParams() {
  // A list of params, which we will update shortly to use the file system.
  return [
    { slug: 'MAPLe' },
  ]
}

// By marking as false, accessing a route not defined in generateStaticParams will 404.
export const dynamicParams = false