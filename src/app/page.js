"use client";
import React, { useEffect, useState } from "react";
import ContentWrapper from "./Components/layout/ContentWrapper";
import WebsiteAuditForm from "./WebsiteAuditForm";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ContentWrapper />
      {showModal && <WebsiteAuditForm />}
    </>
  );
}
