import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { TrackList } from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: '2',
      name: 'Track 2',
      artist: 'Исполнитель 2',
      text: 'текст 2',
      audio:
        'http://localhost:5002/audio/9c855220-d664-44f0-93c6-4c1869582975.mp3',
      comments: [],
      listens: 3,
      picture:
        'http://localhost:5002/image/9fa9b877-a11a-411e-81a3-33999ab76982.jpeg',
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: '900px' }}>
          <Box p={1}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
