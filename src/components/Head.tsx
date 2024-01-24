import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
  description?: string;
}

export default function Head({
  title = 'Exhibition',
  description = 'Exhibition에서 다양한 전시회를 만나보세요.',
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
