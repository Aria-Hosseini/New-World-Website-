import './Preloader.css';

export default function Preloader({ fadeOut }) {
  return (
    <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader"></div>
    </div>
  );
}
