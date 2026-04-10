# petrmikeska.cz — Portfolio

Osobní portfolio web Petra Mikesky. Single-page React aplikace s vícejazyčnou podporou (CZ/EN).

## Tech Stack

| Kategorie | Technologie |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build** | Vite 6 (SWC) |
| **Styling** | Tailwind CSS v4 |
| **Komponenty** | shadcn/ui (New York style) |
| **Ikony** | Lucide React |
| **Fonty** | Space Grotesk (sans), Instrument Serif |

## Příkazy

```bash
npm run dev       # dev server na http://localhost:5173
npm run build     # TypeScript check + Vite produkční build
npm run lint      # ESLint
npm run preview   # náhled produkčního buildu
```

## Struktura projektu

```
src/
  components/
    sections/     # sekce stránky (hero, experience, projects, ...)
    ui/           # shadcn/ui komponenty
  data/
    content.ts    # veškerý obsah webu (CZ)
    content.en.ts # veškerý obsah webu (EN)
  hooks/          # use-content (přepínání jazyka)
  pages/
    v1-original.tsx  # hlavní stránka
  index.css       # Tailwind v4 + custom design tokeny
```

## Obsah a data

Veškerý text, zkušenosti, projekty a dovednosti jsou v `src/data/content.ts` (CZ) a `src/data/content.en.ts` (EN). Žádná API volání ani state management — sekce importují data přímo.

## Design tokeny (Tailwind v4)

Definované v `src/index.css` pod `@theme inline`:

- `topo` — primární zelená akcentová barva
- `terracotta` — sekundární oranžová
- `hero-bg` / `hero-text` — tmavá hero paleta
- `parchment-dark` — off-white pozadí sekcí

## Konvence

- Kebab-case názvy souborů (`experience-section.tsx`)
- `.ts` pro non-JSX, `.tsx` pouze při vracení JSX
- Žádné `any` typy (ESLint error)
- Path alias `@/` → `src/`

## Certifikáty

PDF soubory certifikátů jsou v `public/certifikaty/`. Cesty jsou referencovány v `content.ts` pod polem `pdfUrl`.
