/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    i18n: {
      locales: ['en-GB', 'fr', 'nl-NL'],
      defaultLocale: 'en-GB',
    },
  }