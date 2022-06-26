export default function EpisodeCard({ item }) {
  const { name, thumbnailURL, duration, link, description } = item;

  //Properties
  const youtubeLink = `https://www.youtube.com/watch?v=${link}`;

  return (
    <div>
      <a href={youtubeLink} target="_blank" rel="noreferrer noopener">
        <img src={thumbnailURL} alt="eposide-poster" />
      </a>
      <span>{name}</span>
      <span>{duration}</span>
      <p>{description}</p>
    </div>
  );
}
