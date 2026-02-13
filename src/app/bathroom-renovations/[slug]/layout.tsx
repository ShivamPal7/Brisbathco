import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BathroomRenovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Navbar forceScrolled />
      {children}
      <Footer />
    </main>
  );
}
