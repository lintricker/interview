import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { CardUtil } from './utils/card.utils';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton/IconButton';
import { DiscardModal } from '../modals/discardModal';

function Card({item}: {item: string}) {  
  return (
          <div className="container">
          <CardUtil>
            <CardActionArea>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item}
                </Typography>                
              </CardContent>              
            </CardActionArea>
            <IconButton><ModeEditIcon /></IconButton>
            <DiscardModal />
          </CardUtil>
        </div>
  );
};
export default Card;