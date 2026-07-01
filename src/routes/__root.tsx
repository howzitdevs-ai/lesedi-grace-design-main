import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lesedi Funeral Society — Funeral Cover in Klerksdorp, Orkney, Stilfontein & Hartbeesfontein" },
      { name: "description", content: "Affordable, dignified funeral cover for KOSH families from R31/month, up to R50,000. Authorised FSP 9027. 24/7 emergency assistance. Get an instant quote today." },
      { name: "keywords", content: "funeral cover KOSH, funeral society Klerksdorp, funeral insurance Orkney, funeral cover Stilfontein, Hartbeesfontein funeral plan, affordable funeral cover North West, FSP 9027" },
      { name: "author", content: "Lesedi Funeral Society" },
      { name: "theme-color", content: "#1E3A8A" },
      { name: "geo.region", content: "ZA-NW" },
      { name: "geo.placename", content: "Klerksdorp, Orkney, Stilfontein, Hartbeesfontein" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Lesedi Funeral Society — Dignified Funeral Cover for KOSH Families" },
      { property: "og:description", content: "Affordable funeral cover from R31/month, up to R50,000. 24/7 emergency assistance. Authorised FSP 9027." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Lesedi Funeral Society" },
      { property: "og:locale", content: "en_ZA" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/cover.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lesedi Funeral Society — Dignified Funeral Cover" },
      { name: "twitter:description", content: "Affordable funeral cover from R31/month for KOSH families. 24/7 assistance. FSP 9027." },
      { name: "twitter:image", content: `${SITE_URL}/cover.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.process = window.process || { env: { NODE_ENV: 'production' } };`
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <JsonLd data={localBusinessSchema()} />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingContactWidget />
      </div>
    </QueryClientProvider>
  );
}
