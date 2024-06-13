import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

// 主题配置
import { useThemeConfig } from '@docusaurus/theme-common';
import clsx from 'clsx';

export default () => {
    const { navbar } = useThemeConfig();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const currentPosition = window.scrollY;
            setIsVisible(scrollPosition > currentPosition);
            setScrollPosition(currentPosition);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition, setIsVisible]);
    const hideShowClassName = isVisible ? styles.scroll_hide : styles.scroll_show;

    return <>
        <nav className={clsx(styles.sg_navbar, hideShowClassName)}>
            <div className={styles.sg_navbar_center}>
                <Link to='/' title={navbar.logo.alt} >
                    <img src={navbar.logo.src} />
                </Link>
                <ol>
                    {navbar.items.map((item, index) => {
                        return <li key={index}>
                            <Link to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    })}
                </ol>
            </div>
        </nav>
    </>
}