import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <div className="flex max-w-2xl mx-auto items-center p-2 justify-between">
          <div className="text-xl font-semibold">
            Focus-dope
          </div>
          <div className="space-x-4">
            <a className="link link-hover" href="">tasks</a>
            <a className="link link-hover" href="">timer</a>
            <a className="link link-hover" href="">motivation</a>
            <a className="link link-hover" href="">diary</a>
          </div>
        </div>
      </section>
      <Intro />
    </div>
  );
}
