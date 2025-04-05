import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#111", color: "#fff" }}>
      <nav style={{ display: "flex", gap: "2rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/episodes">Episodes</Link>
        <Link href="/events">Events</Link>
      </nav>
    </header>
  );
}
