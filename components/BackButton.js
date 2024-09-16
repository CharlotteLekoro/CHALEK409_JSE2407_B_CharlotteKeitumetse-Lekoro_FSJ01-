"use client"; 

import { useRouter } from "next/navigation";

/**
 * A button component that navigates to the previous page in the browser history.
 *
 * @returns {JSX.Element} The rendered BackButton component.
 */
export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 text-[#f43f5e] hover:underline font-bold text-xl"
    >
      ← Back
    </button>
  );
}
