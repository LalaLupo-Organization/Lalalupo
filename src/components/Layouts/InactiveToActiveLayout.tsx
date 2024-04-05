import React from "react";
import ButtonInteractiveLesson from "@/components/Buttons/ButtonInteractive";
import { selectMessage, selectUser } from "@/features/userSlice";
import { useAppSelector } from "@/hooks/useRedux";
import { usePathname, useSearchParams } from "next/navigation";

export default function InActiveToActiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = useAppSelector((state) => selectMessage(state));
  const current = useAppSelector((state) => selectUser(state));
  const location = usePathname();

  return (
    <>
      <div className="w-full sm:w-fit">{children}</div>
    </>
  );
}
