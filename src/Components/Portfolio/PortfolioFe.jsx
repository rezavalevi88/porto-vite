import React, { useState } from "react";
import './Portfolio.css';
import { PORTFOLIOFE } from "../../Data/data";

const PortfolioFe = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // State untuk menyimpan indeks gambar yang dipilih

    const handleImageClick = (index) => {
        setSelectedImageIndex(index); // Menyimpan indeks gambar yang diklik
    };

    return (
        <section id="porto-fe" className="porto-container">
        <div className="porto-cont">
            <h6>Frontend</h6>

            <div className="portfolio-images">
                {PORTFOLIOFE.map((portfoliofe, index) => (
                    <div key={index}>
                        {portfoliofe.job.map((job, jobIndex) => (
                            <div className="porto-content-fe">
                                {/* Menggunakan onClick untuk menetapkan indeks gambar yang dipilih saat gambar diklik */}
                                <a href="https://rezavalevi88.github.io/republik-project/" target="_blank" rel="#">
                                    <img 
                                        src={job.icon} 
                                        alt={`Job ${jobIndex}`} // Menggunakan indeks untuk alt jika diperlukan
                                        onClick={() => handleImageClick(jobIndex)} 
                                    />
                                    <p>Live Demo : {job.link}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default PortfolioFe;
