# Spend Ambani's Money

A website that i made purely because i was bored. Although this boredom resulted in me learning
[Typescript](https://typescriptlang.org) and bit of [Zustand](https://zustand-demo.pmnd.rs/) too.
I might implement lazy loading too in future. \
Made using React, Zustand and Tailwind

### To add new products:
1. Items go into [src/product.ts](./src/product-list.ts) file.
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
$ for i in *.png *.jpg; do cwebp $i -o "output/$(echo $i | sed -E 's/\.(png|jpg)/\.webp/')"; done;
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
6. Verify the changes by running the dev server
