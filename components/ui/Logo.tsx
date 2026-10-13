/** Brand mark (a UI toggle switched on) plus the wordmark.
 * The wordmark is an image (vector paths, no text) so search engines read the brand as
 * "ui-ux.agency" (its alt) instead of reading the stylised letters. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg className="logo__mark" width={Math.round(size * 1.06)} height={Math.round(size * 0.625)} viewBox="0 0 34 20" aria-hidden="true" focusable="false">
      <rect width="34" height="20" rx="10" fill="#0755E9" />
      <circle cx="24" cy="10" r="6.5" fill="#fff" />
      <circle cx="10" cy="10" r="2.3" fill="#fff" fillOpacity=".45" />
    </svg>
  );
}

export function Logo({ size = 32, tone = "dark" }: { size?: number; tone?: "dark" | "light" }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo__img" src={`/brand/logo/wordmark-${tone}.svg`} alt="ui-ux.agency" width={613} height={104} />
    </span>
  );
}
