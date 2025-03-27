import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "3D\ndesign",
    image: "https://i.imgur.com/bYR0xw8.png"
  },
  {
    title: "GFX\navatar",
    image: "https://i.imgur.com/r3ojTdM.png"
  },
  {
    title: "2D\ndesign",
    image: "https://i.imgur.com/Swyq8NY.png"
  },
  {
    title: "Forum\ndesign",
    image: "https://i.imgur.com/q18NojN.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#B8FAB4]">
      <Header />
      
      <div className="px-4 py-8">
        <div className="relative w-full aspect-[2/1] rounded-3xl bg-[#003B36] mb-8">
          {/* Слайдер будет добавлен позже */}
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#003B36] text-center">
            Выберите услугу<br />дизайна
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                image={service.image}
              />
            ))}
          </div>

          <button className="w-full py-4 bg-[#003B36] rounded-full text-white text-xl font-medium">
            Наши отзывы
          </button>
        </div>
      </div>
    </main>
  );
}
