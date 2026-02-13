import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RegionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Navbar forceScrolled />
            {children}
            <Footer />
        </main>
    );
}
