import React, { useEffect, useRef, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import classes from './portfolio-list.module.css';
import { Collapse } from '@mui/material';

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

const PORTFOLIO_LIST = [
  {
    id: '1',
    type: '개인 프로젝트',
    title: 'Simple Todo List',
    description: '기술 스택 학습을 위한 장난감 프로젝트',
    date: '2022-10',
    image: 'https://user-images.githubusercontent.com/88099590/203834370-68fd5cb3-c250-490a-ade9-cf66d8414836.gif',
    imageWidth: 100,
    imageHeight: 100,
    linkUrl: 'https://github.com/Chaedie/simple-todo-list',
  },
  {
    id: '2',
    type: 'Front-End Challenge',
    title: 'Card Component',
    description: 'HTML/CSS 챌린지 - Newbie Level',
    date: '2022-12',
    image: 'https://user-images.githubusercontent.com/88099590/208877180-57c19fa3-5193-4821-a6cf-b236869a8b36.png',
    imageWidth: 600,
    imageHeight: 600,
    linkUrl:
      'https://front-end-mentor-challenge-inky.vercel.app/1-newbie/1-product-preview-card-component-main/index.html',
  },
].reverse();
