import React, { useEffect, useRef, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import classes from './portfolio-list.module.css';
import { Collapse } from '@mui/material';
import { PORTFOLIO_LIST } from '../../data/portfolioData';

export default function PortfolioList() {
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setGrow(true);
    }, 50);
  }, []);

  return (
    <Collapse in={grow}>
      <ul className={classes.list}>
        {PORTFOLIO_LIST.map(portfolio => {
          const { id, type, title, description, date, image, imageWidth, imageHeight, linkUrl } = portfolio;
          return (
            <PortfolioItem
              key={id}
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
          );
        })}
      </ul>
    </Collapse>
  );
}
