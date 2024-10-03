import Link from "next/link";
import styles from "./Nav.module.css"
export default function Nav() {
  return (
    <nav className="mr-4 hidden lg:block">
      <ul className="flex gap-3 p-2.5 border border-light-950 rounded-3xl">
        <li>
          <Link href="/" className={`${styles.active} ${styles.link}`}>
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link href="/">سرمایه گذاری</Link>
        </li>
        <li>
          <Link href="/">اطلاع رسانی</Link>
        </li>
        <li>
          <Link href="/">دوره آموزشی</Link>
        </li>
        <li>
          <Link href="/">درباره ما</Link>
        </li>
      </ul>
    </nav>
  );
}
