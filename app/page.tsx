import { Sample } from "@/components/Sample";
import { prisma } from "@/lib/prisma";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: todos } = await supabase.from("todos").select();

  const todos2 = await prisma.todos.findMany();
  console.log("tt", todos2);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>
      <div>
        <p>Supabase:</p>
        {todos && todos.map((todo) => <p key={todo.id}>{todo.name}</p>)}
      </div>
      <div>
        <p>Prisma:</p>
        {todos2 && todos2.map((todo, idx) => <p key={idx}>{todo.name}</p>)}
      </div>
      <Sample />
    </main>
  );
}
