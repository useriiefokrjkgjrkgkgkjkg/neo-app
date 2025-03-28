import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { image: "https://imgur.com/a/cdRqJ2v" },
  { image: "https://imgur.com/a/cdRqJ2v" },
  { image: "https://imgur.com/a/cdRqJ2v" },
  { image: "https://imgur.com/a/cdRqJ2v" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://i.imgur.com/cdRqJ2v.png)' }}
      />
    </main>
  );
}
