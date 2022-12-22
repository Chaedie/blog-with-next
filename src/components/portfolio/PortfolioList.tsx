import React, { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import classes from './portfolio-list.module.css';
import { PORTFOLIO_LIST } from '../../data/portfolioData';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PortfolioList() {
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    AOS.init({ offset: 100 });
    setTimeout(() => {
      setGrow(true);
    }, 50);
  }, []);

  return (
    <ul className={classes.list}>
      {PORTFOLIO_LIST.map(portfolio => {
        const { id, type, title, description, date, image, imageWidth, imageHeight, linkUrl } = portfolio;
        return (
          <div key={id} data-aos="fade-up">
            <PortfolioItem
              id={id}
              type={type}
              title={title}
              description={description}
              date={date}
              image={image}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              linkUrl={linkUrl}
            />
          </div>
        );
      })}
    </ul>
  );
}
