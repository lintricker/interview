import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Card } from './card';
//import { cats } from '../categories';

function CatCard({ item }: any) {
  return (
          <div className="container">
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
  );
};
export default CatCard;