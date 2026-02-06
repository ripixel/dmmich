// @ts-check
import {
    prepareOutputTask,
    bundleCssTask,
    copyStaticTask,
    generatePagesTask,
    generateSitemapTask,
} from 'skier';

/** @type {Record<string, {title: string, description: string}>} */
const pageMeta = {
    index: {
        title: 'DMMich The Coach | Personal Trainer Bingham | Functional Fitness',
        description: 'Dean M Michniew — Level 3 Personal Trainer and Functional Fitness Coach based in Bingham, Nottinghamshire. Train. Progress. Succeed.',
    },
    about: {
        title: 'About Dean M Michniew | DMMich The Coach',
        description: 'Meet Dean M Michniew — a Level 3 qualified Personal Trainer passionate about functional fitness, health, and sustainable progress. Not chasing aesthetics, but health.',
    },
    services: {
        title: 'Personal Training & Online Coaching | DMMich The Coach',
        description: 'Personal training sessions in Bingham and Grantham, plus online coaching. All clients get Hevy Pro app access. From £30/session.',
    },
    'running-club': {
        title: 'Bingham Sunday Running Club | DMMich The Coach',
        description: 'Join the Bingham Sunday Running Club — a social running and walking group for all abilities. Every Sunday morning in Bingham, Nottinghamshire.',
    },
    locations: {
        title: 'Training Locations | DMMich The Coach',
        description: 'Train with Dean at Iron HQ in Bingham or Frontline Fitness in Grantham. Flexible locations across Nottinghamshire.',
    },
    contact: {
        title: 'Contact DMMich The Coach | Get In Touch',
        description: 'Get in touch with Dean M Michniew to start your fitness journey. Personal training enquiries, running club info, and more.',
    },
    transformations: {
        title: 'Client Transformations | DMMich The Coach',
        description: 'Real results from real people. See how Dean\'s clients have improved their health, fitness, and confidence through functional training.',
    },
    404: {
        title: 'Page Not Found | DMMich The Coach',
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
            return {
                metaTitle: meta.title,
                metaDescription: meta.description,
                pageTitle: meta.title,
                isHome: currentPage === 'index',
                isAbout: currentPage === 'about',
                isServices: currentPage === 'services',
                isRunningClub: currentPage === 'running-club',
                isLocations: currentPage === 'locations',
                isContact: currentPage === 'contact',
                isTransformations: currentPage === 'transformations',
                is404: currentPage === '404',
                year: new Date().getFullYear(),
            };
        },
    }),

    // Generate sitemap
    generateSitemapTask({
        siteUrl: 'https://dmmichthecoach.com',
        outDir: './public',
        scanDir: './public',
    }),
];
