// app/sitemap.js

export default function sitemap() {
    // UWAGA: Zmień ten adres na adres URL swojej strony!
    const baseUrl = 'https://magiazdrowegousmiechu.pl';

    // Lista wszystkich podstron, które chcesz, aby Google zaindeksowało
    const staticPages = [
        '/',
        '/onas',
        '/uslugi',
        '/fundacja',
        '/kontakt',
        '/polityka-prywatnosci',
    ];

    const pageUrls = staticPages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(), // Automatycznie ustawia dzisiejszą datę
    }));

    return [
        ...pageUrls,
    ];
}