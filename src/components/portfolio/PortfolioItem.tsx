import React from 'react';
import Button from '../ui/button';
import classes from './portfolio-item.module.css';
import DateIcon from '../icons/date-icon';
import InformationIcon from '../icons/information-circle';
import ArrowRightIcon from '../icons/arrow-right-icon';
import { Portfolio } from '../../types/portfolio';
import Image from 'next/image';

interface Props {}

export default function PortfolioItem({ title, image, date, id, linkUrl, description }: Portfolio) {
  const humanReadableDate = new Date(date).toLocaleDateString('ko-KR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={classes.item}>
      <Image src={image} alt={title} width={100} height={100} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.description}>
          <InformationIcon />
          <span>{description}</span>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.actions}>
          <Button link={linkUrl}>
            <span>Go to Project</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
