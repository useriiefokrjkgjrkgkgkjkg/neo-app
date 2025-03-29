import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative animate-fadeIn flex flex-col">
      <div 
        className="flex-1 relative"
        style={{ 
          backgroundImage: 'url(https://i.imgur.com/vTpUuaK.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100%'
        }}
      />
      <Navigation />
    </main>
  );
}
