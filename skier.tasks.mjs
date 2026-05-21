// @ts-check
import fs from 'fs';
import {
    prepareOutputTask,
    bundleCssTask,
    copyStaticTask,
    generatePagesTask,
    generateSitemapTask,
} from 'skier';

const cacheHash = Date.now().toString(36);

// ── Load content from JSON ──
const site = JSON.parse(fs.readFileSync('./content/settings/site.json', 'utf-8'));

/** @param {string} name */
const loadPage = (name) => JSON.parse(fs.readFileSync(`./content/pages/${name}.json`, 'utf-8'));

const pages = {
    home: loadPage('home'),
};

// ── SEO metadata ──
/** @type {Record<string, {title: string, description: string}>} */
const pageMeta = {
    index: {
        title: `${site.name} | Personal Training · Bootcamp · Run Club | Bingham`,
        description: `Dean Michniew — ${site.qualification} & ${site.specialty} based in ${site.location_base}. 1-to-1 PT at IronHQ, Thursday Bootcamp at Bingham RUFC, and the free Sunday Running Club.`,
    },
    404: {
        title: `Page Not Found | ${site.name}`,
        description: 'The page you were looking for could not be found.',
    },
};

export const tasks = [
    // Clean & create output directory
    prepareOutputTask({
        outDir: './public',
    }),

    // Bundle and minify CSS
    bundleCssTask({
        from: './assets/styles',
        to: './public',
        output: `styles.min.${cacheHash}.css`,
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
            const meta = pageMeta[currentPage] || pageMeta['404'];
            const pageContent = pages['home'] || {};
            const slug = currentPage === 'index' ? '' : currentPage;

            return {
                // SEO
                metaTitle: meta.title,
                metaDescription: meta.description,
                pageTitle: meta.title,
                canonicalUrl: `https://dmmichthecoach.co.uk/${slug}`,
                pageSlug: slug,
                noindex: currentPage === '404',
                // Site-wide shared values
                cacheHash,
                site,
                // Page-specific content
                content: pageContent,
                // Nav flags (unused now but kept for partials compatibility)
                isHome: currentPage === 'index',
                year: new Date().getFullYear(),
            };
        },
    }),

    // Generate sitemap
    generateSitemapTask({
        siteUrl: 'https://dmmichthecoach.co.uk',
        outDir: './public',
        scanDir: './public',
        excludes: ['admin/**'],
    }),
];
