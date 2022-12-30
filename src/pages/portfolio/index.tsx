import path from 'path';
import fs from 'fs/promises';

import PortfolioList from '../../components/portfolio/PortfolioList';
import { Portfolio } from '../../types/portfolio';

interface Props {
  portfolioList: Portfolio[];
}

export default function PortfolioPage({ portfolioList }: Props) {
  return (
    <>
      <PortfolioList portfolioList={portfolioList} />
    </>
  );
}

export async function getStaticProps() {
  async function getPortFolios() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'portfolioData.json');
    const json = await fs.readFile(filePath);
    const { portfolioList }: { portfolioList: Portfolio[] } = JSON.parse(json as unknown as string);

    return portfolioList.sort((a, b) => b.date.localeCompare(a.date));
  }

  return {
    props: { portfolioList: await getPortFolios() },
  };
}
