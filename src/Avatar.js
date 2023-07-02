
export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

 