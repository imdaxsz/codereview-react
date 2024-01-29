import Empty from '@components/Empty';
import Head from '@components/Head';
import ListItem from '@components/ListItem';
import { useAppSelector } from '@stores/index';
import styles from '@styles/list.module.css';

export default function Wishlist() {
  const list = useAppSelector((state) => state.wishlist.items);

  return (
    <div className={styles.container}>
      <Head title="찜목록 | Exhibition" />
      {list.length === 0 && (
        <Empty
          message="찜해놓은 전시회가 없습니다"
          suggestion="맘에 드는 전시회가 있다면 찜해보세요"
        />
      )}
      {list.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
}
