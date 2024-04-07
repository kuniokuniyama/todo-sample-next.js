import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-pink-100 w-1/3 h-screen m-auto py-3 pl-8">
      <div className="text-2xl font-extrabold pb-5">ホーム</div>
      <Link href="/todo" className="bg-orange-300 px-3 py-3 rounded-md">
        Todoに遷移
      </Link>
    </div>
  );
}
