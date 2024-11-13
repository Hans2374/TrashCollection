import React, { useState } from 'react'
import { Header1 } from './Header1'
import { Header2 } from './Header2'
import { ScrollToTop } from './ScrollToTop'
import { Box, Typography, TextField, IconButton, Button, useMediaQuery, useTheme } from '@mui/material';
import colors from '../colors'
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../routes/routes';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Footer } from './Footer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClassifyDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const itemData = [
    {
      img: `${process.env.PUBLIC_URL}/images/item1.png`,
    },
    {
      img: `${process.env.PUBLIC_URL}/images/item2.png`,
    },
    {
      img: `${process.env.PUBLIC_URL}/images/item3.png`,
    },
    {
      img: `${process.env.PUBLIC_URL}/images/item6.png`,
    },
    {
      img: `${process.env.PUBLIC_URL}/images/item5.png`,
    },
    {
      img: `${process.env.PUBLIC_URL}/images/item4.png`,
    },
  ];

  return (
    <Box sx={{ overflowX: 'hidden',
      backgroundColor: "#FCF9F3",
     }}>
      <ScrollToTop />
      <Header1 />
      <Box>
        <Header2 />
      </Box>

      {/* Nội dung */}
      <Box sx={{ p: { lg: 10, md: 10, sm: 1, xs: 1 } }}>
        <Box display='flex' justifyContent='space-between' sx={{ mt: { sm: 5, xs: 5 }, flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}>
          {/* Left Box */}
          <Box
            sx={{
              width: { lg: '30%', md: '30%', sm: '100%', xs: '100%' },
              boxSizing: 'border-box',
            }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/images/card1.png`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
                border: '4px solid #214738',
                boxSizing: 'border-box',
              }}
            />
          </Box>
          {/* Right Box */}
          <Box
            sx={{
              width: { lg: '65%', md: '65%', sm: '98%', xs: '98%' },
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'KoHo',
              fontSize: '24px',
              lineHeight: '31.2px',
            }}>
            <Typography align='start' sx={{ mt: { sm: 2, xs: 2 }, pb: 2, fontFamily: 'KoHo', fontWeight: 500, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
              NHỰA (439 lượt bán)
            </Typography>
            <Typography align='start' sx={{ pb: 2, fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
              60.000đ / 1kg
            </Typography>
            <Typography align='start' sx={{ pb: 2, fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              <Typography component="span" sx={{ fontFamily: 'KoHo', fontWeight: 600, fontSize: '24px', lineHeight: '31.2px' }}>
                Bao gồm:
              </Typography> chai lọ, ly, ống hút, hộp đựng thức ăn, đồ chơi, các vật liệu xây dựng (PVC, ống nước nhựa,...),...
            </Typography>
            <Typography align='start' sx={{ pb: 2, fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              Hãy chắc rằng bạn đã nắm rõ và đồng ý với <RouterLink to={routes.regulation} style={{ fontFamily: 'KoHo', fontWeight: 600, fontSize: '24px', lineHeight: '31.2px', color: colors.color2, textDecoration: 'underline' }}>quy định</RouterLink> của chúng tôi!</Typography>
            <Typography align='start' sx={{ pb: 2, fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              Gọi <Typography component='span' sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', color: colors.color2, textDecoration: 'underline' }}>0123456789</Typography> để được tư vấn chi tiết
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={handleDecrement} sx={{ border: '3px solid #214738', borderRight: '0px', borderRadius: '20px 0px 0px 20px' }}>
                  <RemoveIcon />
                </IconButton>
                <TextField
                  value={quantity}
                  onChange={handleChange}
                  inputProps={{ min: 1, style: { textAlign: 'center', height: '40px', padding: 0 } }}
                  sx={{
                    border: '3px solid #214738',
                    maxWidth: '40px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                />
                <IconButton onClick={handleIncrement} sx={{ border: '3px solid #214738', borderLeft: '0px', borderRadius: '0px 20px 20px 0px' }}>
                  <AddIcon />
                </IconButton>
                <Typography sx={{ ml: 0.5, fontFamily: 'KoHo', fontWeight: 400, fontSize: '15px', lineHeight: '19.5px', color: colors.color2 }}>kg</Typography>
              </Box>
              <Button sx={{ color: colors.color1, fontFamily: 'KoHo', fontSize: '20px', lineHeight: '26px', align: 'center', fontWeight: 600, backgroundColor: colors.color2, width: '194px', height: '52px', borderRadius: '20px' }}>
                Thêm vào bán
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Description */}
        <Box>
          <Typography sx={{ mt: 10, fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', alignSelf: 'center', color: colors.color2 }}>
            Một vài thông tin về nhựa
          </Typography>

          {/* Images */}
          <Box sx={{ width: '100%', height: 'auto', mt: 5 }}>
            {isSmallScreen ? (
              <Slider {...settings} >
                {itemData.map((item) => (
                  <Box key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      loading="lazy"
                      style={{ borderRadius: '20px', width: '100%', height: 'auto', margin: 0 }}
                    />
                  </Box>
                ))}
              </Slider>
            ) : (
              <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      loading="lazy"
                      style={{ borderRadius: '20px' }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
};
export default ClassifyDetail;