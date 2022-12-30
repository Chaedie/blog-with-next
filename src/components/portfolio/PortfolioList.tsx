import React, { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import classes from './portfolio-list.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Portfolio } from '../../types/portfolio';

interface Props {
  portfolioList: Portfolio[];
}

export default function PortfolioList({ portfolioList }: Props) {
  useEffect(() => {
    AOS.init({ offset: 100 });
  }, []);

  return (
    <ul className={classes.list}>
      {portfolioList.map(portfolio => {
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
