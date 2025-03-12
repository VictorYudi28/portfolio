import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Main } from "@/components/Main";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div className="text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      </div>

      <Container>
        <Header>
          <NavBar />
        </Header>
        <Main>
          <Hero />
          <Technologies />
          <Projects />
        </Main>
        <Footer>
          <GetInTouch />
        </Footer>
      </Container>

    </div>
  );
}
