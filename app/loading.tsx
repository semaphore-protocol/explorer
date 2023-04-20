import Image from "next/image";

export default function Loading() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1>Semaphorus</h1>
      <p>Loading data...</p>
      <Image
        src={
          "https://em-content.zobj.net/source/microsoft-teams/337/rocket_1f680.png"
        }
        alt="Rocket shop emoji"
        width={100}
        height={100}
      />
    </main>
  );
}
