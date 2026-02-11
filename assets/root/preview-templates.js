/**
 * Decap CMS Preview Templates
 *
 * Mirrors the Handlebars page templates so the CMS preview pane
 * renders content with the same HTML structure as the live site.
 * The site stylesheet is registered separately in admin/index.html.
 */

/* global CMS, createClass, h */

// ── Helpers ──────────────────────────────────────────────────────

/** Read a simple field value, with fallback */
function f(entry, path, fallback) {
    var val = entry.getIn(['data'].concat(path.split('.')));
    if (val && typeof val.toJS === 'function') return val.toJS();
    return val || fallback || '';
}

/** Read a list field and return a plain JS array */
function fList(entry, path) {
    var val = entry.getIn(['data'].concat(path.split('.')));
    if (!val) return [];
    return typeof val.toJS === 'function' ? val.toJS() : Array.from(val);
}

// ── Shared Fragments ────────────────────────────────────────────

function PageHeader(heading, headingAccent, subtitle) {
    return h('section', { className: 'page-header' },
        h('div', { className: 'container' },
            h('h1', {}, heading, ' ', h('span', {}, headingAccent)),
            subtitle ? h('p', {}, subtitle) : null
        )
    );
}

function CtaBanner(heading, body, ctaText) {
    return h('section', { className: 'cta-banner' },
        h('div', { className: 'container' },
            h('h2', {}, heading),
            h('p', {}, body),
            h('a', { href: '#', className: 'btn' }, ctaText)
        )
    );
}

function SectionHeading(heading, accent) {
    return h('h2', { className: 'section__heading' },
        heading, ' ', h('span', {}, accent)
    );
}

// ── Homepage ────────────────────────────────────────────────────

var HomePreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('main', {},
            // Hero
            h('section', { className: 'hero', style: { minHeight: '60vh' } },
                h('div', { className: 'hero__bg', style: { backgroundImage: "url('/images/hero-bg.png')" } }),
                h('div', { className: 'hero__content' },
                    h('h1', { className: 'hero__title' },
                        f(entry, 'hero.title_line1'), h('br'), h('span', { className: 'accent' }, f(entry, 'hero.title_line2'))
                    ),
                    h('p', { className: 'hero__subtitle' }, f(entry, 'hero.subtitle')),
                    h('a', { href: '#', className: 'btn btn--primary' }, f(entry, 'hero.cta_text'))
                )
            ),

            // About
            h('section', { className: 'section', id: 'about' },
                h('div', { className: 'container' },
                    SectionHeading(f(entry, 'about.heading'), f(entry, 'about.heading_accent')),
                    h('div', { className: 'about-grid' },
                        h('div', { className: 'about-image' },
                            h('img', { src: '/images/dean-portrait.jpg', alt: 'Dean M Michniew' })
                        ),
                        h('div', { className: 'about-text' },
                            h('p', {}, f(entry, 'about.intro')),
                            h('p', {}, f(entry, 'about.body')),
                            h('blockquote', { className: 'pullquote' }, '"', f(entry, 'about.pullquote'), '"'),
                            h('p', { dangerouslySetInnerHTML: { __html: f(entry, 'about.running_club_note') } }),
                            h('a', { href: '#', className: 'btn btn--outline' }, f(entry, 'about.cta_text'))
                        )
                    )
                )
            ),

            // Testimonials
            h('section', { className: 'section section--alt', id: 'testimonials' },
                h('div', { className: 'container' },
                    SectionHeading(f(entry, 'testimonials.heading'), f(entry, 'testimonials.heading_accent')),
                    h('div', { className: 'testimonials-grid' },
                        fList(entry, 'testimonials.items').map(function (item, i) {
                            return h('div', { className: 'testimonial-card', key: i },
                                h('div', { className: 'testimonial-card__stars' }, item.stars),
                                h('p', { className: 'testimonial-card__quote' }, item.quote),
                                h('p', { className: 'testimonial-card__name' }, item.name)
                            );
                        })
                    )
                )
            ),

            // Services
            h('section', { className: 'section', id: 'services' },
                h('div', { className: 'container' },
                    SectionHeading(f(entry, 'services.heading'), f(entry, 'services.heading_accent')),
                    h('div', { className: 'services-grid' },
                        fList(entry, 'services.cards').map(function (card, i) {
                            return h('div', { className: 'service-card', key: i },
                                h('h3', { className: 'service-card__title' }, card.title),
                                h('p', { className: 'service-card__desc' }, card.desc),
                                h('p', { className: 'service-card__price' }, card.price),
                                h('ul', { className: 'service-card__features' },
                                    (card.features || []).map(function (feat, j) {
                                        return h('li', { key: j }, feat);
                                    })
                                ),
                                h('a', { href: '#', className: 'btn btn--outline' }, card.cta_text)
                            );
                        })
                    )
                )
            ),

            // Running Club
            h('section', { className: 'section section--alt', id: 'running-club' },
                h('div', { className: 'container' },
                    SectionHeading(f(entry, 'running_club.heading'), f(entry, 'running_club.heading_accent')),
                    h('div', { className: 'running-club' },
                        h('div', { className: 'running-club__image' },
                            h('img', { src: '/images/running-club.png', alt: 'Bingham Sunday Running Club' })
                        ),
                        h('div', { className: 'running-club__info' },
                            h('h3', {}, f(entry, 'running_club.subheading')),
                            h('p', {}, f(entry, 'running_club.body')),
                            h('div', { className: 'running-club__detail' },
                                h('div', { className: 'running-club__detail-item' },
                                    h('strong', {}, f(entry, 'running_club.time')),
                                    f(entry, 'running_club.time_detail')
                                ),
                                h('div', { className: 'running-club__detail-item' },
                                    h('strong', {}, f(entry, 'running_club.location')),
                                    f(entry, 'running_club.location_detail')
                                )
                            ),
                            h('a', { href: '#', className: 'btn btn--primary' }, f(entry, 'running_club.cta_text'))
                        )
                    )
                )
            ),

            // Transformations
            h('section', { className: 'section', id: 'transformations' },
                h('div', { className: 'container' },
                    SectionHeading(f(entry, 'transformations.heading'), f(entry, 'transformations.heading_accent')),
                    h('div', { className: 'transformations-grid transformations-grid--stories' },
                        fList(entry, 'transformations.items').map(function (item, i) {
                            return h('div', { className: 'transformation-card', key: i },
                                h('div', { className: 'transformation-card__body' },
                                    h('h3', { className: 'transformation-card__name' }, item.name),
                                    h('p', { className: 'transformation-card__story' }, item.story)
                                )
                            );
                        })
                    ),
                    h('div', { className: 'text-center', style: { marginTop: '2.5rem' } },
                        h('a', { href: '#', className: 'btn btn--outline' }, f(entry, 'transformations.cta_text'))
                    )
                )
            ),

            // Gallery heading only (images are static)
            h('section', { className: 'section', id: 'gallery' },
                h('div', { className: 'container' },
                    h('h2', { className: 'section__heading' },
                        h('span', {}, f(entry, 'gallery.heading_accent'))
                    ),
                    h('p', { className: 'text-center text-muted' }, '(Gallery images shown on live site)')
                )
            ),

            // CTA Banner
            CtaBanner(
                f(entry, 'cta.heading'),
                f(entry, 'cta.body'),
                f(entry, 'cta.cta_text')
            )
        );
    }
});

// ── About Page ──────────────────────────────────────────────────

var AboutPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('main', {},
            PageHeader(
                f(entry, 'header.heading'),
                f(entry, 'header.heading_accent'),
                f(entry, 'header.subtitle')
            ),
            h('section', { className: 'section' },
                h('div', { className: 'container content-block' },
                    h('div', { className: 'about-grid', style: { marginBottom: '4rem' } },
                        h('div', { className: 'about-image' },
                            h('img', { src: '/images/dean-portrait.jpg', alt: 'Dean M Michniew' })
                        ),
                        h('div', { className: 'about-text' },
                            h('p', {}, f(entry, 'intro.body')),
                            h('blockquote', { className: 'pullquote' }, '"', f(entry, 'intro.pullquote'), '"'),
                            h('p', { dangerouslySetInnerHTML: { __html: f(entry, 'intro.body_2') } })
                        )
                    ),

                    h('h2', {}, f(entry, 'functional_fitness.heading')),
                    h('p', {}, f(entry, 'functional_fitness.body')),
                    h('p', {}, f(entry, 'functional_fitness.body_2')),

                    h('h2', {}, f(entry, 'qualifications.heading')),
                    h('ul', {},
                        fList(entry, 'qualifications.items').map(function (item, i) {
                            return h('li', { key: i }, item);
                        })
                    ),

                    h('h2', {}, f(entry, 'philosophy.heading')),
                    h('p', {}, f(entry, 'philosophy.body')),
                    h('p', { dangerouslySetInnerHTML: { __html: f(entry, 'philosophy.hevy_note') } }),

                    h('div', { className: 'feature-highlight' },
                        h('h3', {}, f(entry, 'highlight.heading')),
                        h('p', {}, f(entry, 'highlight.body'))
                    )
                )
            ),
            CtaBanner(
                f(entry, 'cta.heading'),
                f(entry, 'cta.body'),
                f(entry, 'cta.cta_text')
            )
        );
    }
});

// ── Services Page ───────────────────────────────────────────────

var ServicesPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('main', {},
            PageHeader(
                f(entry, 'header.heading'),
                f(entry, 'header.heading_accent'),
                f(entry, 'header.subtitle')
            ),
            h('section', { className: 'section' },
                h('div', { className: 'container' },
                    h('div', { className: 'services-grid' },
                        fList(entry, 'cards').map(function (card, i) {
                            return h('div', { className: 'service-card', key: i },
                                h('h3', { className: 'service-card__title' }, card.title),
                                h('p', { className: 'service-card__desc' }, card.desc),
                                h('p', { className: 'service-card__price' }, card.price),
                                h('ul', { className: 'service-card__features' },
                                    (card.features || []).map(function (feat, j) {
                                        return h('li', { key: j }, feat);
                                    })
                                )
                            );
                        })
                    )
                )
            ),
            h('section', { className: 'section section--alt' },
                h('div', { className: 'container content-block' },
                    h('h2', {}, f(entry, 'what_to_expect.heading')),
                    h('p', {}, f(entry, 'what_to_expect.body')),

                    h('h2', {}, f(entry, 'hevy.heading')),
                    h('div', { className: 'feature-highlight' },
                        h('h3', {}, f(entry, 'hevy.highlight_heading')),
                        h('p', {}, f(entry, 'hevy.highlight_body'))
                    ),

                    h('h2', {}, f(entry, 'faq.heading')),
                    fList(entry, 'faq.items').map(function (item, i) {
                        return h('div', { key: i },
                            h('h3', { style: { fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' } }, item.question),
                            h('p', {}, item.answer)
                        );
                    })
                )
            ),
            CtaBanner(
                f(entry, 'cta.heading'),
                f(entry, 'cta.body'),
                f(entry, 'cta.cta_text')
            )
        );
    }
});

// ── Running Club Page ───────────────────────────────────────────

var RunningClubPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('main', {},
            PageHeader(
                f(entry, 'header.heading'),
                f(entry, 'header.heading_accent'),
                f(entry, 'header.subtitle')
            ),
            h('section', { className: 'section' },
                h('div', { className: 'container' },
                    h('div', { className: 'running-club' },
                        h('div', { className: 'running-club__image' },
                            h('img', { src: '/images/running-club.png', alt: 'Bingham Sunday Running Club' })
                        ),
                        h('div', { className: 'running-club__info' },
                            h('h3', {}, f(entry, 'intro.subheading')),
                            h('p', {}, f(entry, 'intro.body')),
                            h('p', {}, f(entry, 'intro.body_2')),
                            h('div', { className: 'running-club__detail' },
                                h('div', { className: 'running-club__detail-item' },
                                    h('strong', {}, f(entry, 'intro.time')),
                                    f(entry, 'intro.time_detail')
                                ),
                                h('div', { className: 'running-club__detail-item' },
                                    h('strong', {}, f(entry, 'intro.location')),
                                    f(entry, 'intro.location_detail')
                                ),
                                h('div', { className: 'running-club__detail-item' },
                                    h('strong', {}, f(entry, 'intro.cost')),
                                    f(entry, 'intro.cost_detail')
                                )
                            )
                        )
                    )
                )
            ),
            h('section', { className: 'section section--alt' },
                h('div', { className: 'container content-block' },
                    h('h2', {}, f(entry, 'what_to_expect.heading')),
                    h('p', {}, f(entry, 'what_to_expect.body')),
                    h('p', {}, f(entry, 'what_to_expect.body_2')),

                    h('h2', {}, f(entry, 'abilities.heading')),
                    h('ul', {},
                        fList(entry, 'abilities.items').map(function (item, i) {
                            return h('li', { key: i }, item);
                        })
                    ),

                    h('h2', {}, f(entry, 'social.heading')),
                    h('p', { dangerouslySetInnerHTML: { __html: f(entry, 'social.body') } }),
                    h('div', { style: { marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' } },
                        h('a', { href: '#', className: 'btn btn--outline' }, f(entry, 'social.instagram_text')),
                        h('a', { href: '#', className: 'btn btn--outline' }, f(entry, 'social.facebook_text'))
                    )
                )
            ),
            CtaBanner(
                f(entry, 'cta.heading'),
                f(entry, 'cta.body'),
                f(entry, 'cta.cta_text')
            )
        );
    }
});

// ── Locations Page ──────────────────────────────────────────────

var LocationsPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('main', {},
            PageHeader(
                f(entry, 'header.heading'),
                f(entry, 'header.heading_accent'),
                f(entry, 'header.subtitle')
            ),
            h('section', { className: 'section' },
                h('div', { className: 'container' },
                    h('p', { className: 'text-center text-muted' }, '(Location cards are driven from Site Settings — shown on live site)')
                )
            ),
            h('section', { className: 'section section--alt' },
                h('div', { className: 'container content-block' },
                    h('h2', {}, f(entry, 'flexible.heading')),
                    h('p', {}, f(entry, 'flexible.body')),
                    h('p', {}, f(entry, 'flexible.body_2')),
                    h('div', { style: { marginTop: '1.5rem' } },
                        h('a', { href: '#', className: 'btn btn--outline' }, f(entry, 'flexible.cta_text'))
                    )
                )
            ),
            CtaBanner(
                f(entry, 'cta.heading'),
                f(entry, 'cta.body'),
                f(entry, 'cta.cta_text')
            )
        );
    }
});

// ── Transformations Page ────────────────────────────────────────

var TransformationsPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('main', {},
            PageHeader(
                f(entry, 'header.heading'),
                f(entry, 'header.heading_accent'),
                f(entry, 'header.subtitle')
            ),
            h('section', { className: 'section' },
                h('div', { className: 'container' },
                    h('div', { className: 'transformations-grid' },
                        fList(entry, 'items').map(function (item, i) {
                            return h('div', { className: 'transformation-card', key: i },
                                h('div', { className: 'transformation-card__body' },
                                    h('h3', { className: 'transformation-card__name' }, item.name),
                                    h('p', { className: 'transformation-card__story' }, item.story)
                                )
                            );
                        })
                    )
                )
            ),
            CtaBanner(
                f(entry, 'cta.heading'),
                f(entry, 'cta.body'),
                f(entry, 'cta.cta_text')
            )
        );
    }
});

// ── Contact Page ────────────────────────────────────────────────

var ContactPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('main', {},
            PageHeader(
                f(entry, 'header.heading'),
                f(entry, 'header.heading_accent'),
                f(entry, 'header.subtitle')
            ),
            h('section', { className: 'section' },
                h('div', { className: 'container' },
                    h('div', { className: 'contact-grid' },
                        h('div', {},
                            h('h2', {
                                style: {
                                    fontFamily: 'var(--font-heading)',
                                    textTransform: 'uppercase',
                                    fontSize: '1.5rem',
                                    marginBottom: '1.5rem'
                                }
                            }, f(entry, 'get_in_touch.heading')),
                            h('ul', { className: 'contact-methods' },
                                h('li', {}, h('strong', {}, 'Email'), ' dean@dmmichthecoach.co.uk'),
                                h('li', {}, h('strong', {}, 'Instagram'), ' @DMMichTheCoach'),
                                h('li', {}, h('strong', {}, 'Facebook'), ' DMMichTheCoach')
                            ),
                            h('h2', {
                                style: {
                                    fontFamily: 'var(--font-heading)',
                                    textTransform: 'uppercase',
                                    fontSize: '1.5rem',
                                    marginTop: '4rem',
                                    marginBottom: '1.5rem'
                                }
                            }, f(entry, 'locations_heading'))
                        ),
                        h('div', { className: 'contact-cta' },
                            h('h3', {}, f(entry, 'ready.heading')),
                            h('p', {}, f(entry, 'ready.body')),
                            h('a', {
                                href: '#',
                                className: 'btn btn--primary',
                                style: { fontSize: '1.3rem', padding: '1.1rem 3rem' }
                            }, f(entry, 'ready.cta_text')),
                            h('p', {
                                className: 'text-muted',
                                style: { marginTop: '1.5rem', fontSize: '0.85rem' }
                            }, f(entry, 'ready.footnote'))
                        )
                    )
                )
            ),
            CtaBanner(
                f(entry, 'cta.heading'),
                f(entry, 'cta.body'),
                f(entry, 'cta.cta_text')
            )
        );
    }
});

// ── Site Settings ───────────────────────────────────────────────

var SiteSettingsPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        return h('div', { style: { padding: '2rem' } },
            h('h1', {}, f(entry, 'name')),
            h('p', { className: 'hero__subtitle' }, f(entry, 'tagline')),
            h('div', { className: 'feature-highlight', style: { marginTop: '2rem' } },
                h('h3', {}, 'Contact Details'),
                h('ul', { style: { listStyle: 'none', padding: 0 } },
                    h('li', {}, '📧 ', f(entry, 'email')),
                    h('li', {}, '📷 ', f(entry, 'instagram_handle')),
                    h('li', {}, '📘 ', f(entry, 'facebook_name'))
                )
            ),
            h('div', { style: { marginTop: '2rem' } },
                h('p', {}, f(entry, 'qualification')),
                h('p', {}, f(entry, 'specialty')),
                h('p', {}, 'Based in ', f(entry, 'location_base'))
            )
        );
    }
});

// ── Register All Templates ──────────────────────────────────────

CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('about', AboutPreview);
CMS.registerPreviewTemplate('services', ServicesPreview);
CMS.registerPreviewTemplate('running-club', RunningClubPreview);
CMS.registerPreviewTemplate('locations', LocationsPreview);
CMS.registerPreviewTemplate('transformations', TransformationsPreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.registerPreviewTemplate('site', SiteSettingsPreview);
