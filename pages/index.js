import Link from "next/link";

function Home() {
  return (
    <div>
      <p>HELLO and Welcome to Next.js!</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default Home;
