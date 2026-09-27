const BANNER_VIDEO_URL =
  'https://pub-0b16d9d13b1345e190ead530877e618a.r2.dev/og.mp4';

export default function BannerVideo() {
  return (
    <section className="section banner-video-section">
      <div className="container">
        <div className="video-showcase">
          <div className="video-showcase_head">
            <div>
              <div className="products-eyebrow">Corporate Overview</div>
              <h2 className="video-showcase_title">Inside Daban Holding</h2>
            </div>
            <p className="video-showcase_text">
              A short visual introduction placed directly under the main banner.
            </p>
          </div>

          <div className="video-showcase_player">
            <video
              src={BANNER_VIDEO_URL}
              poster="/daban.webp"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
