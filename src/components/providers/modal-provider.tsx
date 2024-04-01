"use client";

import { useEffect, useState } from "react";
import CardModal from "../modals/card-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <CardModal />
    </div>
  );
};

export default ModalProvider;
