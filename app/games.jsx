"use client"; // This is a client component
import React from "react";

import GameTabs from "@/components/GameTabs"
import GameCards from "@/components/GameCards";

const Games = () => {
  return (
    <>
      <GameTabs />
      <GameCards />
    </>
  );
};

export default Games;
