import BookCards from "@/components/BookCards/BookCards";
import Navbar from "@/components/Navbar/Navbar";
import SwiperCards from "@/components/SwiperCards/SwiperCards";
import ConvertOne from "@/components/ConvertOne/ConvertOne";
import ConvertTwo from "@/components/ConvertTwo/ConvertTwo";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <BookCards />
      <SwiperCards/> 
      <ConvertOne/>
      <ConvertTwo/>
      <Footer/>
    </main>
  );
}
