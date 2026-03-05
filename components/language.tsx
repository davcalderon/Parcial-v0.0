
"use client"

import { useRouter } from "next/navigation"

export default function language() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  function cambiarIdioma(lang: string) {
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=50`
    router.push(`/${lang}`)
  }
  return(
    <div>
      <button className="flex flex-col border p-4 shadow-lg rounded-md" onClick={() => cambiarIdioma("es")}>ES</button>
      <button className="flex flex-col border p-4 shadow-lg rounded-md" onClick={() => cambiarIdioma("en")}>EN</button>
    </div>
  )
}
