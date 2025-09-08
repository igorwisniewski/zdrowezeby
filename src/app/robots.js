// app/robots.js

export default function robots() {
    // UWAGA: Zmień ten adres na adres URL swojej strony!
    const baseUrl = 'https://magiazdrowegousmiechu.pl';

    return {
        rules: {
            userAgent: '*',      // Dotyczy wszystkich robotów (np. Googlebot)
            allow: '/',          // Zezwól na indeksowanie całej strony
        },
        sitemap: `${baseUrl}/sitemap.xml`, // Wskazuje robotom, gdzie znaleźć mapę strony
    };
}