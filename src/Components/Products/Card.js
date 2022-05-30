import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.scss';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className='cardStyle'>
      <CardMedia
        component="img"
        height="140"
        image={props.product.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.product.description}
        </Typography>
        <Typography gutterBottom variant='h6' component='h6'>
            Price : {props.product.price}
          </Typography>
          <Typography gutterBottom variant='h6' component='h6'>
            Availability : {props.product.inventoryCount} pieces
          </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

