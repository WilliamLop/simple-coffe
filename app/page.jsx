import Image from "next/image";
import bgCafe from '../public/bg-cafe.jpg'
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="h-screen mb-[100px] sm:mb-[200px] lg:mb-[400px] xl:mb-[600px] grid grid-rows-[auto,1fr]">
      <header className="">
        <Image src={bgCafe} alt="bg-cafe"
        className="w-full h-full object-contain"/>
      </header>
      <section className="w-[80%] sm:w-[60%] mx-auto bg-grayDark h-full
      rounded-lg shadow-md relative bottom-[3rem] sm:bottom-[5rem] lg:bottom-[7rem]
      lg:w-[70%] xl:w-[85%] xl:bottom-[9rem] max-w-[1300px]">
          <Card />
      </section>

    </main>
  );
}
