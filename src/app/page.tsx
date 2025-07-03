import { AsideNav } from "@/components/Layouts/AsideNav";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <AsideNav />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Content Area</h1>
        <p>Đây là khu vực nội dung chính.</p>
      </main>
    </div>
  );
}
