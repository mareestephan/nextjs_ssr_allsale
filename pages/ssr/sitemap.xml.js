import React from 'react';


const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
        .map(({ slug }) => {
            return `
                    <url>
                        <loc>${`https://www.allsale.co.za/ssr/${slug}`}</loc>
                    </url>
                `;
        })
        .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        const request = await fetch('http://35.190.35.153/api/pages-to-create/list/all-sale');
        const posts = await request.json();

        res.setHeader('Content-Type', 'text/xml');
        res.write(createSitemap(posts));
        res.end();
    }
}

export default Sitemap;