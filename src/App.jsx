import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import { APPS, MORE_URL } from './data.js';

const Home = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 12h3v9h5v-6h4v6h5v-9h3z" /></svg>
);

/* אייקונים: סרטון, אזהרה/סכנות, בית רועד (סימולציה), רשימת ציוד (היערכות) */
const ICONS = {
  video: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></>,
  hazard: <><path d="M12 3 2 20h20z" /><path d="M12 10v5M12 17.4v.2" /></>,
  house: <><path d="M6 11l6-5 6 5v8H6z" /><path d="M3 9v6M1 11v2M21 9v6M23 11v2" /></>,
  kit: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 3h6v3H9z" /><path d="M8.5 13.5l2.5 2.5 5-6" /></>,
};
const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{ICONS[name]}</svg>
);

export default function App() {
  const [id, setId] = useState(() => location.hash.slice(1));
  const [full, setFull] = useState(false);

  useEffect(() => {
    const h = () => setId(location.hash.slice(1));
    const f = () => setFull(!!document.fullscreenElement);
    window.addEventListener('hashchange', h);
    document.addEventListener('fullscreenchange', f);
    return () => { window.removeEventListener('hashchange', h); document.removeEventListener('fullscreenchange', f); };
  }, []);

  const app = APPS.find((a) => a.id === id);
  const goHome = () => { history.pushState(null, '', location.pathname + location.search); setId(''); };
  const toggleFull = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());

  /* תוצר פתוח: המסך כולו שלו, ורצועה תחתונה קבועה לחזרה לעמוד הבית */
  if (app) {
    return (
      <div className="stage">
        <iframe className="app" key={app.id} src={app.url} title={app.title} allow="fullscreen; autoplay" />
        <nav className="dock">
          <button className="homebtn" onClick={goHome}><Home />חזרה לעמוד הבית</button>
          <span className="where">{app.title}</span>
        </nav>
      </div>
    );
  }

  return (
    <div className="stage">
      <div className="tape" aria-hidden="true" />
      <header className="topbar">
        <img className="logo" src={logo} alt="המכללה הלאומית לאיתנות ישראלית" />
        <div className="tools">
          <a className="morebtn" href={MORE_URL} aria-label="למוצרים נוספים">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 11.5 12 4l8.5 7.5" /><path d="M5.5 10v9.5h13V10" /><path d="M10 19.5v-4.2a2 2 0 0 1 4 0v4.2" />
            </svg>
          </a>
          {document.fullscreenEnabled && <button className="fsbtn" onClick={toggleFull}>{full ? 'יציאה ממסך מלא' : 'מסך מלא'}</button>}
        </div>
      </header>
      <main className="screen">
        <svg className="crack" viewBox="0 0 100 200" preserveAspectRatio="none" aria-hidden="true">
          <polyline points="62,0 58,14 66,26 55,44 63,58 50,80 58,96 46,120 54,138 42,160 48,178 40,200" />
          <polyline points="50,80 36,88 30,104" /><polyline points="54,138 70,146 76,162" />
        </svg>
        <h1 className="tremor">רעידת אדמה</h1>
        <p className="lead">בחרו פעילות כדי להתחיל</p>
        <div className="cards">
          {APPS.map((a) => (
            <button key={a.id} className="card" style={{ '--accent': a.accent }} onClick={() => { location.hash = a.id; }}>
              <span className="card-main">
                <span className="card-text"><b>{a.title}</b><small>{a.sub}</small></span>
                <span className="badge">כניסה</span>
              </span>
              <span className="ico"><Icon name={a.icon} /></span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}