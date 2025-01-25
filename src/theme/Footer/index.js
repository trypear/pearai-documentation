import React from 'react';

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__link-column">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="https://discord.gg/7QMraJUsQt">Discord</a>
            </li>
            <li>
              <a href="https://github.com/trypear/pearai-app">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="footer__link-column">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://x.com/trypearai">Twitter</a>
            </li>
            <li>
              <a href="https://linkedin.com/company/trypearai">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © {new Date().getFullYear()} PearAI Dev, Inc.
      </div>
    </footer>
  );
}
