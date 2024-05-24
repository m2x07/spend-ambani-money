# Spend Ambani's Money

A website that i made purely because i was bored. Although this boredom resulted in me learning
[Typescript](https://typescriptlang.org) and bit of [Zustand](https://zustand-demo.pmnd.rs/) too.
I might implement lazy loading too in future. \
Made using:

-   React + TS (Vitejs)
-   TailwindCSS
-   Zustand

# Contributing

This is my first time using Typescript. I'd like to know how to write better Typescript so please
let me know of any improvements or mistakes/bad practices that you spot in the code. When submitting
pull requests for improving code, explain why something needs to be changed or atleast provide links
to appropriate documentation.

### Instructions to add new items:

**General things to keep in mind:** \
\- No inappropriate items (NSFW/Gore/etc). \
\- Provide complete information as required by the type definition. \
\- Use images with transparent background whenever possible. Use [remove.bg](https://remove.bg/) \
\- Scale down images to around 250-300px, optional but recommended. No images above 500px

1. Add new products to the `src/product-list.ts` file.
2. Prepare all the images: Create a temporary directory somewhere outside the project (Ex: `Images`) to keep all your base images there. Create a sub directory inside it. (Ex: `output`)
   You should have a directory structure like this:

```
Images
├── output/
├── image1.png
├── image2.png
├── image3.png
└── image4.png
```

3. If you are on a linux or a mac machine, run this shell one-liner to compress all the images to `.webp`
   format using the `cwebp` tool (install it if you don't have it). You'll have to figure out how to do
   the same on windows.

```bash
$ for i in *.png; do cwebp $i -o "output/`echo $i | sed 's/\.png/\.webp/g'`"; done;
```

4. The directory structure should now look like this:

```
Images
├── output
│   ├── image1.webp
│   ├── image2.webp
│   ├── image3.webp
│   └── image4.webp
├── image1.png
├── image2.png
├── image3.png
└── image4.png
```

5. Finally copy all images from `output/` to the `src/public/img/products/` directory.
6. Verify the changes by running `npm run dev`.
7. Submit a PR, and done
