import Content1, { ContentIcon01 } from './containers/Content1/Content1';
import Content2, { ContentIcon02 } from './containers/Content2/Content2';
import Content3, { ContentIcon03 } from './containers/Content3/Content3';
import Content4, { ContentIcon04 } from './containers/Content4/Content4';

const CONTENTS = [
  {
    icon: <ContentIcon01 />,
    title: '永續培力工作坊',
    body: <Content1 />,
    imgSrc: '/images/product-contents-01.jpg',
  },
  {
    icon: <ContentIcon02 />,
    title: '企業家交流晚宴',
    body: <Content2 />,
    imgSrc: '/images/product-contents-02.jpg',
  },
  {
    icon: <ContentIcon03 />,
    title: '企業永續調查白皮書',
    body: <Content3 />,
    imgSrc: '/images/product-contents-03.jpg',
  },
  {
    icon: <ContentIcon04 />,
    title: '天下經濟論壇',
    body: <Content4 />,
    imgSrc: '/images/product-contents-04.jpg',
  },
];

export default CONTENTS;
