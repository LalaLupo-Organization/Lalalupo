"use client";
import { Box, Heading } from "@chakra-ui/react";
import Sidebar from "@/components/sidebar/Sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Sidebar />
    </Box>
  );
}
