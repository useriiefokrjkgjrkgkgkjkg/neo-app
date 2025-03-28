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
        style={{ backgroundImage: 'url(https://i.imgur.com/hAnfYlP.png)' }}
      />
      <div className="relative z-10">
        <Header />
        <ImageSlider />
        <div className="grid grid-cols-2 gap-4 p-4">
          <ServiceCard
            title="Дизайн логотипа"
            image="https://i.imgur.com/68Dupqy.png"
            price="от 100$"
          />
          <ServiceCard
            title="Дизайн сайта"
            image="https://i.imgur.com/68Dupqy.png"
            price="от 200$"
          />
          <ServiceCard
            title="Дизайн приложения"
            image="https://i.imgur.com/68Dupqy.png"
            price="от 300$"
          />
          <ServiceCard
            title="Дизайн баннера"
            image="https://i.imgur.com/68Dupqy.png"
            price="от 50$"
          />
        </div>
      </div>
    </main>
  );
}
