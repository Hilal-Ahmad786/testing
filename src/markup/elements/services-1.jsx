import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import bg2 from "../../images/background/bg2.png";

class ServicesSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">Bizim Hizmetler</h6>
								<h2 className="title mb-0">En iyi hizmeti veriyoruz</h2>
							</div>
							<div className="clearfix mt-md-20">
								<Link to="/services" className="btn btn-outline-light">Tüm Hizmetlerini Görüntüleyin</Link>
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Yurtdışı Reklam ve Markalaşma</h5>
										<p>İhtiyaçlara artan talepler neticesinde küreselleşen dünya üretiiciler için büyük bir pazaryeri haline gelmiştir. Gloabal dünyada Ülkelerdeki başarılı markaların çokluğu o ülkelerin imaj ve saygınlığının teminatıdır.</p>
										<Link to="/service-lube-oil-and-filters" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Uluslararası İş Geliştirme ve İhracat Danışmanlıği</h5>
										<p>Çağımızdakı rekabet ortamında firmaların sürdürülebilir olarak büyüyebilmeleri için dijital sistemleri iyi okumaları ve çağın sürekli değişen koşullarını iyi analiz etmeleri gerekmektedir.</p>
										<Link to="/service-brake-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-car-4"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Yurtdışı Rakıp Analızı</h5>
										<p>Hedef Pazarlara girmeden önce en verimli eylem planını hazırlamak rakipleri doğru analiz etmekten geçer.</p>
										<Link to="/service-tire-and-wheel-services" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-check-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Sağlık Turizmi Yurtdışı Pazarlama Danışmanlığı</h5>
										<p>Dünya sağlık turizmi son yılların en hızlı gelişen sektörlerinden biridir. Sağlık türizmi olarak seyahat edenlerin sayısı 10 Milyonu aşmış ve yıllık 100 Milyar USD lik bir ciroya ulaşmıştır.</p>
										<Link to="/service-belts-and-hoses" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-battery-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Yurt Dışı Pazar Araştırması</h5>
										<p>Hedef ülke pazarlarına girmeden önce kapsamlı bir şekilde yapılan Pazar Analizleri işletmenizde pazarlama, satış, fiyatlandırma da alacağınız yanlış kararların önüne geçer.</p>
										<Link to="/service-tire-and-wheel-services" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-paint"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Stratejik Yönetim ve Planlama</h5>
										<p>İhracat hedeflerimizin, Neresindeyiz ve Neresin de olmak istiyoruz? Olmak istediğimiz yere en hızlı, en inovatif ve en doğru şekilde nasıl ualşırız.</p>
										<Link to="/service-air-conditioning" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-repair-1"></i> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">******</h5>
										<p>------------------------------------------------------------------------------------------------------------------------------------------------</p>
										<Link to="/service-tire-and-wheel-services" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-engine"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">*******</h5>
										<p>-----------------------------------------------------------------------------------------------------------------------------------------------------------</p>
										<Link to="/service-engine-diagnostics" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default ServicesSection;