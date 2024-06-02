import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function CategoryLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
