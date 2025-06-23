'use client';

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import HeroSections from "@/app/home/widget/HeroSections";
import ExploreSections from "@/app/home/widget/ExploreSections";
import ApplicationSections from "@/app/home/widget/ApplicationSections";
import Footer from "@/app/components/Footer";
import UnlockWidget from "@/app/home/widget/UnlockWidget";
import SponsorSections from "@/app/home/widget/SponsorSections";

export default function Beranda() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!scrolled && <Topbar />}
      <Box
        position={scrolled ? "fixed" : "relative"}
        top={scrolled ? 0 : "auto"}
        left={0}
        w="100%"
        zIndex={1000}
        transition="all 0.3s ease"
      >
        <Header />
      </Box>
      <Box pt={scrolled ? "80px" : 0}>
        <HeroSections />
        <ExploreSections />
        <ApplicationSections />
        <UnlockWidget />
        <SponsorSections />
        <Footer />
      </Box>
    </>
  );
}
