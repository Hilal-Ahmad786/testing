import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import bg1 from "../../images/background/bg1.png";
import pic1 from "../../images/about/pic1.jpg";

class AboutUsOneSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp1 bg-white" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:"no-repeat"}}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5 mb-40">
								<div className="heading-bx mb-4">
									<h6 className="title-ext text-primary">BİZ KİMMİZ</h6>
									<h2 className="title">Biz çalıştığı partnerlerine uluslararası markalaşma süreçlerinde yol arkadaşlığı yapmaktadır. </h2>
									<p>Sağlık turizminde reklam ve markalaşma olarak başladığı yolculuğunda bir çok büyük çaplı hastaneye ile çalışmış ve 2015 tarihinde KOSGEB destek programlarından yararlanarak uluslararası kendi markasını oluşturarak ihracat yapmaya başlamıştır.
Yıllar içerisinde kazandığı bu tecrübeyle uluslararası marka olmak isteyen tüm firmalara çözüm ortağı olmayı vizyon edinmiştir.
Bünyesinde oluşturmuş olduğu www.madeintur .com B2B site ile ile Made In Turkey etiketine sahip tüm üreticileri minimum maliyetle uluslararası pazarlarda pozitif rekabetçi ve en kolay ulaşılabilirlik adımlarıyla görünebilir hale getirmeyi hedeflemektedir. Ülkemizin uluslararası pazarlarda daha aktif rol alabilmesi ve firmaların daha fazla ulaşılabilir olması  için üretici ile B2B sitemizin el birliğiyleler bu platformu destekleyerek büyüteceğinden emindir..
</p>
								</div>
								<Link to="/about-1" className="btn btn-primary">BİZ KİMMİZ</Link>
							</div>
							<div className="col-lg-7 mb-30">							
								<div className="about-media">
									<div className="media">
										<img src={pic1} alt=""/>
									</div>
									<div className="about-contact bg-primary text-white">
										<h6 className="title-ext text-white">WANT TO TALK?</h6>
										<h3 className="number mb-15 text-white">+90 552 358 84 77 </h3>
										<p className="mb-20">Need a special repair service? we are happy to fulfil every request in order to exceed your expe</p>
										<Link to="/booking" className="btn btn-light">BOOK AN APPOINTMENT</Link>
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

export default AboutUsOneSection;