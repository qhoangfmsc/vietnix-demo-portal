import GeneralCartSection from "@/components/cart/GeneralCartSection";
import { AsideNav } from "@/components/layouts/AsideNav";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="hidden lg:block">
        <AsideNav />
      </div>
      <main className="p-8 mx-auto">
        <GeneralCartSection />
      </main>
    </div>
  );
}
