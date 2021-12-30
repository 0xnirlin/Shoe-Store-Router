import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ProductIndex = () => {
    const shoes = {
        'shoe1': {
            name: "Nike Air Max 270",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png"
            ,
            price: "$100"
        },
        'shoe2': {
            name: "Nike Air Vapormax 2021",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1d66374-cbcb-456d-a842-f7c14cb6e9d0/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
            price: "$100"
        },
        'shoe3': {
            name: "Nike Blazer Mid",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
            price: "$100"
        },
        'shoe4': {
            name: "Nike SB Baloom",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b26b9e8-bb27-43ea-8c51-3bed04fa5628/sb-zoom-blazer-mid-skate-shoes-qX3MZV.png",
            price: "$100"
        },
        'shoe5': {
            name: "Nike Air Zoom Pegasus",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d199515a-a0d1-4880-aba4-f92ddcbe7695/air-zoom-pegasus-38-mens-road-running-shoes-lq7PZZ.png",
            price: "$100"
        },
        'shoe6': {
            name: "Nike Zoom X Invincible",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6264bef-660d-4421-8138-df52dd395c14/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
            price: "$100"
        }
    }
    return (
        <div >
            <Typography variant = 'h3' sx = {{textAlign: 'center', fontWeight: 'bold'}}>
                Products
            </Typography>
            <Grid container spacing={5} sx={{ padding: '2rem' }} >

                {Object.entries(shoes).map(([productId, details]) =>
                (
                    <Grid md={4} xs={12} sm={6} item mt={10}>
                        <Link to={productId} className='cardlink'>
                            <Card >
                                <CardActionArea>
                                    <CardMedia 
                                        component="img"
                                        // height="140"
                                        image={details.img}

                                        alt="NIKE"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }} component="div">
                                            {details.name}
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight: "bold", color: 'rgb(245, 81, 136)' }}>
                                            {details.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                )
                )}
            </Grid>
        </div>

    )
}
