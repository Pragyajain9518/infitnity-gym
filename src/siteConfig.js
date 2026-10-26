// The defaults reproduce the supplied Figma content. Set real details before launch.
export const siteConfig = {
  contactEndpoint:
    import.meta.env.VITE_CONTACT_ENDPOINT || 'https://example.com/api/contact',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@affinityfitness.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+1 (212) 555-0199',
  address:
    import.meta.env.VITE_CONTACT_ADDRESS ||
    '123 Fitness Way, Downtown District, NY 10001',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com',
  twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com',
  youtube: import.meta.env.VITE_YOUTUBE_URL || 'https://youtube.com',
  privacy: import.meta.env.VITE_PRIVACY_URL || '',
  terms: import.meta.env.VITE_TERMS_URL || '',
  videos: [
    import.meta.env.VITE_ELENA_VIDEO_URL ||
      'https://example.com/videos/elena-rossi.mp4',
    import.meta.env.VITE_KEVIN_VIDEO_URL ||
      'https://example.com/videos/kevin-sterling.mp4',
    import.meta.env.VITE_SRUTHI_VIDEO_URL ||
      'https://example.com/videos/sruthi.mp4',
  ],
}

export function isPlaceholderUrl(url) {
  return !url || /^https?:\/\/(www\.)?example\.com(?:\/|$)/i.test(url)
}
