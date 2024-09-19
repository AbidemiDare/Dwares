import React from "react";
import style from "./services.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <div>
      <section className={style.services}>
        <div className={style.serviceHead}>
          <h2 className={style.servicesHeader}>what we offer</h2>
          <div className={style.underline}></div>
        </div>

        <div className={style.servicesWrapper}>
          {/* single service */}
          <div className={style.service}>
            <Image
              className={style.serviceImg}
              src="/Images/offerOne.jpg"
              alt="delivery image"
              width={230}
              height={220}
            />
            <h4 className={style.serviceTitle}>Food delivery</h4>
          </div>
          {/* end of single service */}

          {/* single service */}
          <div className={style.service}>
            <Image
              className={style.serviceImg}
              src="/Images/offerTwo.jpg"
              alt="delivery image"
              width={230}
              height={220}
            />
            <h4 className={style.serviceTitle}>Food catering</h4>
          </div>
          {/* end of single service */}

          {/* single service */}
          <div className={style.service}>
            <Image
              className={style.serviceImg}
              src="/Images/offerThree.jpg"
              alt="delivery image"
              width={230}
              height={220}
            />
            <h4 className={style.serviceTitle}>Food consultancy</h4>
          </div>
          {/* end of single service */}
        </div>
      </section>
    </div>
  );
}
