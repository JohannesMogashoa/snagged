import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignoutButton from "./_components/auth/sign-out-button";
import { getServerSession } from "@/server/auth";

export default async function Home() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Welcome to <span className="text-[#15162c]">Snagged</span>
      </h1>
      <Link href={"/signin"} className="cursor-pointer">
        <Button variant={"outline"}>Get Started</Button>
      </Link>
    </div>
  );
}
