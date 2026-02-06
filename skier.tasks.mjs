// @ts-check
import {
    prepareOutputTask,
    bundleCssTask,
    copyStaticTask,
    generatePagesTask,
} from 'skier';

export const tasks = [
    // Clean & Create output directory
    prepareOutputTask({
        outDir: './public',
    }),

    // Bundle and minify CSS
    bundleCssTask({
        from: './assets/styles',
        to: './public',
        output: 'styles.min.css',
        minify: true,
    }),

    // Copy static images
    copyStaticTask({
        from: './assets/images',
        to: './public/images',
    }),

    // Copy root assets (robots.txt, config.yml, etc.)
    copyStaticTask({
        from: './assets/root',
        to: './public',
    }),

    // Copy admin folder for Decap CMS
    copyStaticTask({
        from: './admin',
        to: './public/admin',
    }),

    // Generate HTML pages
    generatePagesTask({
        pagesDir: './pages',
        partialsDir: './partials',
        outDir: './public',
        additionalVarsFn: ({ currentPage }) => {
            const pageName = currentPage === 'index' ? 'home' : currentPage;
            return {
                pageTitle: pageName.charAt(0).toUpperCase() + pageName.slice(1),
                isHome: currentPage === 'index',
                is404: currentPage === '404',
            };
        },
    }),
];
