import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const runtime = 'edge'

export const alt = 'APAC Worldwide'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #05120e, #11352a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            opacity: 0.5,
          }}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <h1
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
              fontFamily: 'serif',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            APAC Worldwide
          </h1>
          <p
            style={{
              fontSize: 40,
              color: '#c5a059',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
              fontFamily: 'sans-serif',
            }}
          >
            {siteConfig.description}
          </p>
          <div style={{ display: 'flex', marginTop: 60, alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: 30, color: 'rgba(255,255,255,0.7)', letterSpacing: '2px' }}>
              apacworldwide.com
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
