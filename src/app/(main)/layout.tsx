import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const is404 = (children as any)?.type?.name === "NotFound";
  return (
    <>
    <body className="min-h-screen flex flex-col bg-black">
      {!is404 && <Navbar />}
      <main className="bg-black pt-24 md:pt-32">{children}</main>
      <Footer />
    </body>
    </>
  );
}
