"use client";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { IoMdClose } from "react-icons/io";

const WebsiteAuditForm = () => {
  const [showModal, setShowModal] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const onClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, [showModal]);

  return (
    <div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            border: "none",
            borderRadius: "10px",
            margin: "0 auto",
            width: isSmallScreen ? "80%" : "40%",
            height: "70%",
            bgcolor: "background.paper",
            boxShadow: 24,
            transform: "translateY(25%)",
            overflow: "auto",
            p: 2,
          }}
        >
          <button
            onClick={onClose}
            className="absolute z-30 top-2 right-2 text-white text-lg bg-my-blue-gradient"
          >
            <IoMdClose />
          </button>

          <div
            dangerouslySetInnerHTML={{
              __html: `
                <div class="calendly-inline-widget" data-url="https://calendly.com/ianpslater/20min" style="max-width:500px;height:1200px;overflow:visible"></div>
              `,
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default WebsiteAuditForm;
