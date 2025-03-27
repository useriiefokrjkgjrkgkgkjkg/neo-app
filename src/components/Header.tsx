export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 w-full">
      <div className="flex items-center bg-[#1A2C1E] rounded-full px-4 py-2">
        <div className="w-6 h-6 bg-[#1A2C1E] rounded-full flex items-center justify-center mr-2">
          <span className="text-[#9EFF5C]">💰</span>
        </div>
        <span className="text-[#9EFF5C]">0$</span>
      </div>
      
      <div className="text-[#1A2C1E] text-3xl font-bold">N✨</div>
      
      <button className="w-10 h-10 bg-[#1A2C1E] rounded-full flex items-center justify-center">
        <div className="w-6 h-4 flex flex-col justify-between">
          <div className="h-0.5 w-full bg-[#9EFF5C]"></div>
          <div className="h-0.5 w-full bg-[#9EFF5C]"></div>
          <div className="h-0.5 w-full bg-[#9EFF5C]"></div>
        </div>
      </button>
    </header>
  );
} 