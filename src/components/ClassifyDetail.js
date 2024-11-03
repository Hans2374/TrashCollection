import React, { useState } from 'react'
import { Header1 } from './Header1'
import { Header2 } from './Header2'
import { ScrollToTop } from './ScrollToTop'
import { Box, Typography, TextField, IconButton, Button, ImageList, ImageListItem } from '@mui/material';
import colors from '../colors'
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../routes/routes';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Footer } from './Footer';

const ClassifyDetail = () => {
  const [quantity, setQuantity] = useState(1);

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
    <>
      <ScrollToTop />
      <Header1 />
      <Box>
        <Header2 />
      </Box>

      {/* Nội dung */}
      <Box sx={{ p: 10 }}>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          {/* Left Box */}
          <Box
            sx={{
              borderRadius: '20px',
              width: '30%',
              height: 'auto',
              border: '4px solid #214738',
            }}>
            <img src={`${process.env.PUBLIC_URL}/images/card1.png`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
          </Box>
          {/* Right Box */}
          <Box
            sx={{
              width: '65%',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'KoHo',
              fontSize: '24px',
              lineHeight: '31.2px',
            }}>
            <Typography align='start' sx={{ pb: 1, fontFamily: 'KoHo', fontWeight: 500, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
              NHỰA (439 lượt bán)
            </Typography>
            <Typography align='start' sx={{ pb: 1, fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
              60.000đ / 1kg
            </Typography>
            <Typography align='start' sx={{ pb: 1, fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              <Typography component="span" sx={{ fontFamily: 'KoHo', fontWeight: 600, fontSize: '24px', lineHeight: '31.2px' }}>
                Bao gồm:
              </Typography> chai lọ, ly, ống hút, hộp đựng thức ăn, đồ chơi, các vật liệu xây dựng (PVC, ống nước nhựa,...),...
            </Typography>
            <Typography align='start' sx={{ pb: 1, fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              Hãy chắc rằng bạn đã nắm rõ và đồng ý với <RouterLink to={routes.regulation} style={{ fontFamily: 'KoHo', fontWeight: 600, fontSize: '24px', lineHeight: '31.2px', color: colors.color2, textDecoration: 'underline' }}>quy định</RouterLink> của chúng tôi!</Typography>
            <Typography align='start' sx={{ pb: 1, fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
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
          <Box sx={{ width: '100%', height: 'auto' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
};
export default ClassifyDetail;