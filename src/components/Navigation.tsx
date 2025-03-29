'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#2D1E5A] rounded-[30px] px-8 py-4 flex gap-8 items-center">
      <Link href="/" className="flex flex-col items-center gap-1">
        <Image src="https://i.imgur.com/nkipwhd.png" alt="Главная" width={24} height={24} />
        <span className="text-white text-sm">Главная</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-1">
        <Image src="https://i.imgur.com/MIT4jtp.png" alt="Профиль" width={24} height={24} />
        <span className="text-white text-sm">Профиль</span>
      </Link>
      <Link href="/order" className="flex flex-col items-center gap-1">
        <Image src="https://i.imgur.com/fbU8tYW.png" alt="Заказать" width={24} height={24} />
        <span className="text-white text-sm">Заказать</span>
      </Link>
      <Link href="/history" className="flex flex-col items-center gap-1">
        <Image src="https://i.imgur.com/oeFMDYZ.png" alt="История" width={24} height={24} />
        <span className="text-white text-sm">История</span>
      </Link>
      <Link href="/support" className="flex flex-col items-center gap-1">
        <Image src="https://i.imgur.com/n0VBiKb.png" alt="Поддержка" width={24} height={24} />
        <span className="text-white text-sm">Поддержка</span>
      </Link>
    </nav>
  );
} 