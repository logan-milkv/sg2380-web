import React, { useRef } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import DecomposedView from '@site/src/components/DecomposedView';
import ScrollingAnimation from '@site/src/components/ScrollingAnimation';
import SupportUs from '@site/src/components/SupportUs';

const logo_list = require('@site/src/json-data/logo-walls.json');

export default function Home() {
  const videoRef = useRef(null)
  const videoBoxRef = useRef(null)

  return (
    <Layout>
      <main className={styles.sg_main}>
        <div className={styles.sg_page_head}>
          <div className={styles.head_title}>
            <div className={styles.title_box}>
              <p>Empower Your<br /> Day with</p>
              <p>AI</p>
            </div>
          </div>
          <div className={styles.sg_about}>
            <p>ABOUT SG2380</p>
            <div>
              <h1>
                A Small Step in Open Source, a Giant Leap for RISC-V<br />
                The first high-performance RISC-V processor designed for personal computing marks a new milestone in the adoption of open-source technology in the computing industry.
              </h1>
              <Link className={styles.lern_more} to='https://github.com/milkv-oasis/oasis-files/blob/main/sg2380/SG2380%20Product%20Brief%20V1.4.pdf'>
                Product Brief
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="#D45900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sg_chip_info}>
          <ol className={styles.text_card}>
            <li>
              <p>The first high-performance RISC-V processor designed for the personal computer</p>
              <p>Achieving a new milestone in the computing field with open-source technology.</p>
            </li>
            <li>
              <p>An intelligent processor integrating high-performance RISC-V cores, desktop-grade GPU, and TPU advanced computing capabilities</p>
              <p>Meeting the needs of GenAI and multimedia applications, enabling the smooth and seamless operation of complex models and algorithms.</p>
            </li>
            <li>
              <p>Superior computing power, bandwidth, and capacity delivering unparalleled local large language model performance</p>
              <p>Efficiently accomplishing machine learning tasks such as natural language processing, image generation, and text generation.</p>
            </li>
          </ol>
          <DecomposedView />
          <div className={styles.sg_application} id='Application-Scenarios'>
            <h2 className={styles.items_title}>Application Scenarios</h2>
            <p><font>AIPC:</font> Leading Intelligent Innovation.</p>
            <p><font>AI+NAS:</font> Integrating Data Intelligence.</p>
            <p><font>Android Applications:</font> Innovate with Convenience and Enjoyment.</p>
          </div>
          <div className={styles.sg_application_video}>
            <div ref={videoRef}>
              <div ref={videoBoxRef}
                onClick={() => {
                  videoRef.current.style.transform = `translateX(0px)`
                }}
              >
                <video id="sg2380-video01" src='/video/anime1.mp4' autoPlay loop muted  ></video>
              </div>
              <div onClick={() => {
                let v_max = videoBoxRef.current.offsetWidth
                let v_min = videoRef.current.offsetWidth
                videoRef.current.style.transform = `translateX(${v_max - v_min}px)`

              }}>
                <video id="sg2380-video02" src='/video/anime2.mp4' autoPlay loop muted  ></video>
              </div>
            </div>
          </div>
          <h2 className={styles.items_title} id='Specification'>Specification</h2>
          <div className={styles.black_box_padding}>
            <div className={styles.black_box}>
              <img src='/img/chip-view.webp' alt='Chip' />
              <ol className={styles.sp_list}>
                <li>
                  <h3>16-core SiFive P670 RISC-V 64bit CPU</h3>
                  <p></p>
                </li>
                <li>
                  <h3>16-core SiFive P670 RISC-V 64bit CPU</h3>
                  <p></p>
                </li>
                <li>
                  <h3>16-core SiFive P670 RISC-V 64bit CPU</h3>
                  <p></p>
                </li>
                <li>
                  <h3>16-core SiFive P670 RISC-V 64bit CPU</h3>
                  <p></p>
                </li>
                <li>
                  <h3>16-core SiFive P670 RISC-V 64bit CPU</h3>
                  <p></p>
                </li>
                <li>
                  <h3>16-core SiFive P670 RISC-V 64bit CPU</h3>
                  <p>a. 256bit DDR interface, maximum capacity 128GB</p>
                  <p>a. 256bit DDR interface, maximum capacity 128GB</p>
                  <p>a. 256bit DDR interface, maximum capacity 128GB</p>
                  <p>a. 256bit DDR interface, maximum capacity 128GB</p>
                  <p>a. 256bit DDR interface, maximum capacity 128GB</p>
                  <p>a. 256bit DDR interface, maximum capacity 128GB</p>
                </li>
              </ol>
            </div>
          </div>
          <h2 className={styles.items_title} id='Comparison'>Comparison</h2>
          <table className={styles.comparison_table}>
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th className={styles.highlight_text}>SG2380</th>
                <th>Apple M3 Pro</th>
                <th>AMD Ryzen 7 8840HS</th>
                <th>Intel Core Ultra 7 155H</th>
                <th>Qualcomm Snapdragon X Elite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">Memory Bus Width</td>
                <td className={styles.highlight_text}>256</td>
                <td>192</td>
                <td>128</td>
                <td>128</td>
                <td>128</td>
              </tr>
              <tr>
                <td colSpan="2">Memory Bandwidht (GB/s)</td>
                <td className={styles.highlight_text}>200</td>
                <td>153.2</td>
                <td>120</td>
                <td>120</td>
                <td>136</td>
              </tr>
              <tr>
                <td colSpan="2">Memory Capacity (GB)</td>
                <td className={styles.highlight_text}>128</td>
                <td>192</td>
                <td>128</td>
                <td>128</td>
                <td>128</td>
              </tr>
              <tr>
                <td colSpan="2" className={styles.last_td}>TPU/NPU TOPS</td>
                <td className={styles.highlight_text}>32TOPS INT8
                  16TFLOPS FP16</td>
                <td>35TFLOPS FP16</td>
                <td>16TOPS INT8</td>
                <td>11TOPS INT8</td>
                <td>45TOPS INT4</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.communal}>
            <h3>Towards RISC-V Unified Computing Power</h3>
            <ScrollingAnimation />
            <Link className={styles.communal_learn_more} to='https://community.milkv.io/c/oasis/'>Learn More</Link>
          </div>
        </div>
        <div className={styles.empower}>
          <h3>Empower Your Day with AI</h3>
          <p>Quality service you can trust</p>
        </div>
        <div className={styles.logo_list}>
          <h2 className={styles.items_title}>Towards RISC-V Unified Computing Power</h2>
          <div className={styles.logo_items}>
            {
              Object.keys(logo_list).map((item, key) => {
                return <Link key={key} to={logo_list[item].link_url}>
                  <img src={logo_list[item].logo} />
                </Link>
              })
            }
          </div>
        </div>
        <SupportUs />
      </main>
    </Layout>
  );
}
