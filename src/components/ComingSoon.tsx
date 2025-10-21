import Image from 'next/image'
import React from 'react'

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <Image
        src="/images/coming-soon.png"
        alt="Coming Soon"
        width={1000}
        height={200}
        className="lg:w-1/2 w-full"
      />
    </div>
  )
}

export default ComingSoon