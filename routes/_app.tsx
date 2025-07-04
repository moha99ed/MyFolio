// routes/_app.tsx
import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/styles.css" rel="stylesheet" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}