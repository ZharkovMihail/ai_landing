import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Services from "@/app/components/Services";
import Cases from "@/app/components/Cases";
import Process from "@/app/components/Process";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-[390px] mx-auto lg:max-w-none lg:mx-0">
      <Header />
      <Hero />

      {/* Page sections */}
      <div className="flex flex-col gap-[60px] py-[60px] lg:gap-[120px] lg:py-[120px]">
        <Features />
        <Services />
        <Cases />
        <Process />
        <ContactForm />
      </div>

      <Footer className="lg:hidden" />
    </main>
  );
}
