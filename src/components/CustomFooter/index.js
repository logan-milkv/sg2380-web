import React from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

// 主题配置
import { useThemeConfig } from '@docusaurus/theme-common';



export default () => {
    const { footer } = useThemeConfig();

    return <footer className={styles.new_footer}>
        <p>Built with ️❤️ by Milk-V</p>
        <div className={styles.footer_links}>
            <p>Sales Department:<Link href='mailto:sales@milkv.com?subject=Hello Milk-V!'>sales@milkv.io</Link></p>
            <div>
                <Link>About SOPHGO</Link>
                <span>|</span>
                <Link to='https://milkv.io/about'>About Milk-V</Link>
            </div>
        </div>
    </footer>

}