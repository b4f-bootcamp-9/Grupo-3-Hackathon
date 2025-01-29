'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from "@/client/styles/card.module.css"

export default function CardImoveis() {
  const router = useRouter(); 
  return (
    <Card 
      className={styles.cardContainer} 
      sx={{ maxWidth: 32.5 }}
      onClick={() => router.push('/filtros')}
    >
      <CardActionArea className={styles.cardActionArea}>
        <CardMedia
          component="img"
          image="edifico.png"
          className={styles.cardImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" className={styles.cardText}>
            Imóveis
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}