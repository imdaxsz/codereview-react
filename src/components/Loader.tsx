import { createPortal } from 'react-dom';
import { BeatLoader } from 'react-spinners';

export default function Loader() {
  const container = document.getElementById('loader');
  return container && createPortal(<BeatLoader color='#ccc' />, container);
}
