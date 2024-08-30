import React from 'react';
import styles from './css/PhotoUploader.module.css';

interface PhotoUploaderProps {
  onFileSelect: (file: File | null) => void;
}

export function PhotoUploader({ onFileSelect }: PhotoUploaderProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    onFileSelect(file);
  };

  return (
    <div className={styles.photoUploader}>
      <input type="file" onChange={handleFileChange} className={styles.fileInput} />
    </div>
  );
}
