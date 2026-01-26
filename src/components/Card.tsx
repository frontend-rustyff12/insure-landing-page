import Image from "next/image";
export default function Card({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <article className="card">
      <Image src={image} width={86} height={86} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
