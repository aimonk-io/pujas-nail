# New Layout Structure Based on Mockup

The mockup shows a completely different structure than what I implemented:

## Mockup Structure:

1. **Container**: max-w-[1200px] centered with px-6 py-12
2. **Header**: Logo (circle with "P") + name, navigation with Book Now button
3. **Hero Section**: 
   - Left (col-span-7): Heading + description + buttons + bullet points
   - Right (col-span-5): 2x2 image grid
4. **Gallery/Collections**: 12-col grid with colored cards
5. **About Section**: Side-by-side with text and image
6. **Service Packages**: 3 cards in a row
7. **Testimonials**: 3 quotes
8. **Footer**: Contact information

## Key Differences from Current:

1. **Layout**: Grid-based (not full-width sections)
2. **Spacing**: Much more compact (py-12, px-6)
3. **Colors**: Specific palette (deepRed, emerald, espresso, royal, champagne)
4. **Typography**: font-playfair for headings
5. **Content order**: Different section arrangement
6. **Hero**: Content on left, images on right in grid
7. **No separate sections**: Everything in one flow within a container

## Color Palette from Mockup:

```javascript
const palette = {
  deepRed: "#7b0d15",
  emerald: "#0f4d3f",
  espresso: "#4a2f24",
  royal: "#0529b8",
  champagne: "#e9d9c8",
  softBlack: "#0b0b0c",
  mutedGold: "#b8915f",
};
```

## Fonts:

- Headings: font-playfair (serif)
- Body: Regular sans-serif

