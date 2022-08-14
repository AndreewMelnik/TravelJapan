import './Video.css';

function Video() {
  return (
    <section class="videos" id="videos">
      <div class="videos__wrapper">
        <div class="videos__item"></div>
        <iframe class="videos__element" src="https://www.youtube.com/embed/CxuiFNYnEr4" title="455" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default Video;
