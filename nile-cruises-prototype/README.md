# ViaMondo Nile Cruises Prototype

A lightweight front-end prototype for the ViaMondo Nile Cruises journey, built with plain HTML, CSS and JavaScript.

## Structure

- `index.html` — itinerary selection screen
- `journey.html` — animated Nile journey page
- `listing.html` — cruise listing page with modal and lightbox
- `styles.css` — all design styling and responsive behavior
- `app.js` — shared itinerary, animation, listing, modal and lightbox logic

## Run locally

Because this is a static frontend, you can open the files directly in a browser or serve the folder with a local web server:

```bash
cd nile-cruises-prototype
python -m http.server 8000
```

Then open:

- http://localhost:8000/index.html
- http://localhost:8000/journey.html?id=aswan-luxor
- http://localhost:8000/listing.html

## Notes

- The experience is built as a front-end prototype with no backend dependency.
- The itinerary and cruise data are stored in `app.js` for easy future extension.
- The landmarks are custom SVG illustrations created in-browser rather than using real photographs.
- The selected itinerary is persisted in `localStorage` so the visitor can move between the journey and cruise listing without losing context.
