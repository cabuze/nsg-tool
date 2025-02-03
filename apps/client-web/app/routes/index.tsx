import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import * as fs from "node:fs";
import { Button } from "../components/ui/button";

const filePath = "count.txt";

async function readCount() {
  return parseInt(await fs.promises.readFile(filePath, "utf-8").catch(() => "0"));
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return readCount();
});

const updateCount = createServerFn({ method: "POST" })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <Button
        onClick={() => {
          void (async () => {
            await updateCount({ data: 1 });
            await router.invalidate();
          })();
        }}
      >
        Increment {state} by 1
      </Button>
    </div>
  );
}
