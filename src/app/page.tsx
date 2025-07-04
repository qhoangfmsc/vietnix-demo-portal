import GeneralCartSection from "@/components/cart/GeneralCartSection";
import { AsideNav } from "@/components/layouts/AsideNavComponent";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="hidden lg:block">
        <AsideNav />
      </div>
      <main className="p-2 sm:p-8 sm:mx-auto w-full">
        <GeneralCartSection />
      </main>
    </div>
  );
}
