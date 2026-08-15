import { createFileRoute } from "@tanstack/react-router";
import KodiaSite from "@/components/KodiaSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kodia Al-Mustaqbal | Diversified Iraqi Company" },
      {
        name: "description",
        content:
          "Kodia Al-Mustaqbal is a Baghdad-based diversified Iraqi company in contracting, real estate, pharmaceutical trade, general trading and investment.",
      },
      { property: "og:title", content: "Kodia Al-Mustaqbal | Diversified Iraqi Company" },
      {
        property: "og:description",
        content:
          "Contracting, real estate, pharmaceutical trade, general trading and strategic business activities across Iraq.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KodiaSite,
});
