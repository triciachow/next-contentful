import Link from "next/link";
import style from "../styles/404.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div className={style.notFound}>
      <h1 className={style.title}>404</h1>
      <h2>Ooopss... That page cannot be found :(</h2>
      <p>
        Redirecting to <Link href="/">Home page</Link> for more marmite
        goodness!
      </p>
    </div>
  );
}
