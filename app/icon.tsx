import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#1C3D6E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
      >
        {/* Canterbury cross potent, scaled from 24x24 to ~20x20 */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#D4AF60">
          <path d="M8 2H16V5H14V10H19V8H22V16H19V14H14V19H16V22H8V19H10V14H5V16H2V8H5V10H10V5H8Z" />
        </svg>
      </div>
    ),
    size
  )
}
