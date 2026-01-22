import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function ProductCard() {
  const product = [
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
  ];

  return (
    <>
      {product.map((i) => (
        <Grid container sx={{ margin: "50px" }} spacing={3}>
          {product.map((i) => (
            <Grid item xs={12} sm={6} md={3} key={i.id}>
              <Card
                sx={{
                  height: "350px",
                  width: "500px",
                  borderRadius: "50",
                  border: "2px solid white",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={i.image}
                    alt={i.category}
                    sx={{
                      height: 140,
                      objectFit: "contain", // 👈 fits entire image
                      padding: "10px",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom sx={{ fontSize: "15px" }}>
                      {i.title}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "20px", color: "red" }}
                    >
                      $ {i.price}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ fontSize: "9px" }}
                      color="text.secondary"
                    >
                      {i.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    sx={{
                      border: "2px solid blue",
                      "&:hover": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
}
