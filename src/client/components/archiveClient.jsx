
'use client'
import React from 'react';
import { Archive } from 'lucide-react';
import styles from '@/styles/IconButton.module.css';
import styles from "@/styles/archiveClient.module.css";

const IconButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.archiveButton}
      title="Arquivar"
    >
      <Archive className={styles.archiveIcon} />
    </button>
  );
};

export default IconButton;