import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default async function Page() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const preferredLanguage = acceptLanguage.split(",")[0].split(";")[0] || "en";

  if (preferredLanguage.startsWith("es")) {
    redirect("/es");
  }

  if (preferredLanguage.startsWith("en")) {
    redirect("/en");
  }

  redirect(`/en`);
}
