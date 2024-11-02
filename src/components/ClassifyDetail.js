import React from 'react'
import { Header1 } from './Header1'
import { Header2 } from './Header2'
import { ScrollToTop } from './ScrollToTop'
import { Box, Typography } from '@mui/material';
import colors from '../colors'
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../routes/routes';

const ClassifyDetail = () => {
  return (
    <>
      <ScrollToTop />
      <Header1 />
      <Header2 />

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
            <Typography align='start' sx={{ fontFamily: 'KoHo', fontWeight: 500, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
              NHỰA (439 lượt bán)
            </Typography>
            <Typography align='start' sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
              60.000đ / 1kg
            </Typography>
            <Typography align='start' sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              <Typography component="span" sx={{ fontFamily: 'KoHo', fontWeight: 600, fontSize: '24px', lineHeight: '31.2px' }}>
                Bao gồm:
              </Typography> chai lọ, ly, ống hút, hộp đựng thức ăn, đồ chơi, các vật liệu xây dựng (PVC, ống nước nhựa,...),...
            </Typography>
            <Typography align='start' sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              Hãy chắc rằng bạn đã nắm rõ và đồng ý với <RouterLink to={routes.regulation} style={{ fontFamily: 'KoHo', fontWeight: 600, fontSize: '24px', lineHeight: '31.2px', color: colors.color2, textDecoration: 'underline' }}>quy định</RouterLink> của chúng tôi!</Typography>
            <Typography align='start' sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>
              Gọi <Typography component='span' sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', color: colors.color2, textDecoration: 'underline' }}>0123456789</Typography> để được tư vấn chi tiết
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
};
export default ClassifyDetail;