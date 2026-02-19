import Footer from "../../OuterParts/Footer";
import Comments from "./Comments";
import ProductDesc from "./ProductDesc";
import BackNav from "../../OuterParts/BackNav";

export default function ProfilePage() {
  return (
    <>
      <BackNav backLink={"/"} />
      <ProductDesc />
      <Comments />
      <Footer />
    </>
  );
}
