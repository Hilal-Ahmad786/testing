import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import pic6 from "../../images/about/pic6.jpg";

class ChooseUsSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-white section-sp1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="choose-media">
									<img src={pic6} alt=""/>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx mb-30">
									<h6 className="title-ext text-primary">İNSANLAR NEDEN BİZİ SEÇİYOR</h6>
									<h2 className="title mb-0">NEDEN BİZİ SEÇİN</h2>
									<p>Müşterilerimize nokta atış ihracat yaptırmak için ticari istihbarat sistemlerimizle onlar için en doğru pazarları buluyor ve ihracat hedeflerine en hızlı biçimde ulaşmalarını sağlıyoruz. Çalışmaya başladığımız firmalarımızın mevcut konumlarını analiz ederek Company Profile listesini oluşturuyoruz. Geri dönüşümden aldığımız verilerle hedeflerine en uygun pazarlarda yol haritalarını belirleyerek nokta atış ihracat yapmalarını sağlıyoruz. </p>
								</div>
								<div className="progress-area">
									<div className="progress-box style1 appear">
										<div className="progress-info">
											<h6 className="title">Mevcut Durum Analizi</h6>
											<h6 className="progress-value">65%</h6>
										</div>
										<div className="progress">
											<div className="progress-bar bg-primary" style={{width: "65%"}}></div>
										</div>
									</div>
									<div className="progress-box style1 appear">
										<div className="progress-info">
											<h6 className="title">Hedef Pazar Rakip Analizi</h6>
											<h6 className="progress-value">85%</h6>
										</div>
										<div className="progress">
											<div className="progress-bar bg-primary" style={{width: "85%"}}></div>
										</div>
									</div>
									<div className="progress-box style1 appear">
										<div className="progress-info">
											<h6 className="title">Stratejik Planlama ve Yol Haritasının Oluşturulması</h6>
											<h6 className="progress-value">70%</h6>
										</div>
										<div className="progress">
											<div className="progress-bar bg-primary" style={{width: "70%"}}></div>
										</div>
									</div>
								</div>
								<Link to="/about-us" className="btn btn-primary">READ MORE</Link>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default ChooseUsSection;