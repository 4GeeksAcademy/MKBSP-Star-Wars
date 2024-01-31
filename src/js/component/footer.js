import React, { Component } from "react";
import img8029 from '../../img/img_8029.png';

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="row">
			<div className="col">
				<p>We only have the fun we make ourselves</p>

			</div>
			<div className="col">
				<img src={img8029} alt="Star Wars Meme" style={{ maxHeight: '150px' }} />
				
			</div>
		</div>
	</footer>
);
