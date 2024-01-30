import { ArrowUUpLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <button aria-label="뒤로가기" onClick={() => navigate(-1)}>
        <ArrowUUpLeft size={30} weight="fill" />
      </button>
      <h3>{title}</h3>
    </div>
  );
}
