import Head from "next/head";
import dynamic from "next/dynamic";

const EffectNodeEntry = dynamic(
  () => import("../src/effectnode/js/home.js").then((s) => s.default),
  { ssr: false }
);

export default function Home() {
  return (
    <div className={"h-full"}>
      <Head>
        <title>Effect Node Studio Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello</h1>
        <div>Welcome to My Site</div>
        <div>Here's a canvas below</div>
      </div>
      <div className={"w-72 h-72"}>
        <EffectNodeEntry></EffectNodeEntry>
      </div>
    </div>
  );
}
