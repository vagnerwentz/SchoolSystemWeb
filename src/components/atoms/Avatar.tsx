import styles from './css/Avatar.module.css';

interface AvatarProps {
  src?: string | null;
  alt: string;
  placeholder: string;
  className?: string;
}

export function Avatar({ src, alt, placeholder, className }: AvatarProps) {
  return src ? (
    <img src={src} alt={alt} className={className || styles.avatar} />
  ) : (
    <div className={styles.noAvatar}>{placeholder}</div>
  );
}
