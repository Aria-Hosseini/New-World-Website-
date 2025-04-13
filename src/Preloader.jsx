import './Preloader.css';

export default function Preloader({ fadeOut }) {
  return (
    <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''} flex flex-col`}>
      <div className="loader"></div>
      <div><h3 className='text-amber-50'>coded by vihan</h3></div>
    </div>
  );
}
