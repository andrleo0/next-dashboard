import { WidgetGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Id do ut laborum excepteur irure magna pariatur veniam proident.',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      
      <WidgetGrid />

    </div>
  );
}