import Nav from "./components/Nav";
import type { HomeProps } from "../types/types";
import { getDictionary } from "./dictionaries";
export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang); // en

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        <button>{dict.products.cart}</button>
      </h1>
    </main>
  );
}
