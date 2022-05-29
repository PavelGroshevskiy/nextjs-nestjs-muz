import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const TrackPage = () => {
  const router = useRouter();
  const track: ITrack = {
    _id: '1',
    name: 'Track 1',
    artist: 'Исполнитель 1',
    text: 'текст 1',
    audio:
      'http://localhost:5002/audio/1e8b2962-79f4-483d-840d-7792fba42622.mp3',
    comments: [],
    listens: 3,
    picture:
      'http://localhost:5002/image/7b2696f5-0540-44b8-a2e5-d916eae57b50.jpeg',
  };

  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 12 }}
        onClick={() => {
          router.push('/tracks');
        }}
      >
        К списку
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={track.picture} alt="" width={200} height={200} />
        <div style={{ marginLeft: 20 }}>
          <h1>Name - {track.name}</h1>
          <h1>Track - {track.artist}</h1>
          <h1>Listens - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Song Words</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField label="Name" fullWidth />
        <TextField label="Comment" multiline fullWidth rows={6} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => {
          <div>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
          </div>;
        })}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
