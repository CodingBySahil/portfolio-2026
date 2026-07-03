import React from 'react';
import styles from './heroSection.module.scss';
import bannerImage from '../assets/banner.svg';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import { FaLinkedinIn } from 'react-icons/fa';
import linkedin from '../assets/icon-linkedin.svg';
import sketch from '../assets/icon-sketch.svg';
import figma from '../assets/icon-figma.svg';
import { SquareButton } from '@/components/shared/StyledComponents';

const HeroSection = () => {
    return (
        <section className={styles.container} id='hero'>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>BUILDING MODERN WEB EXPERIENCES</h3>
                <h1>
                    Hi, I’m <span className={styles.name}>Muhammad Sahil</span> <br />
                    a <span>Full Stack MERN Developer</span>
                </h1>
                <p className={styles.description}>
                    I create scalable, secure, and responsive web applications
                    using React, Next.js, Node.js, and MongoDB. I also teach
                    web development, AI, and programming fundamentals.
                </p>

                <div className={styles.buttonContainer}>
                    <div className={styles.socialBtn}>
                        <p>CONNECT WITH ME</p>
                        <SquareButton href='#'>
                            <FaFacebookF size={20} />
                        </SquareButton>
                        <SquareButton href='#'>
                            <CiTwitter size={20} />
                        </SquareButton>
                        <SquareButton href='#'>
                            <FaLinkedinIn size={20} />
                        </SquareButton>
                    </div>

                    <div className={styles.skillBtn}>
                        <p>TOP SKILLS</p>
                        <SquareButton href='#'>
                            <Image
                                src={linkedin}
                                alt='LinkedIn icon'
                                width={20}
                                height={20}
                            />
                        </SquareButton>
                        <SquareButton href='#'>
                            <Image src={sketch} alt='Skills icon' width={20} height={20} />
                        </SquareButton>
                        <SquareButton href='#'>
                            <Image src={figma} alt='Tools icon' width={20} height={20} />
                        </SquareButton>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.inner}>
                    <Image src={bannerImage} alt='portfolio banner illustration' />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
