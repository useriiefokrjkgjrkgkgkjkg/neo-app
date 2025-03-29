import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative animate-fadeIn">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen w-screen max-w-screen-sm mx-auto"
        style={{ 
          backgroundImage: 'url(https://i.imgur.com/vTpUuaK.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          maxHeight: '926px' // высота iPhone 13
        }}
      />
      <Navigation />
    </main>
  );
}
