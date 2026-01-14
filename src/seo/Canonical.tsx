// src/seo/Canonical.tsx
interface CanonicalProps {
  uid?: string; // optional, for pages with known slug
}

export default function Canonical({ uid }: CanonicalProps) {
  // Use the UID if provided; otherwise default to root
  const canonicalPath = uid ? `/${uid}` : `/`;
  const canonicalUrl = `https://www.venastechnology.com${canonicalPath}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
