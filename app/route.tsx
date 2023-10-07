import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(request:Request) {
  const cookiesList = cookies();
  const prefered = cookiesList.has("PreferedLanguage");
  // const PreferedLanguage = localStorage.getItem("PreferedLanguage");
  if (prefered) {
    redirect(`/${prefered}`);
  } else {
    cookiesList.set("PreferedLanguage", "fa");
    redirect(`/fa`);
  }
}
