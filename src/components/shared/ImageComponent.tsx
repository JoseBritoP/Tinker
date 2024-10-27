import Image from 'next/image'
import React from 'react'

interface ImageComponentProps {
  src:string
  width:number
  height:number
  alt:string
  className?:string
  subClassName?:string
  span?:string
}
export default function ImageComponent({height,src,width,alt,className,span,subClassName}:ImageComponentProps) {
  return (
    <div className={`${className && className}`}>
      <Image src={src} height={height} width={width} alt={alt} />
      <span className={`${subClassName && subClassName}`}>{span}</span>
    </div>
  )
}
