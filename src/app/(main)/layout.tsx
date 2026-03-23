import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const is404 = (children as any)?.type?.name === "NotFound";
  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {!is404 && <Navbar />}
      <main className="flex-1 pt-24 md:pt-32">{children}</main>
      {!is404 && <Footer />}
    </div>
  );
}
