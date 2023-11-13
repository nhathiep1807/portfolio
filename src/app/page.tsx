import Image from "next/image";
import Introduction from "./comps/Introduction";

export default function Home() {
  return (
    <main className="mt-24 max-w-[1024px] px-4 mx-auto">
      <Introduction />
    </main>
  );
}
