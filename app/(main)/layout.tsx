import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  );
}
