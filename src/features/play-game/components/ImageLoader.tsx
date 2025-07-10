import React, { useState } from "react";
import styles from "./ImageLoader.module.css";
type Props = {
  cardUrl: string;
};

export const ImageLoader: React.FC<Props> = ({ cardUrl }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className={styles.imageLoader}>
        {loading && <span className={styles.loader}></span>}
        <img
          className={styles.imgCard}
          src={cardUrl}
          alt=""
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </div>
    </>
  );
};
