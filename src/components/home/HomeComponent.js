import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export default function HomeComponent() {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="100%"
        image="https://wallpapercave.com/wp/wp4012091.jpg"
        title="Contemplative Reptile"
      />
    </Card>
  );
}
