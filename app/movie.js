import Image from "next/image";
import Link from "next/link";

export default function Movie({ key, title, id, poster_path, release_date }) {
  const path = "https://image.tmdb.org/t/p/original";
  const img = path + poster_path;

  console.log(img,"")
  return (
    <div>
      <h1>{title}</h1>
      <div>{release_date}</div>
      <Link href={`/${id}`}>
        <Image src={img} width={500} height={500} alt={title} />
      </Link>
    </div>

    
  );

}
