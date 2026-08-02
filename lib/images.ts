/**
 * Central photography registry.
 * All photos are free-to-use (Unsplash License) and served directly from
 * the Unsplash CDN — configured as an allowed remote pattern in next.config.ts.
 */
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const IMAGES = {
  heroCappuccino: unsplash("1512568400610-62da28bc8a13"),
  icedCoffeeHand: unsplash("1767471716700-2b3aa77b1ab6"),
  latteHeart: unsplash("1741461500711-59b03bceb2ce"),
  pourEspresso: unsplash("1630762759753-7349d78c9e1e"),
  baristaLatteArt: unsplash("1541167760496-1628856ab772"),
  beansPile: unsplash("1712251769294-16163363ebef"),
  shopInterior: unsplash("1752756992329-961db6366376"),
  matchaClassic: unsplash("1560148196-df61132466ce"),
  matchaIced: unsplash("1717398804998-ad2d48822518"),
  farmHarvest: unsplash("1746623691157-c4c7a3bad0c4"),
  coldBrew: unsplash("1502354786964-0b2bd17a9fd1"),
  friendsCafe: unsplash("1753351055246-a7efae066eef"),
  muffins: unsplash("1722251172903-cc8774501df7"),
  storefront: unsplash("1755435900778-aa6949ed2ce5"),
  sertsa: unsplash("/sertsa.png"),
} as const;
