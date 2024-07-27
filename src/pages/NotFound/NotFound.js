import React, { useEffect } from 'react';
import Header from "../../components/Header/Header";
import './noutfound.css';


export default function NotFound() {


    useEffect(() => {
        const lemon = document.querySelector('.lemon');
        const handleClick = () => {
            lemon.style.animation = 'none';
            setTimeout(() => {
                lemon.style.animation = '';
            }, 10);
        };

        if (lemon) {
            lemon.addEventListener('click', handleClick);
        }

        return () => {
            if (lemon) {
                lemon.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return (
        <>
            <Header />
            <div className="not-found-container">
                <div className="lemon"></div>
                <h1 className="not-found-title">Oops! 404</h1>
                <p className="not-found-text">Looks like this page is a lemon!</p>
                <p className="not-found-text">Don't worry, our menu is still fresh and zesty!</p>
                <a href="/" className="home-button">Back to Home</a>
            </div>
        </>
    );
}