import React from 'react';
import Head from '@components/Head';
import styles from '@styles/list.module.css';
import ListItem from '@components/ListItem';
import useExhibitions from '@hooks/useExhibitions';
import Empty from '@components/Empty';

export default function Home() {
  const { exhibitions, isLoading } = useExhibitions();

  return (
    <div className={styles.container}>
      <Head />
      {isLoading && '로딩중'}
      {exhibitions.length === 0 && !isLoading && <Empty message="예매 가능한 전시회가 없습니다" />}
      {exhibitions.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
}
