import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';

function Footer() {
  const [isIconVisible, setIconVisible] = useState(false);
  const [isBoxVisible, setBoxVisible] = useState(false);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const iconTimeout = setTimeout(() => {
      setIconVisible(true);
    }, 1500);
    return () => clearTimeout(iconTimeout);
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const boxTimeout = setTimeout(() => {
      setBoxVisible(true);
    }, 3000);
    return () => clearTimeout(boxTimeout);
  }, []);

  return (
    <div className="footer">
      <motion.div
        className="icon"
        initial="hidden"
        animate={isIconVisible ? "visible" : "hidden"}
        variants={iconVariants}
        transition={{ duration: 1,delay:1, ease: "easeInOut" }}
      >
        <a href='https://www.youtube.com/channel/UCk-TVhY9WYJFC_CI69Eznqw'><Icon name="youtube" /></a>
        <a href='https://twitter.com/hy3n41'><Icon name="twitter" /></a>
        <a href='https://allmylinks.com/hy3n4'><Icon name="global" /></a>
      </motion.div>
      <motion.div
        className="box"
        initial="hidden"
        animate={isBoxVisible ? "visible" : "hidden"}
        variants={boxVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isBoxVisible ? "visible" : "hidden"}
          variants={boxVariants}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        >
          <div className="rank">
            <div className="description">
              <motion.img
                src="https://tryhackme-badges.s3.amazonaws.com/hy3n4.png"
                alt="TryHackMe"
                initial={{ opacity: 0 }}
                animate={isBoxVisible ? "visible" : "hidden"}
                variants={boxVariants}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isBoxVisible ? "visible" : "hidden"}
                variants={boxVariants}
                transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
              >
                Copyright © 2021 - Giuseppe D'Alberti Mastodon
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Footer;
