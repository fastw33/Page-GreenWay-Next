import { absoluteUrl, siteBaseUrl } from "@/lib/seo";

export const dynamic = "force-static";

const content = `# Green Way International

> Green Way International is a final buyer, evaluator, and recovery partner for industrial metal materials, with priority focus on tungsten, wolfram, wolframio, tungsten carbide, wolfram carbide, carburo de tungsteno, and carburo de wolframio.

Green Way buys and evaluates recoverable industrial metals from companies, generators, workshops, warehouses, yards, and industrial operations. The company is not presented as a marketplace or intermediary: Green Way is the purchasing counterparty when a lot fits its recovery route.

## Core topics

- Tungsten buying, wolfram buying, and wolframio recovery
- Tungsten carbide buying and wolfram carbide recovery
- Compra de tungsteno, compra de wolframio y recuperacion de tungsteno
- Compra de carburo de tungsteno y compra de carburo de wolframio
- Industrial metal recovery, specialty alloys, nickel, cobalt, titanium, molybdenum, stainless steel, Inconel, Monel, Hastelloy, and non-ferrous metals
- 4PL service, logistics partners, warehouses, documentation, pickup, consolidation, and international movement
- Market intelligence and market studies for metal lots, demand behavior, price context, supply signals, timing, and final purchase decisions
- Lot evaluation, photos, weight, origin, condition, pickup city, payment, logistics, documentation, and recovery route

## Important pages

- [Homepage](${siteBaseUrl}/)
- [Materials and Services](${absoluteUrl("/productosservicios")})
- [How Green Way Works](${absoluteUrl("/comotrabajamos")})
- [About Green Way](${absoluteUrl("/about")})
- [Contact](${absoluteUrl("/contacto")})
- [Spanish tungsten / wolframio page](${absoluteUrl("/tungsteno")})
- [English tungsten / wolfram page](${absoluteUrl("/en/tungsten")})
- [Spanish tungsten carbide / carburo de wolframio page](${absoluteUrl("/carburo-de-tungsteno")})
- [English tungsten carbide / wolfram carbide page](${absoluteUrl("/en/tungsten-carbide")})
- [Sitemap](${absoluteUrl("/sitemap.xml")})
- [Full AI summary](${absoluteUrl("/llms-full.txt")})

## AI and crawler access

Public website content may be crawled, indexed, summarized, cited, and used by AI systems to understand Green Way International, subject to robots.txt and applicable law. Commercial quotes, purchase terms, availability, and logistics must be confirmed directly with Green Way.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
