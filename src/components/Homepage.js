import React, { useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import colors from '../colors';
import ScrollReveal from 'scrollreveal';
import useMediaQuery from '@mui/material/useMediaQuery';


const Homepage = () => {

  // Kiểm tra kích thước màn hình
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const reveal = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    // Hiệu ứng cho toàn bộ section:
    reveal.reveal('.section-container', {
      container: '.section-container', // Chọn container section
    });

    // Hiệu ứng cho các phần tử con trong section:
    reveal.reveal('.section-title', {
      delay: 0,
      duration: 800
    });
    reveal.reveal('.section-content', {
      delay: 200,
      duration: 1200
    });
    reveal.reveal('.product-image', {
      delay: 400,
      duration: 1000
    });
    reveal.reveal('.product-info', {
      delay: 600,
      duration: 1000
    });
    reveal.reveal('.call-to-action', {
      delay: 800,
      duration: 1500
    });

    return () => reveal.destroy();
  }, []);


  return (
    <>
      <ScrollToTop />
      <Header1 />

      {/* Background image */}
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/main.png)`,
          height: '421px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxWidth: '100%',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Box info */}
        <Box
          sx={{
            width: { xs: '278px', sm: '360px' }, // Responsive width
            height: { xs: '169px', sm: '190px' },  // Chiều cao tự động cho màn hình nhỏ
            backgroundColor: 'rgba(252, 249, 243, 0.6)',
            position: 'absolute',
            top: '50%',
            left: { xs: '50%', sm: '50%', md: '20%' },
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              padding: '10px 20px 5px 20px',
              fontFamily: 'KoHo',
              fontSize: { xs: '24px', sm: '36px' },
              fontWeight: 700,
              lineHeight: { xs: '30px', sm: '46.8px' },
              color: `${colors.color2}`,
              textAlign: 'left',
              marginBottom: '8px',
            }}
          >
            TÁI CHẾ
          </Typography>
          <Typography
            sx={{
              padding: '10px 20px 15px 20px',
              fontFamily: 'KoHo',
              fontSize: { xs: '14px', sm: '16px', md: '17px' },
              fontWeight: 400,
              color: `${colors.color2}`,
              textAlign: 'left',
            }}
          >
            Giảm lượng rác thải chôn lấp và ô nhiễm, tiết kiệm tài nguyên thiên nhiên, giảm lượng khí thải nhà kính
          </Typography>
        </Box>
      </Box>

      <Header2 />

      {/* Section 1 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Thay đổi hướng bố cục theo kích thước màn hình
          gap: '20px',
          padding: '45px',
          paddingBottom: '50px',
          backgroundColor: colors.color3,
          alignItems: 'stretch'
        }}
        className="section-container-1"
      >
        {/* Box chứa hình ảnh */}
        {!isSmallScreen && (
          <Box
            sx={{
              width: { xs: '100%', sm: '50%' }, // Đặt chiều rộng 100% trên màn hình nhỏ
              height: '435px',
              backgroundColor: colors.color3,
              borderRadius: '8px',
              overflow: 'hidden',
              border: 'solid'
            }}
          >
            <img
              src="\images\theartofrecycle.png"
              alt="Art of Recycle"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        )}

        {/* Box chứa thông tin */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginLeft: { xs: '0', sm: '50px' }, // Đặt margin cho màn hình nhỏ
            marginRight: { xs: '0', sm: '150px' }
          }}
        >
          {/* Tiêu đề */}
          <Typography
            variant="h3"
            className="section-title-1"
            sx={{ fontWeight: 'bold', fontFamily: 'KoHo', color: `${colors.color2}`, marginBottom: '16px' }}
          >
            TÊN có gì?
          </Typography>

          {/* Phần thông tin về Sản phẩm tái chế */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/recycle1.png"
              alt="Shopping Cart Icon"
              style={{ width: '60px', height: '60px', marginRight: '8px' }}
            />
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ fontFamily: 'KoHo', textAlign: 'left' }}
              >
                Sản phẩm tái chế
              </Typography>
              <Typography className="section-content-1" sx={{ fontFamily: 'KoHo', textAlign: 'left', fontSize: '18px' }}>
                Chúng tôi mang đến cho bạn những mặt hàng sáng tạo từ vật liệu tái chế. Mỗi sản phẩm là một cách để bạn góp phần bảo vệ hành tinh, giảm thiểu rác thải và khuyến khích tái sử dụng tài nguyên.
              </Typography>
            </Box>
          </Box>

          {/* Phần thông tin về Thu mua ve chai */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/recycle2.png"
              alt="Shopping Cart Icon"
              style={{ width: '60px', height: '60px', marginRight: '8px' }}
            />
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ fontFamily: 'KoHo', textAlign: 'left' }}
              >
                Thu mua ve chai
              </Typography>
              <Typography className="section-content-1" sx={{ fontFamily: 'KoHo', textAlign: 'left', fontSize: '18px' }}>
                Chúng tôi chuyên thu mua các loại phế liệu và nhiều loại vật liệu tái chế khác. Góp phần bảo vệ môi trường và tái sử dụng tài nguyên, mang đến mức giá tốt nhất cùng dịch vụ nhanh chóng, tiện lợi.
              </Typography>
            </Box>
          </Box>

          {/* Phần thông tin về Thông tin xanh */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/recycle3.png"
              alt="Shopping Cart Icon"
              style={{ width: '60px', height: '60px', marginRight: '8px' }}
            />
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ fontFamily: 'KoHo', textAlign: 'left' }}
              >
                Thông tin xanh
              </Typography>
              <Typography className="section-content-1" sx={{ fontFamily: 'KoHo', textAlign: 'left', fontSize: '18px' }}>
                Nguồn tin tức uy tín về môi trường, quy định xử lý rác thải và các giải pháp tái chế. Cung cấp những bài viết, cập nhật mới nhất về các chính sách bảo vệ môi trường và những sáng kiến xanh trên toàn thế giới.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section 2 */}
      <Box sx={{ textAlign: 'center', backgroundColor: colors.color1, paddingBottom: '50px' }} className="section-container">
        <Typography className="section-title" sx={{ fontSize: { xs: '30px', md: '48px' },fontWeight: 'bold', fontFamily: 'KoHo', color: `${colors.color2}`, paddingTop: '50px', marginBottom: '16px' }}>
          Trở thành đối tác của TÊN
        </Typography>
        <Typography className="section-content" sx={{ fontSize: { xs: '18px', md: '24px' },fontFamily: 'KoHo', marginBottom: '80px' }}>
          Kết nối vựa ve chai của bạn với chúng tôi để nhận được nhiều lợi ích!
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4, flexWrap: 'wrap' }} className="section-content">
          <Box sx={{ width: '280px', textAlign: 'center', mb: 2 }}>
            <img
              src="/images/typ1.png"
              alt="Icon"
              style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
            />
            <Typography fontWeight="bold" sx={{ fontSize: { xs: '24px', md: '34px' }, fontFamily: 'KoHo', marginBottom: '10px' }}>Đăng ký dễ dàng</Typography>
            <Typography sx={{ fontSize: '20px', fontFamily: 'KoHo' }}>
              Hãy kết nối vựa ve chai của bạn với chúng tôi thông qua chức năng đăng kí hoàn toàn miễn phí!
            </Typography>
          </Box>
          <Box sx={{ width: '280px', textAlign: 'center', mb: 2 }}>
            <img
              src="/images/typ2.png"
              alt="Icon"
              style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
            />
            <Typography fontWeight="bold" sx={{ fontSize: { xs: '24px', md: '34px' },fontFamily: 'KoHo', marginBottom: '10px' }}>Giá cả hợp lý</Typography>
            <Typography sx={{ fontSize: '20px', fontFamily: 'KoHo' }}>
              Chúng tôi thu mua rác thải với giá cả theo phân loại hợp lí, minh bạch. Quản lí giao dịch và cập nhập giá cả nhanh chóng.
            </Typography>
          </Box>
          <Box sx={{ width: '300px', textAlign: 'center', mb: 2 }}>
            <img
              src="/images/typ3.png"
              alt="Icon"
              style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
            />
            <Typography  fontWeight="bold" sx={{fontSize: { xs: '24px', md: '34px' }, fontFamily: 'KoHo', marginBottom: '10px' }}>Theo dõi doanh thu</Typography>
            <Typography sx={{ fontSize: '20px', fontFamily: 'KoHo' }}>
              Bảng thống kê giúp bạn quản lí nguồn thu từ TÊN, tiền lời và hiệu quả để mở rộng thu mua, tối ưu hóa quy trình kinh doanh.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: colors.color3,
          padding: { xs: '30px', md: '50px 100px' }
        }}
        className="section-container"
      >
        <Grid container spacing={4} alignItems="flex-start">

          {/* Phần bên trái: Tiêu đề và giới thiệu */}
          <Grid item xs={12} md={6}>
            <Typography
              className="section-title"
              sx={{ fontSize: { xs: '30px', md: '48px' }, fontWeight: 'bold', fontFamily: 'KoHo', color: `${colors.color2}`, marginBottom: '70px', marginTop: '20px' }}
            >
              Sản phẩm xanh
            </Typography>

            <Typography
              className="section-content"
              sx={{
                fontFamily: 'KoHo',
                fontSize: { xs: '18px', md: '28px' },
                color: '#333',
                maxWidth: '600px',
                lineHeight: '1.6',
                marginBottom: '40px',
                marginLeft: '20px',
                textAlign: 'left',
              }}
            >
              Chúng tôi cung cấp các sản phẩm tái chế như đồ gia dụng, thời trang, phụ kiện, và đồ trang trí làm từ nguyên liệu tái chế.
              Khi mua sắm tại đây, bạn không chỉ nhận được những sản phẩm độc đáo, bền vững mà còn được tham gia chương trình <b>tích điểm đổi quà</b>.
            </Typography>
          </Grid>

          {/* Phần bên phải: Hình ảnh sản phẩm */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '20px',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box sx={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/sec4.png`}
                    alt="Product 1"
                    className="product-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/sec2.png`}
                    alt="Product 2"
                    className="product-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/sec3.png`}
                    alt="Product 3"
                    className="product-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              <Box sx={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/sec1.png`}
                  alt="Product 4"
                  className="product-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>





      {/* Section 4 */}
      <Box sx={{ textAlign: 'center', backgroundColor: colors.color1, padding: '50px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="section-container">
        <Typography  className="section-title" sx={{ fontSize: { xs: '30px', md: '48px' },fontWeight: 'bold', fontFamily: 'KoHo', marginBottom: '16px', color: colors.color2 }}>
          Tích điểm đổi quà
        </Typography>
        <Typography  className="section-content" sx={{ fontSize: { xs: '14px', md: '16px' }, color: colors.color2, fontSize: '23px', fontFamily: 'KoHo', marginBottom: '10px', maxWidth: '890px', textAlign: 'center' }}>
          Mỗi giao dịch mua hàng hoặc bán ve chai đều giúp bạn tích lũy điểm thưởng <span style={{ fontSize: '20px' }}>🌱</span>
        </Typography>
        <Box sx={{ marginTop: '30px', display: 'flex', alignItems: 'flex-start', width: '100%', maxWidth: '1000px', gap: '32px' }} className="section-content">
          <Box sx={{ flexGrow: 1, mb: 4 }}>
            <Box sx={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img src="/images/tradetrash.png" alt="Hình 1" style={{ width: '60%', height: 'auto' }} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section 5 */}
      <Box sx={{ textAlign: 'center', backgroundColor: colors.color3, padding: '50px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="section-container">
        <Typography variant="h3" className="section-title" sx={{ color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', marginBottom: '32px', fontSize: '32px' }}>
          LOGO/TÊN
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1000px', gap: '40px' }} className="section-content">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Typography  className="section-content" sx={{ fontSize: { xs: '18px', md: '24px' },color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', textAlign: 'center' }}>
              Tái chế vì tương lai
            </Typography>
            <Typography variant="body1" className="section-content" sx={{ fontFamily: 'KoHo', textAlign: 'center' }}>
              Mỗi hành động nhỏ góp phần bảo vệ môi trường
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Typography className="section-content" sx={{ fontSize: { xs: '18px', md: '24px' },color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', textAlign: 'center' }}>
              Cùng hành động, cùng thay đổi
            </Typography>
            <Typography variant="body1" className="section-content" sx={{ fontFamily: 'KoHo', textAlign: 'center' }}>
              Khuyến khích hành động chung để tạo ra thay đổi tích cực
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Typography  className="section-content" sx={{ fontSize: { xs: '18px', md: '24px' },color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', textAlign: 'center' }}>
              Cộng đồng xanh
            </Typography>
            <Typography variant="body1" className="section-content" sx={{ fontFamily: 'KoHo', textAlign: 'center' }}>
              Kết nối mọi người trong việc bảo vệ hành tinh xanh.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Homepage;