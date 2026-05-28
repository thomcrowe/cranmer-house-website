import { ImageResponse } from 'next/og'

export const alt = 'Cranmer House, An Episcopal Campus Ministry in Tulsa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Load Playfair Display Bold from Google Fonts for the heading
  let playfairData: ArrayBuffer | undefined
  try {
    const cssRes = await fetch(
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Next.js OG image generator)' } }
    )
    const css = await cssRes.text()
    const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1]
    if (fontUrl) {
      playfairData = await fetch(fontUrl).then((r) => r.arrayBuffer())
    }
  } catch {
    // Falls back to system serif if Google Fonts is unavailable
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#1C3D6E',
          padding: '80px',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gold top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#B5902C',
            display: 'flex',
          }}
        />

        {/* Canterbury cross + eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px' }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="#D4AF60">
            <path d="M8 2H16V5H14V10H19V8H22V16H19V14H14V19H16V22H8V19H10V14H5V16H2V8H5V10H10V5H8Z" />
          </svg>
          <span
            style={{
              fontSize: '16px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#D4AF60',
              display: 'flex',
            }}
          >
            An Episcopal Campus Ministry
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: 700,
            color: '#f8f6f0',
            lineHeight: 1,
            marginBottom: '36px',
            fontFamily: playfairData ? 'Playfair Display' : 'Georgia, serif',
            display: 'flex',
          }}
        >
          Cranmer House
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: '100px',
            height: '3px',
            background: '#B5902C',
            marginBottom: '36px',
            display: 'flex',
          }}
        />

        {/* Location / campus info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '26px', color: 'rgba(248,246,240,0.65)', display: 'flex' }}>
            Oral Roberts University · University of Tulsa
          </span>
          <span style={{ fontSize: '22px', color: 'rgba(248,246,240,0.40)', display: 'flex' }}>
            Tulsa, Oklahoma
          </span>
        </div>

        {/* Bottom-right watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '14px', color: 'rgba(248,246,240,0.25)', letterSpacing: '0.1em' }}>
            cranmerhouse.org
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: playfairData
        ? [{ name: 'Playfair Display', data: playfairData, weight: 700, style: 'normal' }]
        : [],
    }
  )
}
