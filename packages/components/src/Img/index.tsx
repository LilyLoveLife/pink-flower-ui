/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-07-05 11:43:38
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-07-07 11:03:19
 * @FilePath: /theseus-cooperation/Users/hrtps/Documents/Projects/pink-flower-ui/packages/components/src/Img/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Icon from "../assets/React.svg";
import styles from "./index.module.scss";

const List: React.FC = () => {
  return (
    <div>
      <img src={Icon} className={styles.img} alt="img" />
    </div>
  );
};
export default List;
