import React, { useState, useEffect } from 'react'
import '../css/header.css';
import HamburgerMenu from '../svg/hamburger-menu.svg';
import CloseMenu from '../svg/close-menu.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);



    useEffect(() => {
        function changeWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth)

    }, [])


    return (
        <>
            <div className='header'>
                <div className='header-wrapper'>
                    <motion.h1
                        animate={{ y: [-100, 0] }}
                        transition={{ duration: 0.5 }}
                        id='website-name'>PostMate</motion.h1>
                    <div id=''>
                        {isOpen ?
                            <motion.div className='menu-open' style={{ fontSize: width < 600 ? '15px' : '', gap: width < 600 ? '15px' : '' }}>
                                <motion.h3 animate={{ x: [400, 0] }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={{cursor:'pointer'}}>Home</motion.h3>
                                <Link to='/post' id='add-post'><motion.h3 animate={{ x: [300, 0] }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={{cursor:'pointer'}}>Add Post</motion.h3></Link>
                                <motion.h3 animate={{ x: [200, 0] }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={{cursor:'pointer'}}>About</motion.h3>
                                <motion.img src={CloseMenu}   style={{cursor:'pointer'}} onClick={() => setIsOpen(!isOpen)} draggable='false'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.8 }}
                                    initial={{ x: 50 }}
                                    animate={{ x: 0, rotate: 180 }}
                                    transition={{ duration: 0.5 }}></motion.img>
                            </motion.div>
                            : <motion.img
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                                initial={{ x: 50 }}
                                animate={{ x: 0, rotate: 180 }}
                                style={{cursor:'pointer'}}
                                transition={{ type: 'spring', stiffness: 100, duration: 1 }} src={HamburgerMenu} onClick={() => setIsOpen(!isOpen)} draggable='false'></motion.img>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
