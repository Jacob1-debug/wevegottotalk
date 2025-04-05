export default function EpisodeCard({ episode }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold">{episode.title}</h3>
      <p className="text-gray-600 mb-3">{episode.description}</p>
      <iframe style={{ borderRadius: '12px' }} src={episode.audioUrl} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}