import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Neo app</h1>
        <p className="text-xl text-white/80">Создаем дизайн вашей мечты</p>
      </div>
    </main>
  );
}
