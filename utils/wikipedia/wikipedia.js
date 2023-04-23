import fetch from "node-fetch"

export async function getWikipediaPage(title) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}?redirect=false`
    const r = await fetch( url,
        {
            headers: {
                'Content-Type': 'application/json',
                'charset':'utf-8',
                'profile':'https://www.mediawiki.org/wiki/Specs/Summary/1.4.2'
            }
        }
    );
    return r
}