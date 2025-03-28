import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { image: "https://i.imgur.com/bYR0xw8.png" },
  { image: "https://i.imgur.com/r3ojTdM.png" },
  { image: "https://i.imgur.com/Swyq8NY.png" },
  { image: "https://i.imgur.com/q18NojN.png" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://imgur.com/a/hAnfYlP")'
        }}
      />
    </main>
  );
}
