import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Card } from './card';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton/IconButton';


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
            <IconButton><ModeEditIcon /></IconButton>
            <IconButton><DeleteIcon sx={{ margin: '20px'}}/></IconButton>
          </Card>
        </div>
  );
};
export default CatCard;