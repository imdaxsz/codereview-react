import Empty from '@components/Empty';
import Head from '@components/Head';
import ListItem from '@components/ListItem';
import Loader from '@components/Loader';
import useWishlist from '@hooks/useWishlist';
import styles from '@styles/list.module.css';

export default function Wishlist() {
  const { target, wishlist, isLoading } = useWishlist();
  return (
    <div className={styles.container}>
      <Head title='찜목록 | Exhibition' />
      {isLoading && <Loader />}
      {!isLoading && wishlist.length === 0 && (
        <Empty
          message='찜해놓은 전시회가 없습니다'
          suggestion='맘에 드는 전시회가 있다면 찜해보세요'
        />
      )}
      {wishlist.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
      <div ref={target} />
    </div>
  );
}
