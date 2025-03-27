import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "3D\ndesign",
    image: "/3d.jpg"
  },
  {
    title: "GFX\navatar",
    image: "/gfx.jpg"
  },
  {
    title: "2D\ndesign",
    image: "/2d.jpg"
  },
  {
    title: "Forum\ndesign",
    image: "/forum.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#9EFF5C]/30">
      <Header />
      
      <div className="px-4 py-8">
        <div className="relative w-full aspect-[2/1] rounded-3xl bg-[#1A2C1E] mb-8">
          {/* Слайдер будет добавлен позже */}
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1A2C1E] text-center">
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

          <button className="w-full py-4 bg-[#1A2C1E] rounded-full text-[#9EFF5C] text-xl font-medium">
            Наши отзывы
          </button>
        </div>
      </div>
    </main>
  );
}
