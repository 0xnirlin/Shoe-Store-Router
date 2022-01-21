import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ProductIndex = () => {
    const shoes = [
        {
            name: "B. toys FunKeys Toy Funky Toy Keys for Toddlers and Babies Toy Car Keys and Red remote with Light and Sounds Non",
            price: "17.98$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/bb-04-1.jpg"
        },
        {
            name: "Boudreaux Butt Paste Diaper Rash Cream, Maximum Strength, 4 Oz Tube ",
            price: "13.48$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/bb-09-1.jpg"
        },
        {
            name:"  The 3-Step Cradle Cap System by Fridababy | DermaFrida The FlakeFixer | Sponge, Brush, Comb and Storage Stand for Babies                     ",
            price: "49.98$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/bb-10-1.jpg"
        },
        {
            name:" aden + anais Burpy Bib, 100% Cotton Muslin, Soft Absorbent 4 Layers, Multi-Use Burp Cloth and Bib, 22.5 X 11, 2 Pack   ",
            price: "13.00$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/bb-01-1.jpg"
        },
        {
            name:"Baby Bum Brush, Mini Diaper Rash Ceram Applicator with Travel Case, Soft Flexible Silicone, Unique Gift for Boys and ",
            price: "20.00$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/bb-05-1.jpg"
        },
        {
            name:"American Baby Company Waterproof Fitted Crib and Toddler Protective Mattress Pad Cover, White (Pack of 1), for Boys and",
            price: "8.49$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/bb-08-1.jpg"
        },
        {
            name:"4-Spotlight Mini 50X Solar-Powered LED Spotlight (Warm White LED), Black Finish, Outdoor Garden Yard Landscape Downlight",
            price: "8.45$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/GO-02-2.jpg"
        },
        {
            name:"4TH Emotion Fall Pumpkin Patch Truck Throw Pillow Cover Autumn Farmhouse Market Cushion Case for Sofa Couch 18by18 Inches",
            price: "20.00$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/GO-03-2.jpg"
        },
        {
            name:"ANKACE LED Grow Light, Timing, 5 Dimmable Levels, Plant Grow Light for Indoor Plant with Full Spectrum & Red Blue",
            price: "80.00$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/GO-01-1-1.jpg"
        },
        {
            name:" 3M Scotch-Brite Dobie All Purpose Pads, 3Count (Pack of 4) Total 12 Pads ",
            price: "10.94$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/BC-004-1.jpg"
        },
        {
            name:" BLACK+DECKER dustbuster Handheld Vacuum, Cordless, 16V (CHV1410L) , 21oz , Blue  ",
            price: "3.98$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/HK-06-1.jpg"
        },
        {
            name:"Storage Slider Value Pack 30   ",
            price: "4.84$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/BC-009-1-1.jpg"
        },
        {
            name:"Brita Extra Large 18 Cup Filtered Water Dispenser with 1 Standard Filter, Made without BPA, UltraMax, Black    ",
            price: "6.14$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/HK-08-1.jpg"
        },
        {
            name:"COSORI Air Fryer Max XL(100 Recipes) Digital Hot Oven Cooker, One Touch Screen with 13 Cooking Functions, Preheat and Shake Reminder, 5.8 QT, Black",
            price: "11.14$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/HK-09-1.jpg"
        },
        {
            name:"COCOCKA 32.8ft RGB LED Strip Lights, Bluetooth Color Changing LED Lights with App Control, Remote, Control Box 28Scenes ",
            price: "22.28$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/HK-10-1.jpg"
        },
        {
            name:"Feliway Classic Cat Calming Diffuser Kit for Cats (30 Day Starter Kit) Reduce Problem Scratching, Spraying, and Hiding",
            price: "23.10$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/PS-12-1.jpg"
        },
        {
            name:" Educator E-Collar Remote Dog Training Collar ",
            price: "35.98$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/PS-11-1.jpg"
        },
        {
            name:"Bil-Jac (6 Pack) Americas Vet Dogs Skin and Coat Dog Treats, 10 Ounces Each",
            price: "10.98$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/PS-06-1.jpg"
        },
        {
            name:"CatGuru Cat Litter Scoop Holder ",
            price: "16.98$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/PS-08-1.jpg"
        },
        {
            name:"Nifty Coffee Pod Carousel Compatible with K-Cups, 35 Pod Pack Storage, Spins 360-Degrees, Lazy Susan Platform, Modern",
            price: "4.00$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/THI-05-1.jpg"
        },
        {
            name:"Sunex 1848, 1/4 Inch Drive Master Impact Socket Set, 48-Piece, SAE/Metric, 3/16 Inch 9/16 Inch, 4mm 15mm, Standard",
            price: "35.95$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/THI-06-1.jpg"
        },
        {
            name:"The Original Asia 18 Teak Shower Bench ",
            price: "14.95$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/THI-07-1.jpg"
        },
        {
            name:"American Greetings Paw Patrol Party Supplies Pink Disposable Paper Lunch Napkins, 48-Count",
            price: "24.66$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/TG-01-1.jpg"
        },
        {
            name:" Barbie Glam Convertible, Pink/Black",
            price: "44.66$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/TG-02-1.jpg"
        },
        {
            name:"Bedtime Originals Choo Choo Express Plush Elephant Humphrey ",
            price: "102.96$",
            img: "https://mahrizllc.com/wp-content/uploads/2021/11/TG-03-1.jpg"
        },
     
    ]
    return (
        <div >
            {/* <Typography variant = 'h3' sx = {{textAlign: 'center', fontWeight: 'bold'}}>
                Products
            </Typography> */}
            <Grid container spacing={8} sx={{ padding: '2rem' }} >

                {shoes.map((e,index) =>
                (
                    <Grid md={3} xs={12} sm={6} item mt={10}>
                      {console.log(Object.entries(shoes))}
                      <Link to={`/${index}`} className='cardlink'>
                            <Card sx = {{background: "#f6f6f6"}} >
                                <CardActionArea>
                                    <CardMedia 
                                        component="img"
                                        // height="140"
                                        image={e.img}

                                        alt="NIKE"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" sx={{ fontSize: "16px" }} component="div">
                                            {e.name}
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight: "bold", color: 'rgb(0, 0, 0)' }}>
                                            {e.price}
                                        </Typography>
                                        <Link to={`/${index}`} className='cardlink'>
                                        <button className='buy'>Buy Now</button>
                        
                                        <button className='cart'>Add To Cart</button>
                        </Link>
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
