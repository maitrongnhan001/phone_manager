import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./product.scss";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  let navigate = useNavigate();
  return (
    <Box className="product_card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/images/products/ip-14.jpeg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="success" onClick={() => {
                navigate('/edit');
              }}>Edit</Button>
          <Button size="small" color="error" onClick={() => {
                alert("Do you want delete this product?");
              }}>Delete</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
