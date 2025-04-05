import BioSection from "@/components/BioSection";

export default function Home() {
  return (
    <div>
      <h1>Welcome to WeHaveGotTalk</h1>
      <BioSection
        name="Anna"
        image="/images/anna.jpg"
        text="Anna is the voice of calm in the chaos. A mom, a wife, and a natural storyteller..."
      />
      <BioSection
        name="Elisha"
        image="/images/elisha.jpg"
        text="Elisha is the friend who always says what you're thinking — out loud..."
        flip
      />
    </div>
  );
}
