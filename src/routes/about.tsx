import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/components/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kodia | Iraqi Strategic Partnerships & Investment" },
      {
        name: "description",
        content:
          "Kodia is an Iraqi company building industrial, technology and investment partnerships in defense & security, clean energy, oil & gas and real estate.",
      },
      { property: "og:title", content: "About Kodia | Iraqi Strategic Partnerships & Investment" },
      {
        property: "og:description",
        content:
          "Connecting international expertise with real opportunities in Iraq across defense & security, clean energy, and oil & gas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
