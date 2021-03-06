import React, { FC, useEffect } from 'react'
import Head from 'next/head'

interface Layout {
  title: string
  otherPage?: boolean
}

export const PageWrap: FC<Layout> = ({ title, children }) => {
  return (
    <div className="bg-black text-custom-offwhite font-bold contain">
      <Head>
        <title>{title} | iMervinC</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Hi I'm 👺Mervin. Welcome to my slice🍕 of the internet"
        />
      </Head>
      <main className="pb-32">{children}</main>
    </div>
  )
}
