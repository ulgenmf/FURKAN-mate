"use client";
import { usePathname } from "next/navigation";
import { Link } from "./custom-link";

export const BackButton = () => {
  const pathname = usePathname();
  if (pathname == "/") return null;
  return <Link href="/">Back</Link>;
};