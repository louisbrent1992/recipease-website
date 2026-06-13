interface DeviceFrameProps {
  src: string;
  alt: string;
  className?: string;
}

/** Renders an app screenshot inside a CSS iPhone frame (see `.device` in index.css). */
const DeviceFrame = ({ src, alt, className = '' }: DeviceFrameProps) => (
  <div className={`device ${className}`}>
    <div className="device-screen">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  </div>
);

export default DeviceFrame;
