export default function BioSection({ name, image, text, flip }) {
    return (
      <div style={{ display: "flex", flexDirection: flip ? "row-reverse" : "row", gap: "2rem", margin: "2rem 0" }}>
        <img src={image} alt={name} style={{ width: "300px", borderRadius: "12px" }} />
        <div>
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  }
  