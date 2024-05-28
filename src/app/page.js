'use client';
import { useEffect } from "react";
import ContentWrapper from "./Components/layout/ContentWrapper";
import Lenis from 'lenis'

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])
  return (
    <>
    <ContentWrapper/>
    </>
  );
}
