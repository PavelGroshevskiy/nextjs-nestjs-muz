import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem: React.FC<TrackItemProps> = ({
  track,
  active = false,
}) => {
  const router = useRouter();
  return (
    <div>
      <Card
        className={styles.track}
        onClick={() => {
          router.push(`/tracks/${track._id}`);
        }}
      >
        <IconButton onClick={(e) => e.stopPropagation()}>
          {active ? <Pause /> : <PlayArrow />}
        </IconButton>
        <img width={'50px'} height={'50px'} src={track.picture} alt="" />
        <Grid
          container
          direction={'column'}
          style={{ width: 200, margin: '0 20px' }}
        >
          <div>{track.name}</div>
          <div>{track.artist}</div>
        </Grid>
        {active && <div>02:43 / 03:22</div>}
        <IconButton
          onClick={(e) => e.stopPropagation()}
          style={{ marginLeft: 'auto' }}
        >
          <Delete />
        </IconButton>
      </Card>
    </div>
  );
};
