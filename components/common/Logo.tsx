import { logo } from '@/images'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className:string}) => {
  return (
    <Link href={"/"}>
        <Image src={logo} alt="logo" className={cn("w-42", className)}/>
    </Link>
  )
}

export default Logo