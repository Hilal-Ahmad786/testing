import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";

class ContactUs extends Component {

	render() {
		return (
			<>

				<Header />

				<div className="page-content bg-white">

					<div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + bnrImg + ")" }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>İletişim</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">İletişim</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>

					<section className="section-area section-sp1">
						<div className="container">
							<div className="heading-bx mb-20">
								<h6 className="title-ext text-primary">İletişim Bilgileri</h6>
								<h2 className="title mb-0">Her hangı konuda bilgi alabilmek<br />için bizimle irtibata geçin</h2>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-6">
									<div className="icon-box">
										<h6 className="title"><i className="ti-map-alt"></i>Türkiye Ofisler</h6>
										<p>Göztepe Mah. Göksu Evleri Sitesi Nilüfer Sok. B4A Blok No: 37/1 34815</p>
										<p>Tel : 0850 550 84 77</p>
										<p>Fax : 0216 465 15 00</p>
										<p>Wp: +90 552 358 84 77</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-6">
									<div className="icon-box">
										<h6 className="title"><i className="ti-map-alt"></i>Avrupa Ofis</h6>
										<p>Str.TudorViano 33 A,Sect. 1 Bucuresti</p>
										<p>Tel : +40738862928</p>
							
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-box">
										<h6 className="title"><i className="ti-map-alt"></i>Rusya Ofisi:</h6>
										<p>1-ıy NovokuznetskiyPereulok 5-7 Moscow</p>
										<p>Tel : +7 925 409 45 44</p>
										<p>Mail: b2b@spaceecs.com</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div className="section-area">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch d-flex"
							style={{ width: "100%", minHeight: "450px" }} title="map" allowfullscreen></iframe>
					</div>

					<section className="section-area section-sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<form className="contact-form ajax-form" action="script/contact.php">
										<div className="heading-bx mb-20">
											<h6 className="title-ext text-primary">Contact Form</h6>
											<h2 className="title mb-0">DO YOU HAVE ANY<br /> QUESTIONS</h2>
										</div>
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="form-group">
													<div className="input-group">
														<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name" />
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="form-group">
													<div className="input-group">
														<input name="email" type="email" className="form-control" required placeholder="Your Email Address" />
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-12">
												<div className="form-group">
													<div className="input-group">
														<input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone" />
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg"> Send Message</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>

				</div>

				<Footer />

			</>
		);
	}
}

export default ContactUs;