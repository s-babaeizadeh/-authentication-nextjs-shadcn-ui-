"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { logout } from "../login/actions";

function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center h-svh bg-gray-100 gap-10">
      <h1 className="font-bold text-2xl">Wellcome to Dashboard</h1>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}

export default Dashboard;
