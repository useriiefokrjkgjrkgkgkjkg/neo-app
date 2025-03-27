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
    <main className="min-h-screen bg-[#B8FAB4]">
      <Header />
      <ImageSlider />
      
      <div className="px-4 py-8 animate-fadeIn">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#003B36] text-center animate-fadeIn">
            Выберите услугу<br />дизайна
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <ServiceCard image={service.image} />
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-[#003B36] rounded-full text-white text-xl font-medium animate-fadeIn">
            Наши отзывы
          </button>
        </div>
      </div>
    </main>
  );
}
