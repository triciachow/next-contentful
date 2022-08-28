import Image from "next/image";
import Link from "next/link";
import style from "../styles/Recipe.module.css";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className={style.card}>
      <div className={style.featured}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className={style.content}>
        <div className={style.info}>
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className={style.actions}>
          <Link href={`/recipes/${slug}`}>
            <a>Cook This</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
