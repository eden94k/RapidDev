import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Typography } from '@mui/material'
import NavBar from '@/components/nav'
import type { ReactElement } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapid Dev</title>
        <meta name="description" content="RapidDev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={styles.main}>
        <Typography>RapidDev</Typography>
      </main>
    </>
  )
}
