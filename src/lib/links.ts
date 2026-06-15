// Centralized store + brand links used across the site.

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/recipease-ai-recipe-scanner/id6748662065?itscg=30200&itsct=apps_box_badge&mttnsubad=6748662065';

export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.recipease.kitchen';

export const APP_STORE_BADGE =
  'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1765238400';

export const GOOGLE_PLAY_BADGE =
  'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';

export const SUPPORT_EMAIL = 'support@recipease.kitchen';
export const COMPANY_EMAIL = 'admin@adventhubsolutions.com';

// RecipEase social profiles — part of the cross-traffic tunnel (site ↔ app ↔ socials).
export const SOCIALS = {
  instagram: 'https://www.instagram.com/recipease.kitchen/',
  tiktok: 'https://www.tiktok.com/@recipease.kitchen',
  facebook: 'https://www.facebook.com/profile.php?id=61588206764860',
  youtube: 'https://www.youtube.com/@recipease.kitchen',
};

// RecipEase Picks — the affiliate cookware shop (cross-traffic partner site).
// Set this to the deployed shop URL to surface the reverse link in the footer.
// Leave empty to hide it (no broken link). UTM tags cross-traffic for analytics.
export const SHOP_URL: string = 'https://picks.recipease.kitchen';
export const SHOP_URL_UTM: string = SHOP_URL
  ? `${SHOP_URL}${SHOP_URL.includes('?') ? '&' : '?'}utm_source=recipease-app&utm_medium=referral&utm_campaign=cross-traffic`
  : '';
