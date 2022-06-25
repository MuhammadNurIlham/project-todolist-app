import React from 'react';
import { FaTwitter, FaWhatsapp, FaYoutube, FaGlobe, FaRegCopyright, FaRegEnvelope, FaLinkedin, FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa';

function testing() {
    alert("Masih dalam tahap Pengembangan😊😊\nAkan tersedia di update selanjutnya😉😉")
    alert("Silahkan klik Get Started untuk mencoba")
    alert("Good Luck🤗😉")
}

function Footer() {
    return (
        <div>
            <footer className='text-center pb-5 footer'>
                <div className='title-contact'>
                    Created with coffee by Muhammad Nurilham
                </div>
                {/* <div className='text-contact'>Contact</div> */}
                <div className='logo-contact' id='contact' >
                    <span className='twitter'>
                        <a href='#' onClick={testing} title='menuju halaman twitter'>
                            <FaTwitter size={21} />
                        </a>
                    </span>
                    <span className='linkedin'>
                        <a href='#' onClick={testing} title='menuju halaman linkedin'>
                            <FaLinkedin size={21} />
                        </a>
                    </span>
                    <span className='facebook'>
                        <a href='#' onClick={testing} title="menuju halaman facebook">
                            <FaFacebookSquare size={21} />
                        </a>
                    </span>
                    <span className='instagram'>
                        <a href='#' onClick={testing} title="menuju halaman instagram">
                            <FaInstagram size={21} />
                        </a>
                    </span>
                    <span className='youtube'>
                        <a href='#' onClick={testing} title='menuju halaman Youtube'>
                            <FaYoutube size={21} />
                        </a>
                    </span>
                    <span className='browser'>
                        <a href='#' onClick={testing} title='menuju halaman browser atau google'>
                            <FaGlobe size={21} />
                        </a>
                    </span>
                    <span className='email'>
                        <a href='#' onClick={testing} title='menuju halaman email'>
                            <FaRegEnvelope size={21} />
                        </a>
                    </span>
                    <span className='github'>
                        <a href='#' onClick={testing} title='menuju halaman github'>
                            <FaGithub size={21} />
                        </a>
                    </span>
                    <span className='whatsapp'>
                        <a href="#" onClick={testing} title="menuju halaman whatsapp">
                            <FaWhatsapp size={21} />
                        </a>
                    </span>
                </div>
                <div className='text-contact'><FaRegCopyright />2022 INFOSAYA.</div>
            </footer>
        </div>
    )
}



export default Footer;