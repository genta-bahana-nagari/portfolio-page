import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const is404 = (children as any)?.type?.name === "NotFound";
  return (
    <>
        {!is404 && <Navbar />}
        {children}
        <Footer />
    </>
  );
}
