import Header from "./components/Header/Header";
import { SectionHero } from "./components/SectionHero/SectionHero";

import { SectionCatalog } from "./components/SectionCatalog/SectionCatalog";
import { SectionClients } from "./components/SectionClients/SectionClients";
import { SectionExploringQuality } from "./components/SectionExploringQuality/SectionExploringQuality";
import { SectionHelp } from "./components/SectionHelp/SectionHelp";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCatalog />
      <SectionExploringQuality />
      <SectionHelp />
      <SectionClients />
      <Footer />
    </>
  );
}

export default App;
