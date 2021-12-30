import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
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
    const { productID } = useParams();
    const product = shoes[productID];
    console.log(productID)
    console.log(product)


    return (
       
            <Grid container sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <Grid md={6} sm={12} xs={12}>

                
                    
                            <CardMedia
                                component="img"
                                height= '600rem'
                                className='cardmedia'
                                width = 'auto'
                                image={product.img}

                                alt="NIKE"
                            />

      
                     

                   


                </Grid>
                <Grid md={6} sm={12} xs={12} sx={{ padding: '3rem' }}>


                    <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }} component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: ' rgb(207, 24, 64)' }}>
                        {product.price}
                    </Typography>
                    <div className='text'>

                        <Typography variant="body" >
                            Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.
                            Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.
                        </Typography>

                    </div>
                    <div className='btn-container'>

                        <Button variant="contained" sx = {{padding: '10px', marginTop: '10px', bgcolor: 'black', ":hover": {bgcolor: ' rgb(207, 24, 64)'}}}>Add To Bag</Button>
                        <Button variant="outlined" sx = {{padding: '10px',marginTop: '10px' }}>Add To Favorites</Button>

                    </div>

                </Grid>


            </Grid>
        
    )
}
