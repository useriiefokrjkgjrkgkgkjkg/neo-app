'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#2D1E5A] rounded-t-[30px] px-8 py-6 flex justify-between items-center max-w-screen-sm mx-auto">
      <Link href="/" className="flex flex-col items-center gap-2">
        <Image src="https://i.imgur.com/nkipwhd.png" alt="Главная" width={32} height={32} />
        <span className="text-white text-sm">Главная</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-2">
        <Image src="https://i.imgur.com/MIT4jtp.png" alt="Профиль" width={32} height={32} />
        <span className="text-white text-sm">Профиль</span>
      </Link>
      <Link href="/order" className="flex flex-col items-center gap-2">
        <Image src="https://i.imgur.com/fbU8tYW.png" alt="Заказать" width={32} height={32} />
        <span className="text-white text-sm">Заказать</span>
      </Link>
      <Link href="/history" className="flex flex-col items-center gap-2">
        <Image src="https://i.imgur.com/oeFMDYZ.png" alt="История" width={32} height={32} />
        <span className="text-white text-sm">История</span>
      </Link>
      <Link href="/support" className="flex flex-col items-center gap-2">
        <Image src="https://i.imgur.com/n0VBiKb.png" alt="Поддержка" width={32} height={32} />
        <span className="text-white text-sm">Поддержка</span>
      </Link>
    </nav>
  );
} 