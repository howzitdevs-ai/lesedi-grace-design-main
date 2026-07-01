// Renders a JSON-LD structured-data block. Search engines read application/ld+json
// anywhere in the document, so rendering inside the page body is reliable.
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
