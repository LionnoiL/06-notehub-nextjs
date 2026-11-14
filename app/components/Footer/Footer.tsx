import css from "./Footer.module.css";

async function getRenderedYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {getRenderedYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: your name</p>
          <p>
            Contact us:
            <a href="<mailto:student@notehub.app>">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
