import "./App.css";
import "./componentsCss/style.css";
import SectionOne from "./components/section_one";
import SectionTwo from "./components/sectionTwo";
import SectionThree from "./components/sectionThree";
import Footer from "./components/footer";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
export const images = importAll(
  require.context("./image", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  return (
    <div className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
