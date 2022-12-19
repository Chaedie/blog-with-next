import React from 'react';
import PortfolioItem from './PortfolioItem';
import classes from './portfolio-list.module.css';

interface Props {}

export default function PortfolioList() {
  return (
    <ul className={classes.list}>
      {PORTFOLIO_LIST.map(portfolio => {
        const { id, title, description, date, image, linkUrl } = portfolio;
        return (
          <PortfolioItem
            key={id}
            id={'1'}
            title={title}
            description={description}
            date={date}
            image={image}
            linkUrl={linkUrl}
          />
        );
      })}
    </ul>
  );
}

const PORTFOLIO_LIST = [
  {
    id: '1',
    title: 'Simple Todo List',
    description: '기술 스택 학습을 위한 장난감 프로젝트',
    date: '2022-10',
    image: 'https://user-images.githubusercontent.com/88099590/203834370-68fd5cb3-c250-490a-ade9-cf66d8414836.gif',
    linkUrl: 'https://github.com/Chaedie/simple-todo-list',
  },
];
