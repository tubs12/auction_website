# Caroline Ackel Auctions — Website

## Adding New Photos to the Carousel & Gallery

Both the carousel and the gallery pull from the same image list. To add a new photo:

1. Copy the image file into **both** of these folders:
   - `images/carousel/`
   - `images/gallery/`

2. Open `script.js` and find the `eventImages` array near the top of the file (it's labeled **IMAGE LIST**). Add the filename as a new entry:

```js
const eventImages = [
    'first.jpeg',
    'image0.jpeg',
    // ... existing images ...
    'your_new_image.jpg'  // ← add it here
];
```

That's it. The carousel and gallery will both update automatically on the next page load.

---

> **Note:** Image filenames are case-sensitive. Make sure the name in the array exactly matches the filename on disk, including the extension (`.jpg`, `.JPG`, `.jpeg`, etc.).
