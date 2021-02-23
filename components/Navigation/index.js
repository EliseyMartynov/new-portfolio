import Link from "next/link";
import HomeBadge from "./HomeBadge";
import PortfolioBadge from "./PortfolioBadge";
import SkillsBadge from "./SkillsBadge";
import ThanksBadge from "./ThanksBadge";

const Navigation = () => {
  return (
    <>
      <nav className="nav-box">
        <div className="nav">
          <div className="left-side">
            <Link href="/" passHref>
              <a className="home badge">
                <HomeBadge />
              </a>
            </Link>
          </div>
          <div className="right-side">
            <Link href="/skills" passHref>
              <a className="badge">
                <SkillsBadge />
                <span>Skills</span>
              </a>
            </Link>
            <Link href="/portfolio" passHref>
              <a className="badge">
                <PortfolioBadge />
                <span>Portfolio</span>
              </a>
            </Link>
            <Link href="/thanks" passHref>
              <a className="badge">
                <ThanksBadge />
                <span>Thanks to</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .nav-box {
          display: flex;
          height: 60px;
          background-color: var(--navbar-color);
          fill: var(--text-contrast);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          width: 85%;
          margin: 0 auto;
        }

        .left-side,
        .right-side {
          display: flex;
          width: 100%;
        }

        .left-side {
          padding: 0.5rem 0;
        }

        .home {
          width: 50px;
        }

        .home :global(svg g) {
          cursor: pointer;
          fill: var(--text-contrast);
        }

        .home :global(svg g:hover) {
          fill: var(--second-color);
        }

        .right-side .badge {
          display: flex;
          flex-direction: column;
          width: 100%;
          color: var(--text-contrast);
          text-align: center;
          padding: 0.5rem 0;
          cursor: pointer;
          border-radius: 7px;
        }

        .right-side .badge:not(:last-child) {
          margin-right: 5px;
        }

        .right-side .badge:hover {
          background: var(--text-contrast);
          color: var(--navbar-color);
          fill: var(--navbar-color);
        }
      `}</style>
      <style global jsx>{`
        :root {
          --navbar-color: #321f28;
          --text-contrast: #c3c3c3;
          --container: 85%;
          --second-color: #f5b461;
        }

        html {
          font-family: "Share Tech", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Navigation;
