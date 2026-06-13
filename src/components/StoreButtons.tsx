import {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  APP_STORE_BADGE,
  GOOGLE_PLAY_BADGE,
} from '../lib/links';

interface StoreButtonsProps {
  className?: string;
  /** Height of the badges in px. */
  size?: number;
}

/** Reusable App Store + Google Play badge pair. */
const StoreButtons = ({ className = '', size = 56 }: StoreButtonsProps) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:-translate-y-0.5"
      aria-label="Download on the App Store"
    >
      <img
        src={APP_STORE_BADGE}
        alt="Download on the App Store"
        style={{ height: size }}
        className="w-auto"
      />
    </a>
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:-translate-y-0.5"
      aria-label="Get it on Google Play"
    >
      <img
        src={GOOGLE_PLAY_BADGE}
        alt="Get it on Google Play"
        style={{ height: size }}
        className="w-auto"
      />
    </a>
  </div>
);

export default StoreButtons;
