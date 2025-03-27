import Header from "@/components/Header";
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
      <div className="animate-slideDown">
        <Header />
      </div>
      
      <div className="px-4 py-8 animate-fadeIn">
        <div className="relative w-full aspect-[2/1] rounded-3xl bg-[#003B36] mb-4">
          {/* Слайдер будет добавлен позже */}
        </div>

        {/* Точки */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#003B36]"></div>
          <div className="w-2 h-2 rounded-full bg-[#003B36]"></div>
          <div className="w-2 h-2 rounded-full bg-[#003B36]"></div>
        </div>

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
