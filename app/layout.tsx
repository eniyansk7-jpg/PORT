import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'Eniyan S | Aeronautical Engineer',description:'Engineering portfolio — aerospace manufacturing, process engineering, CFD and Industry 4.0.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
