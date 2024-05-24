# Spend Ambani's Money

A website that i made purely because i was bored. Although this boredom resulted in me learning
[Typescript](https://typescriptlang.org) and bit of [Zustand](https://zustand-demo.pmnd.rs/) too.
I might implement lazy loading too in future. \
Made using:

-   React + TS (Vitejs)
-   TailwindCSS
-   Zustand

# Contributing

If you'd like to contribute, you can do so by adding new items or improving the code. \
Since this is my first time using Typescript, i would highly like to learn how can i improve the
usage of Typescript in this project. If you can, please take a moment to point out the
mistakes/best practices/better use of TS that i can apply in this project. Open a Pull Request with proper
explanation along with related links to the documentation (if possible). All kinds of criticism
accepted.

For adding new items to the store, follow the instructions below:

-   Do not add NSFW/Gore/Drugs/Substances/Self-harm items. Weapons allowed
-   Do not add partial information. Make sure to provide all the details **WITH its image**
-   No high resolution images, try to scale it down to around 400-500px
-   You can use [remove.bg](https://remove.bg/) to remove background from images. It is free to use and the
    free plan will already scale down the image. Limitation turned into a feature.
-   Format the code using `npm run format` command.
-   Add new items as instructed below

**Instructions:**

1. Add new products to the `src/product-list.ts` file.
2. Try to use the latest version and information of that product you are adding.
3. Make sure to use images that clearly show the item.
4. Prepare all the images: Create a temporary directory somewhere outside the project (Ex: `Images`) to keep all your base images there. Create a sub directory inside it. (Ex: `output`)
   You should have a directory structure like this:

```
Images
├── output/
├── image1.png
├── image2.png
├── image3.png
└── image4.png
```

5. If you are on a linux or a mac machine, run this shell one-liner to compress all the images to `.webp`
   format using the `cwebp` tool (install it if you don't have it). You'll have to figure out how to do
   the same on windows.

```bash
$ for i in *.png; do cwebp $i -o "output/`echo $i | sed 's/\.png/\.webp/g'`"; done;
```

6. The directory structure should now look like this:

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

7. Finally copy all images from `output/` to the `src/public/img/products/` directory.
8. Verify the changes by running `npm run dev`.
9. Submit a PR, and done
