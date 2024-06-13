import React from "react";
import styles from './index.module.css';
const scroll_data = require('@site/src/json-data/community-comments.json')

export default () => {
    return <div className={styles.scroll_box}>

        {
            Object.keys(scroll_data).map((line, key) => {
                let __t
                if (scroll_data[line].lenght / 2 > 2) {
                    __t = '25s'
                } else {
                    __t = '15s'
                }

                return <div className={styles.scroll} style={{ "--t": __t }} key={key}>
                    <div>
                        {
                            scroll_data[line].map((item, index) => {
                                return <div key={index} className={styles.items_avatar}>
                                    <img src={item.avatar} />
                                    {item.text}
                                </div>
                            })
                        }
                    </div>
                    <div>
                        {
                            scroll_data[line].map((item, index2) => {
                                return <div key={index2} className={styles.items_avatar}>
                                    <img src={item.avatar} />
                                    {item.text}
                                </div>
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>
}