import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Card } from './card';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


function CatCard({ item }: any) {
  return (
          <div className="container">
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item}
                </Typography>                
              </CardContent>              
            </CardActionArea>
            <ModeEditIcon />
            <DeleteIcon sx={{ margin: '20px'}}/>
          </Card>
        </div>
  );
};
export default CatCard;