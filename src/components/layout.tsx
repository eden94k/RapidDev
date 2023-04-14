import Navbar from './nav'

interface layoutProps {
  children: React.ReactNode;
}

export default function Layout({children} : layoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}