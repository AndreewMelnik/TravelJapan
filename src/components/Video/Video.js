import './Video.css';

function Video() {
  return (
    <section className="videos" id="videos">
      <div className="videos__wrapper">
        <div className="videos__item"></div>
        <iframe className="videos__element" src="https://www.youtube.com/embed/CxuiFNYnEr4" title="455" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>
  );
}

export default Video;
