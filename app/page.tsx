import Image from 'next/image'
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className={`${dmSans.className} font-bold text-4xl`}>
                Semaphorus
            </h1>
        </main>
    );
}
