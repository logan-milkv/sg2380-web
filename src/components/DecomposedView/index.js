import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
    const [index, setIndex] = useState(null)

    const img_data = [
        {
            src: '/img/block-6.webp',
            title: 'Hi-Speed Interface'
        },
        {
            src: '/img/block-5.webp',
            title: 'Display'
        },
        {
            src: '/img/block-4.webp',
            title: 'Codec'
        },
        {
            src: '/img/block-3.webp',
            title: 'TPU'
        },
        {
            src: '/img/block-2.webp',
            title: 'Desktop-grade Graphic Processor Unit'
        },
        {
            src: '/img/block-1.webp',
            title: 'RISC-V Processor'
        },
    ]

    return (
        <>
            <div className={styles.block_center}>
                {
                    img_data.map((item, key) => {
                        return <div className={clsx(styles.center_item, index === key ? styles.highlight_item : null)} key={key}>
                            <img src={item.src} className={styles.image_item} />
                            <p className={clsx(styles.position_text, styles[`position_text${key + 1}`])} >{item.title}</p>
                            <img src='/img/directional.svg' className={clsx(styles.directional, styles[`directional${key + 1}`])} />
                            <div className={clsx(styles.clip_ele, styles[`clip_item${key + 1}`])}
                                onMouseEnter={() => {
                                    setIndex(key)
                                }}
                                onMouseLeave={() => {
                                    setIndex(null)
                                }}
                            >
                            </div>
                        </div>
                    })
                }
            </div>
            <img src='/img/chips-view.webp' alt='Chip' className={styles.chip_view} />
        </>
    );
}
