import { MagicCardsRow } from "./style";
import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const cards = [
  "https://www.springboard.com/blog/wp-content/uploads/2022/09/entry-level-programmer-jobs.jpg",
  "https://www.appstudio.ca/blog/wp-content/uploads/2020/09/Modern-Software-Development.jpg",
  "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_02-2-850x412.jpg",
  "https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png",
  "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/8653961_how%20to%20become%20a%20programer%202.jpg",
  "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb",
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;
function MagicCards() {
  const { t } = useTranslation();

  function Deck() {
    const [gone] = useState(() => new Set());
    const [props, api] = useSprings(cards.length, (i) => ({
      ...to(i),
      from: from(i),
    }));
    const bind = useDrag(
      ({
        args: [index],
        down,
        movement: [mx],
        direction: [xDir],
        velocity,
      }) => {
        const trigger = velocity > 0.2;
        const dir = xDir < 0 ? -1 : 1;
        if (!down && trigger) gone.add(index);
        api.start((i) => {
          if (index !== i) return;
          const isGone = gone.has(index);
          const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
          const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
          const scale = down ? 1.1 : 1;
          return {
            x,
            rot,
            scale,
            delay: undefined,
            config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
          };
        });
        if (!down && gone.size === cards.length)
          setTimeout(() => {
            gone.clear();
            api.start((i) => to(i));
          }, 600);
      }
    );
    return (
      <>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className={styles.deck} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
                textAlign: "center",
              }}
            />
          </animated.div>
        ))}
      </>
    );
  }
  return (
    <>
      <MagicCardsRow>
        <div className="container">
          <div className="magic-row">
            <h1>{t("MagicCards.title")}</h1>
            <h4>{t("MagicCards.text")}</h4>
          </div>
          <div className={styles.deck_row}>
            <Deck />
          </div>
          <div className="buttons">
            <NavLink>
              <Button>{t("MagicCards.view_all")}</Button>
            </NavLink>
          </div>
        </div>
      </MagicCardsRow>
    </>
  );
}

export default MagicCards;
