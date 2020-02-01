const meta = {
  // Metadata
  // Finds usage in gatsby-config, i18n, and SEO component
  siteTitle: 'Template',
  siteShortName: 'Template',
  siteLegalName: 'Template, Inc.',
  siteDescription: 'Template Description',
  siteUrl: 'https://Template.com', // No trailing slash!
}

const contact = {
  phoneFormatted: '+1 (555) 555-5555',
  phoneLink: 'tel:+15555555555',
  emailFormatted: 'info@Template.com',
  emailLink: 'mailto:info@Template.com',
  physicalAddress: 'Template',
}

const social = {
  twitter: '@Template',
  twitterLink: 'https://twitter.com/Template',
  facebook: 'https://facebook.com/Template',
  instagram: 'https://instagram.com/Template',
  linkedin: 'https://www.linkedin.com/company/Template',
  youtube: 'https://www.youtube.com/channel/Template',
}

const website = {
  ...meta,
  ...contact,
  ...social,
  googleTagID: 'Template',

  // Manifest
  themeColor: '#000000',
  backgroundColor: '#000000',
}

module.exports = website
