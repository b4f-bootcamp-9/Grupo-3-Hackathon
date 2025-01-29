
'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from "@/client/styles/card.module.css"

const ActionAreaCard = () => {
  const router = useRouter();


  return (
    <Card className={styles.cardContainer} onClick={() => router.push('/card-client')}>
      <CardActionArea className={styles.cardActionArea}>
        <CardMedia
          component="img"
          image="client.png"
          className={styles.cardImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" className={styles.cardText}>
            Clientes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;