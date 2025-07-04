import type { JSX } from "react";

import { Link } from "react-router-dom";

import selectors from "./Footer.module.scss";

export default function Footer(): JSX.Element {
	return(
		<footer className={selectors.footer_container}>
      <div className="fr-n-sp-xs">
			  <div className="fc-n-sp-xs">
				  <Link className={selectors.footer_websitename} to="/">Code Hub</Link>
         	<ul className="fr-n-n-xs">
						<li>
						  <Link className={selectors.footer_media_icon} to="/">
						    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m22 4-2 3c2 10-9 18-18 12l6-2c-5-1-7-7-5-12 2 3 6 4 9 4-1-4 4-7 7-4l3-1z"/></svg>
						  </Link>
						</li>
						<li>
						  <Link className={selectors.footer_media_icon} to="/">
						    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m22 4-2 3c2 10-9 18-18 12l6-2c-5-1-7-7-5-12 2 3 6 4 9 4-1-4 4-7 7-4l3-1z"/></svg>
						  </Link>
						</li>
						<li>
  						<Link className={selectors.footer_media_icon} to="/">
	  					  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m22 4-2 3c2 10-9 18-18 12l6-2c-5-1-7-7-5-12 2 3 6 4 9 4-1-4 4-7 7-4l3-1z"/></svg>
		  			  </Link>
						</li>
				  </ul>
				</div>
				<section className={`fr-n-n-xxxxl ${selectors.footer_lists_container}`}>
					<div className="fc-n-n-m">
						<p className={selectors.footer_list_title}>Contacts</p>
            <ul className={`fc-n-n-xs ${selectors.footer_list_body}`}>
						  <li>
							  <Link to="#">+49123456789</Link>
						  </li>
						  <li>
							  <Link to="#">codehub@gmail.com</Link>
						  </li>
					  </ul>
					</div>
					<div className="fc-n-n-m">
						<p className={selectors.footer_list_title}>Pages</p>
            <ul className={`fc-n-n-xs ${selectors.footer_list_body}`}>
							<li>
							  <Link to="/about">About</Link>
						  </li>
						  <li>
							  <Link to="/documentation">Documentation</Link>
						  </li>
	  				</ul>
					</div>
				</section>
			</div>
			<p className={selectors.footer_copyright}>© All right reserver. Code Hub 2025 - 2030.</p>
		</footer>
	);
};