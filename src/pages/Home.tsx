import React from 'react';
import Head from '@components/Head';
import styles from '@styles/list.module.css';
import ListItem from '@components/ListItem';

const MOCK_ITEM = {
  id: 1,
  title: '도톤보리 : teleport in osaka',
  imageUrl: 'https://artvelop.s3.ap-northeast-2.amazonaws.com/code-review/light/1.jpeg',
  place: '국립 현대 미술관',
  price: 13500,
  date: {
    started: '2023.08.17',
    ended: '2024.02.12',
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <ListItem item={MOCK_ITEM} />
      <ListItem item={MOCK_ITEM} />
      <ListItem item={MOCK_ITEM} />
      <ListItem item={MOCK_ITEM} />
      <ListItem item={MOCK_ITEM} />
      <ListItem item={MOCK_ITEM} />
      <ListItem item={MOCK_ITEM} />
    </div>
  );
}
