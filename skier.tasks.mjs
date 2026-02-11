// @ts-check
import fs from 'fs';
import {
    prepareOutputTask,
    bundleCssTask,
    copyStaticTask,
    generatePagesTask,
    generateSitemapTask,
} from 'skier';

// ── Load content from JSON ──
const site = JSON.parse(fs.readFileSync('./content/settings/site.json', 'utf-8'));

/** @param {string} name */
const loadPage = (name) => JSON.parse(fs.readFileSync(`./content/pages/${name}.json`, 'utf-8'));

const pages = {
    home: loadPage('home'),
    about: loadPage('about'),
    services: loadPage('services'),
    'running-club': loadPage('running-club'),
    locations: loadPage('locations'),
    transformations: loadPage('transformations'),
    contact: loadPage('contact'),
};

// ── SEO metadata (per page, referencing site.json) ──
/** @type {Record<string, {title: string, description: string}>} */
const pageMeta = {
    index: {
        title: `${site.name} | Personal Trainer Bingham | Functional Fitness`,
        description: `I'm Dean — a ${site.qualification} and ${site.specialty} based in ${site.location_base}. ${site.tagline}`,
    },
    about: {
        title: `About Me | ${site.name}`,
        description: `I'm Dean M Michniew — a ${site.qualification} passionate about functional fitness and sustainable progress. Not chasing aesthetics, but health.`,
    },
    services: {
        title: `My Services | Personal Training & Online Coaching | ${site.name}`,
        description: `I offer personal training in Bingham and Grantham, plus online coaching. All my clients get Hevy Pro app access. From £30/session.`,
    },
    'running-club': {
        title: `Bingham Sunday Running Club | ${site.name}`,
        description: `I founded the Bingham Sunday Running Club — a social running and walking group for all abilities. Join us every Sunday morning in Bingham.`,
    },
    locations: {
        title: `Where I Train | ${site.name}`,
        description: `I train at ${site.locations.map(l => l.name).join(' and ')}. Flexible locations across Nottinghamshire — let's find what works for you.`,
    },
    contact: {
        title: `Contact Me | ${site.name}`,
        description: `Get in touch to start your fitness journey. I'd love to hear from you — personal training enquiries, running club info, and more.`,
    },
    transformations: {
        title: `Client Transformations | ${site.name}`,
        description: `Real results from real people. See how my clients have improved their health, fitness, and confidence through functional training with me.`,
    },
    404: {
        title: `Page Not Found | ${site.name}`,
        description: 'The page you were looking for could not be found.',
    },
};

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
            const meta = pageMeta[currentPage] || pageMeta['404'];
            const pageKey = currentPage === 'index' ? 'home' : currentPage;
            const pageContent = pages[pageKey] || {};
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
                site,
                // Page-specific content
                content: pageContent,
                // Active nav flags
                isHome: currentPage === 'index',
                isAbout: currentPage === 'about',
                isServices: currentPage === 'services',
                isRunningClub: currentPage === 'running-club',
                isLocations: currentPage === 'locations',
                isContact: currentPage === 'contact',
                isTransformations: currentPage === 'transformations',
                isTraining: ['services', 'transformations', 'locations'].includes(currentPage),
                is404: currentPage === '404',
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
