"Use client";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import style from "./hero.module.css";
import { motion } from "framer-motion";

interface heroProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

const Hero: React.FC<heroProps> = ({ handleSearch, searchQuery }) => {
  return (
    <div>
      <section className={style.heroSection}>
        <div className={style.heroWrapper}>
          <div className={style.heroInfo}>
            <motion.h1
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                type: "spring",
                stiffness: 120,
              }}
            >
              Your home of quality <span>wares</span>
            </motion.h1>
            <div className={style.heroSearch}>
              <input
                type="search"
                name="search"
                id="search"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="search for an item..."
              />
              <button type="submit" className={style.heroSearchBtn}>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={style.socialHandles}>
        <div className={style.socialWrapper}>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
