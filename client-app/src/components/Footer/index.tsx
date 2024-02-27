/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '../Container';
import { logo_2 } from '../../assets/home';
import { Link } from 'react-router-dom';

interface LinkData {
    name: string;
    to: string;
}

const companyLinks: LinkData[] = [
    { name: 'Events', to: '/about-us' },
    { name: 'About Us', to: '/about-us' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'FAQs', to: '/faqs' },
    { name: 'Terms and Conditions', to: '/terms' },
    { name: 'Privacy Policy', to: '/privacy' },
    { name: 'Careers', to: '/careers' },
];

const connectLinks: LinkData[] = [
    { name: 'Twitter', to: '/twitter' },
    { name: 'Facebook', to: '/facebook' },
    { name: 'Instagram', to: '/facebook' },
    { name: 'Linkedin', to: '/linkedin' },
    { name: 'Youtube', to: '/youtube' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#212121] py-14 text-white">
            <Container>
                <div className="grid lg:place-items-start sm:place-items-center sm:text-left text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <img src={logo_2} alt="Eventify" className="w-34 h-28 place-self-center" />
                    <div className="sm:mt-0 mt-14">
                        <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">company</h1>
                        <ul>
                            {companyLinks.map((link) => (
                                <li key={link.name}><Link to={link.to}>{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">browser</h1>
                        <ul>
                            {connectLinks.map((link) => (
                                <li key={link.name}><Link to={link.to}>{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">Subscribe to our newsletter</h1>
                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-2 rounded"
                            />
                            <button
                                type="submit"
                                className="bg-button-primary hover:bg-button-primary-hover text-white font-bold py-2 px-4 rounded"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
