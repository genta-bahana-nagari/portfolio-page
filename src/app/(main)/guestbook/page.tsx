import { Guestbook } from "@/components/sections/guestbook";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "Leave a message, share your thoughts, or just say hello. I’d love to hear your feedback, ideas, or anything you want to share!",
};

export default function GuestBook() {
  return (
    <>
      <Guestbook />
    </>
  );
}
