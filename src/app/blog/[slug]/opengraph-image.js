import generateOGImage from './opengraph-image';

export async function getStaticProps({ params }) {
  const ogImage = await generateOGImage({ title: 'My Blog Post Title' });

  return { props: { ogImage } };
}

export default function BlogPost({ ogImage }) {
  return (
    <div>
      {/* ... */}
      <Head>
        <meta property="og:image" content={'/og-image.jpg'} />
        <meta property="og:image:width" content={ogImage.width} />
        <meta property="og:image:height" content={ogImage.height} />
        {ogImage.alt && <meta property="og:image:alt" content={ogImage.alt} />}
      </Head>
    </div>
  );
}

export default async function generateOGImage({ title }) {
  return {
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: `OG Image for blog post: ${title}`,
  };
}
