import Link from "next/link";
export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: 20, background: "#910068", color: "white" }}>
      <div>Wehavegottotalk</div>
      <div>
        <Link href="/about">About</Link> |{" "}
        <Link href="/episodes">Episodes</Link> |{" "}
        <Link href="/events">Events</Link> |{" "}
        <a href="https://spotify.com" target="_blank" rel="noreferrer">🎧 Listen</a>
      </div>
    </nav>
  );
}
