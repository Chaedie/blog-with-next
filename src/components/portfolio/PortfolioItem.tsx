import React from 'react';
import StyledButton from '../ui/button';
import classes from './portfolio-item.module.css';
import DateIcon from '../icons/date-icon';
import InformationIcon from '../icons/information-circle';
import ArrowRightIcon from '../icons/arrow-right-icon';
import { Portfolio } from '../../types/portfolio';
import Image from 'next/image';
import { Button } from '@mui/material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

interface Props {}

export default function PortfolioItem({
  title,
  image,
  imageWidth,
  imageHeight,
  date,
  type,
  id,
  linkUrl,
  description,
}: Portfolio) {
  const humanReadableDate = new Date(date).toLocaleDateString('ko-KR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={classes.item}>
      <Image src={image} alt={title} width={imageWidth} height={imageHeight} priority={true} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.type + ' ' + classes[typeStyle(type)]}>
          <StickyNote2Icon />
          <span>{type}</span>
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
          <StyledButton link={linkUrl}>
            <span>Go to Project</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </StyledButton>
        </div>
      </div>
    </li>
  );
}

const typeStyle = (type: string) => {
  if (type === '개인 프로젝트') {
    return 'secondary';
  } else if (type === 'Front-End Challenge') {
    return 'primary';
  }
  return 'primary';
};
