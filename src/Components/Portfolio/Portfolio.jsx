import React, { useState } from "react";
import './Portfolio.css';
import { PORTFOLIO } from "../../Data/data";

const Portfolio = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State untuk menyimpan indeks gambar yang dipilih dalam pop up
    const [selectedImage, setSelectedImage] = useState(null); // State untuk menyimpan URL gambar yang dipilih dalam pop up

    const handleImageClick = (imageUrl, index) => {
        setSelectedImage(imageUrl); // Menyimpan URL gambar yang dipilih saat gambar diklik
        setSelectedImageIndex(index); // Menyimpan indeks gambar yang sedang ditampilkan dalam pop up
    };

    const handleClosePopup = () => {
        setSelectedImage(null); // Menutup pop up dengan menghapus URL gambar yang dipilih
    };

    const handleNextImage = () => {
        const nextIndex = (selectedImageIndex + 1) % PORTFOLIO[0].job.length;
        setSelectedImage(PORTFOLIO[0].job[nextIndex].icon);
        setSelectedImageIndex(nextIndex);
    };

    const handlePreviousImage = () => {
        const previousIndex = (selectedImageIndex - 1 + PORTFOLIO[0].job.length) % PORTFOLIO[0].job.length;
        setSelectedImage(PORTFOLIO[0].job[previousIndex].icon);
        setSelectedImageIndex(previousIndex);
    };

    return (
        <section id="porto-gd" className="porto-container">
        <div className="porto-cont">
            <h5>Portfolio</h5>
            <h6>Graphic Design</h6>

            <div>
                {PORTFOLIO.map((portfolio, index) => (
                    <div key={index}>
                        {portfolio.job.map((job, jobIndex) => (
                            <div className="porto-content" key={jobIndex}>
                                {/* Menggunakan onClick untuk menampilkan pop up saat gambar diklik */}
                                <img 
                                    src={job.icon} 
                                    alt={`Job ${jobIndex}`} // Menggunakan indeks untuk alt jika diperlukan
                                    onClick={() => handleImageClick(job.icon, jobIndex)} 
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Menampilkan pop up saat ada gambar yang dipilih */}
            {selectedImage && (
                <div className="popup">
                    <span className="close" onClick={handleClosePopup}>&times;</span>
                    <button className="prev" onClick={handlePreviousImage}>&#10094;</button>
                    <img src={selectedImage} alt="Selected Image" />
                    <button className="next" onClick={handleNextImage}>&#10095;</button>
                </div>
            )}
        </div>
        </section>
    );
}

export default Portfolio;
