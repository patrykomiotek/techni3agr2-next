import { headers } from "next/headers";
import Link from "next/link";

import { auth } from "@/shared/lib/auth";
import { RegistrationForm } from "@/features/users/components/Registration/RegistrationForm";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log({ session });

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href="/characters">Characters</Link>
        <RegistrationForm />
      </main>
    </div>
  );
}
