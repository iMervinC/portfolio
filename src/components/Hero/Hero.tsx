import React, { FC } from 'react'
import { Intro, ProfileImage } from '@/components/Hero'

export const Hero: FC = () => {
  return (
    <div className="flex items-center justify-center lg:justify-around h-hero-m sm:h-hero flex-col-reverse lg:flex-row gap-10 lg:gap-10">
      <Intro />
      <ProfileImage />
    </div>
  )
}
