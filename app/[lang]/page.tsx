import { getDictionary } from "@/lib/dictionary";


export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');
  return <h1>{dict.welcome}</h1>
}