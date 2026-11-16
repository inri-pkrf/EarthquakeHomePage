// ===== ארבעת התוצרים – אפשר לערוך כאן כתובות, שמות ותיאורים =====
export const APPS = [
  { id: 'videos', icon: 'video', title: 'סרטוני רעידת אדמה וצונאמי', sub: 'צפו בהנחיות וענו על שאלות הבנה', url: 'https://inri-pkrf.github.io/EarthquakeDay/', accent: 'var(--red)' },
  { id: 'after', icon: 'hazard', title: 'סכנות לאחר רעידת אדמה', sub: 'זהו את הסכנות שמסתתרות בתמונה', url: 'https://inri-pkrf.github.io/afterEarthquake-project/', accent: 'var(--amber)' },
  { id: 'simulation', icon: 'house', title: 'סימולציית רעידת אדמה', sub: 'התנסו בסימולציה', url: 'https://inri-pkrf.github.io/quake-game/', accent: 'var(--ok)' },
  { id: 'prepare', icon: 'kit', title: 'היערכות לרעידת אדמה', sub: 'תרגלו את ההיערכות', url: 'https://inri-pkrf.github.io/raad-game/', accent: 'var(--bone)' },
];

// כפתור הבית בעמוד הראשי – מוביל לשאר המוצרים
export const MORE_URL = 'https://inri-pkrf.github.io/Totem-Pro-Final/#more-products';