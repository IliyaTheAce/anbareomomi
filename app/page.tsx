'use client'
import { useRouter } from "next/navigation";

export default function page({ params }: { params: { lang: string } }) {
  const router = useRouter();
  const PreferedLanguage = localStorage.getItem("PreferedLanguage");
  if (PreferedLanguage) {
    router.push(`/${PreferedLanguage}`);
  } else {
    localStorage.setItem("PreferedLanguage", "fa");
    router.push(`/fa`);
  }
}
