import style from "../styles/Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={style.skeleton}>
      <div className={style.banner}></div>
      <div className={style.header}></div>
      <div className={style.content}></div>
      <div className={style.content}></div>
      <div className={style.content}></div>
    </div>
  );
}
