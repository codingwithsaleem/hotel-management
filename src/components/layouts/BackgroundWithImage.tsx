import React, { ReactNode } from 'react'

interface BackgroundWithImageProps {
  children: ReactNode
  bgImage: string
  sideImage: string
  sideImageAlt?: string
  sideImageClassName?: string
}

const BackgroundWithImage = ({
  children,
  bgImage,
}: BackgroundWithImageProps) => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  )
}

export default BackgroundWithImage