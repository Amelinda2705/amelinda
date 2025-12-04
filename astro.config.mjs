import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Inter",
                cssVariable: "--font-inter",
            },
            {
                provider: fontProviders.google(),
                name: "Fraunces",
                cssVariable: "--font-fraunces",
                weights: [
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
            },
        ],
    },
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
