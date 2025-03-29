import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative animate-fadeIn flex flex-col">
      <div 
        className="background-container"
        style={{ 
          backgroundImage: 'url(https://i.imgur.com/vTpUuaK.png)'
        }}
      />
      <Navigation />
    </main>
  );
}
