import React from "react";
import Image from "next/image";
import styles from "./MoreButton.module.css"

export default function MoreButton({title , varient}) {
  return (
    <>
      {/* <!-- more projecets --> */}
      <div className="flex items-center justify-center">
        <a href="#" className={` ${styles.moreButtonWrapper} ${varient==="dark" ? styles.dark : styles.light}`}>
          <p>{title}</p>
          <div className=" py-4 px-6  rounded-3xl flex items-center justify-center">
            <Image width={16} height={16} src="/images/Vector 190.svg" alt="arow" />
          </div>
        </a>
      </div>
    </>
  );
}
