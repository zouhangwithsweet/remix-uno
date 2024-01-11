import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4">
      <h1 className="font-bold">Welcome to Remix + Unocss + Fastify</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
            className="flex items-center underline-current underline hover:underline-dotted"
          >
            <span className="w-5 h-5 inline-flex i-ri:bilibili-fill"></span>  15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="flex items-center underline-current underline hover:underline-dotted"
          >
          <span className="w-5 h-5 inline-flex i-ri:youtube-fill"></span> Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer"  className="flex items-center underline-current underline hover:underline-dotted">
          <span className="w-5 h-5 inline-flex i-ri:file-text-fill"></span>Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
