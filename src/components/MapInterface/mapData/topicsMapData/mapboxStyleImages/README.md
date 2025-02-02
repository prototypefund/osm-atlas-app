# About

**Context:**

Whenever we use **icon images** or **patterns** in Mapbox Studio, we need to manually add them here as well.

**What to do:**

Each of those `IMAGE_ID` …

- needs to be added to [`./images`](./images/) and
- referenced in [`./mapboxStyleImages.ts`](./mapboxStyleImages.ts).

**Image requirements:**

- They need to be `png` images.
- TODO what about size?, use `pixelRatio=2`

# Tooling

Online SVG to PNG converter https://convertio.co/de/svg-png/

# Dev

**Info: Where to finde the image ids:**

- a style layer of `type=symbol` can have a property `layout.icon-image=IMAGE_ID`.
- a style layer of `type=line` can have a property `paint.line-pattern=IMAGE_ID`.
- also `background-pattern`
- also `fill-pattern`

The relevant file is [mapbox-layer-styles-by-group.json](../mapboxStyles/mapbox-layer-styles-by-group.json)

**Docs**

Maplibre Docs are linked in [`useMissingImage.ts`](../../../../MapInterface/Map/utils/useMissingImage.ts)

# Sources

- `bus_stop` – @SupaplexOSM
- `cross` – @SupaplexOSM
- `parking_diagonal` – @SupaplexOSM
- `parking_perpendicular` – @SupaplexOSM
- `sbahn` – https://de.wikipedia.org/wiki/Datei:S-Bahn-Logo.svg
