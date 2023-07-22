"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

export const Sample = () => {
  const supabase = createClientComponentClient();
  useEffect(() => {
    supabase
      .channel("todosa")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "todos",
        },
        (event) => {
          const { new: newOrder } = event;
          console.log("newOrder", newOrder);
        }
      )
      .subscribe();
  }, [supabase]);
  return (
    <div>
      <h1>Sample</h1>
      <p></p>
    </div>
  );
};
