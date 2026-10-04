"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyHarihar from "@/components/WhyHarihar";
import MenuPreview from "@/components/MenuPreview";
import SignatureExperience from "@/components/SignatureExperience";
import FranchiseSection from "@/components/FranchiseSection";
import Locations from "@/components/Locations";
import InstagramGallery from "@/components/InstagramGallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import FranchiseModal from "@/components/FranchiseModal";
import { MenuItem } from "@/data/menu";

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [franchiseModalOpen, setFranchiseModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleOpenOrder = (item?: MenuItem) => {
    if (item) {
      setSelectedMenuItem(item);
    }
    setOrderModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FFF9E9]">
      {/* Header Navigation */}
      <Header onOpenOrder={() => handleOpenOrder()} />

      {/* Hero Section */}
      <Hero onOpenFranchise={() => setFranchiseModalOpen(true)} />

      {/* Why Harihar Section */}
      <WhyHarihar />

      {/* Menu Preview Showcase */}
      <MenuPreview onSelectItem={(item) => handleOpenOrder(item)} />

      {/* Signature Experience Section */}
      <SignatureExperience />

      {/* Franchise Opportunity Section */}
      <FranchiseSection onOpenFranchise={() => setFranchiseModalOpen(true)} />

      {/* Outlets & Locations Section */}
      <Locations />

      {/* Instagram Feed Gallery */}
      <InstagramGallery />

      {/* Final Call to Action */}
      <FinalCTA onOpenOrder={() => handleOpenOrder()} />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedItem={selectedMenuItem}
      />

      <FranchiseModal
        isOpen={franchiseModalOpen}
        onClose={() => setFranchiseModalOpen(false)}
      />
    </main>
  );
}
