import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Elements
import Count from '../elements/counter-sensor';

// Images
import bg2 from "../../images/background/bg1.png";
import aboutPic2 from "../../images/about/pic2.jpg";

class AboutUsTwoSection extends Component {

	constructor() {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal() {
		this.setState({ isOpen: true })
	}

	render() {
		return (
			<>

				<section className="section-area section-sp1 bg-white" style={{ backgroundImage: "url(" + bg2 + ")", backgroundRepeat: "no-repeat" }}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30 mb-md-50">
								<div className="heading-bx">
									<h6 className="title-ext text-primary">HAKKIMIZDA</h6>
									<h2 className="title">Biz çalıştığı partnerlerine uluslararası markalaşma süreçlerinde yol arkadaşlığı yapmaktadır.</h2>
									<p>SpaceECS nin temelleri 2008 tarihine dayanmakta olup çalıştığı partnerlerine uluslararası markalaşma süreçlerinde yol arkadaşlığı yapmaktadır. Sağlık turizminde reklam ve markalaşma olarak başladığı yolculuğunda bir çok büyük çaplı hastaneye ile çalışmış ve 2015 tarihinde KOSGEB destek programlarından yararlanarak uluslararası kendi markasını oluşturarak ihracat yapmaya başlamıştır.
										Yıllar içerisinde kazandığı bu tecrübeyle uluslararası marka olmak isteyen tüm firmalara çözüm ortağı olmayı vizyon edinmiştir.
										Bünyesinde oluşturmuş olduğu www.madeintur .com B2B site ile ile Made In Turkey etiketine sahip tüm üreticileri minimum maliyetle uluslararası pazarlarda pozitif rekabetçi ve en kolay ulaşılabilirlik adımlarıyla görünebilir hale getirmeyi hedeflemektedir. Ülkemizin uluslararası pazarlarda daha aktif rol alabilmesi ve firmaların daha fazla ulaşılabilir olması  için üretici ile B2B sitemizin el birliğiyleler bu platformu destekleyerek büyüteceğinden emindir..
										Firmaların uluslararası markalaşma süreçlerini en baştan süreç sonuçlanıncaya kadar Ekonomi Bakanlığımız desteklemektedir.
										Biz SpaceECS  olarak çalıştığımız tüm partnerlerimizin teşvik süreçlerini firma adına yönetmekte en verimli ve sürdürülebilir sonuçları almalarını sağlamaktayız.
										Temelde uluslararasında markanızı güçlendirmek ve sektörünüzdeki rakiplerinizde rekabetçi üstünlüğe ulaşmanız için çalışmaktayız.
										Firma farklılıklarınızı vurgulayarak güçlü taraflarınızın fark edilmesini  sağlayıp, ihracatta yaşadığınız çok yönlü ihtiyaçlarınıza bütünsel  çözümler üretiriz.

									</p>
								</div>
								<div className="row">
									<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={25} />
													<span>K</span>
												</h2>
											</div>
											<h5 className="counter-text">SATISFIED CLIENTS</h5>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={35} />
													<span>+</span>
												</h2>
											</div>
											<h5 className="counter-text">WINNING AWARDS</h5>
										</div>
									</div>
									<div className="col-xl-4 col-lg-12 col-md-4 col-sm-12">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={180} />
													<span>+</span>
												</h2>
											</div>
											<h5 className="counter-text">COMPLETED WORKS</h5>
										</div>
									</div>
								</div>
								<div className="mt-15 mt-md-0">
									<Link to="/contact-1" className="btn btn-primary me-3">Contact Us</Link>
									<Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="about-imgbox">
									<img src={aboutPic2} alt="" />
									<div className="about-year">
										<h2 className="count"><Count counter={20} /> +</h2>
										<h6 className="text">Year In industry</h6>
										<Link to="#" onClick={this.openModal} className="popup-youtube videoplay-bx d-block">
											<i className="fa fa-play"></i>
											<span>Play Video</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='PkkV1vLHUvQ' onClose={() => this.setState({ isOpen: false })} />

			</>
		);
	}
}

export default AboutUsTwoSection;