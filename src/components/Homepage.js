import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import colors from '../colors';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <>
      <ScrollToTop />
      <Header1 isLogin={isLogin} />
      {/* Background image */}
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/newMain.png)`,
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
            width: { xs: '278px', sm: '360px' },
            height: { xs: '169px', sm: '190px' },
            backgroundColor: 'rgba(252, 249, 243, 0.6)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Title */}
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

          {/* Description */}
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
          {/* Button Group */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'KoHo',
              padding: '0 70px',
            }}
          >
            <Button
              sx={{
                color: `${colors.color2}`,
                backgroundColor: `${colors.color3}`,
                '&:hover': {
                  color: `${colors.color3}`,
                  backgroundColor: `${colors.color2}`,
                },
              }}
            >
              Mua ngay
            </Button>
            <Button
              sx={{
                color: `${colors.color3}`,
                backgroundColor: `${colors.color2}`,
                '&:hover': {
                  color: `${colors.color2}`,
                  backgroundColor: `${colors.color3}`,
                },
              }}
            >
              Bán ngay
            </Button>
          </Box>
        </Box>
      </Box>

      <Header2 />

      {/* Main content section */}
      <Box sx={{ fontFamily: 'KoHo' }}>

        {/* Section 1 */}
        <Box sx={{ display: 'flex', gap: '20px', padding: '45px', paddingBottom: '50px', backgroundColor: colors.color3, alignItems: 'stretch' }}>
          {/* Box chứa hình ảnh */}
          <Box sx={{ width: '50%', height: '435px', backgroundColor: colors.color3, borderRadius: '8px', overflow: 'hidden', border: 'solid' }}>
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

          {/* Box chứa thông tin */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '16px', marginLeft: '50px', marginRight: '150px' }}>
            {/* Tiêu đề */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'KoHo', color: `${colors.color2}`, marginBottom: '16px' }}>
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
                <Typography sx={{ fontFamily: 'KoHo', textAlign: 'left', fontSize: '18px' }}>
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
                <Typography sx={{ fontFamily: 'KoHo', textAlign: 'left', fontSize: '18px' }}>
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
                <Typography sx={{ fontFamily: 'KoHo', textAlign: 'left', fontSize: '18px' }}>
                  Nguồn tin tức uy tín về môi trường, quy định xử lý rác thải và các giải pháp tái chế. Cung cấp những bài viết, cập nhật mới nhất về các chính sách bảo vệ môi trường và những sáng kiến xanh trên toàn thế giới.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>


        {/* Section 2 */}
        <Box sx={{ textAlign: 'center', backgroundColor: colors.color1, paddingBottom: '50px' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'KoHo', color: `${colors.color2}`, paddingTop: '50px', marginBottom: '16px' }}>
            Trở thành đối tác của TÊN
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'KoHo', marginBottom: '80px' }}>
            Kết nối vựa ve chai của bạn với chúng tôi để nhận được nhiều lợi ích!
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4, flexWrap: 'wrap' }}>

            <Box sx={{ width: '280px', textAlign: 'center', mb: 2 }}>
              <img
                src="/images/typ1.png"
                alt="Icon"
                style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
              />
              <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: 'KoHo', marginBottom: '10px' }}>Đăng ký dễ dàng</Typography>
              <Typography sx={{ fontSize: '20px', fontFamily: 'KoHo' }}>
                Hãy kết nối vựa ve chai của bạn với chúng tôi bằng cách thông qua chức năng đăng kí hoàn toàn miễn phí!</Typography>
            </Box>

            <Box sx={{ width: '280px', textAlign: 'center', mb: 2 }}>
              <img
                src="/images/typ2.png"
                alt="Icon"
                style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
              />
              <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: 'KoHo', marginBottom: '10px' }}>Giá cả hợp lý</Typography>
              <Typography sx={{ fontSize: '20px', fontFamily: 'KoHo' }}>
                Chúng tôi thu mua rác thải với giá theo phân loại hợp lí, minh bạch. Quản lí giao dịch và cập nhập giá cả nhanh chóng.</Typography>
            </Box>

            <Box sx={{ width: '300px', textAlign: 'center', mb: 2 }}>
              <img
                src="/images/typ3.png"
                alt="Icon"
                style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
              />
              <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: 'KoHo', marginBottom: '10px' }}>Theo dõi doanh thu</Typography>
              <Typography sx={{ fontSize: '20px', fontFamily: 'KoHo' }}>
                Bảng thống kê giúp bạn quản lí nguồn thu từ TÊN, tiện lợi và hiệu quả để mở rộng thu mua, tối ưu hóa quy trình kinh doanh.</Typography>
            </Box>

          </Box>
        </Box>

        {/* Section 3 */}
        <Box sx={{ textAlign: 'center', backgroundColor: colors.color3, padding: '50px 100px', display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          {/* Title */}
          <Typography variant="h1" sx={{ fontWeight: 'bold', fontFamily: 'KoHo', color: '#295C2C', marginBottom: '16px', width: 'calc(100% - 300px)', textAlign: 'left' }}>
            Sản phẩm xanh
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'KoHo',
              fontSize: '29px',
              color: '#333',
              maxWidth: '400px',
              margin: '30px auto',
              lineHeight: '1.6',
              marginBottom: '40px',
              width: 'calc(100% - 300px)',
              textAlign: 'left',
            }}
          >
            "Chúng tôi cung cấp các sản phẩm tái chế như đồ gia dụng, thời trang, phụ kiện, và đồ trang trí làm từ nguyên liệu tái chế.
            Khi mua sắm tại đây, bạn không chỉ nhận được những sản phẩm độc đáo, bền vững mà còn được tham gia chương trình <b>tích điểm đổi quà"</b>.
          </Typography>

          {/* Image Gallery */}
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px', gap: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
              <Box sx={{ width: '200px', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src={`${process.env.PUBLIC_URL}/images/sec4.png`} alt="Product 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Box sx={{ width: '200px', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src={`${process.env.PUBLIC_URL}/images/sec2.png`} alt="Product 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Box sx={{ width: '200px', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src={`${process.env.PUBLIC_URL}/images/sec3.png`} alt="Product 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            </Box>
            <Box sx={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={`${process.env.PUBLIC_URL}/images/sec1.png`} alt="Product 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>

        {/* Section 4 */}

        <Box sx={{ textAlign: 'center', backgroundColor: colors.color1, padding: '50px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontFamily: 'KoHo', marginBottom: '16px', color: colors.color2 }}>
            Tích điểm đổi quà
          </Typography>
          <Typography variant="body1" sx={{ color: colors.color2, fontSize: '23px', fontFamily: 'KoHo', marginBottom: '10px', maxWidth: '890px', textAlign: 'center' }}>
            Mỗi giao dịch mua hàng hoặc bán ve chai đều giúp bạn tích lũy điểm thưởng <span style={{ fontSize: '20px' }}>🌱</span>
          </Typography>
          <Box sx={{ marginTop: '30px', display: 'flex', alignItems: 'flex-start', width: '100%', maxWidth: '1000px', gap: '32px' }}>
            <Box sx={{ flexGrow: 1, mb: 4 }}>
              <Box sx={{ overflow: 'hidden', borderRadius: '8px' }}>
                <img src="/images/tradetrash.png" alt="Hình 1" style={{ width: '60%', height: 'auto' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Section 5 */}

        <Box sx={{ textAlign: 'center', backgroundColor: colors.color3, padding: '50px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', marginBottom: '32px', fontSize: '32px' }}>
            LOGO/TÊN
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1000px', gap: '32px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Typography variant="h5" sx={{ color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', textAlign: 'center' }}>
                Tái chế vì tương lai
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'KoHo', textAlign: 'center' }}>
                Mỗi hành động nhỏ góp phần bảo vệ môi trường
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Typography variant="h5" sx={{ color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', textAlign: 'center' }}>
                Cùng hành động, cùng thay đổi
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'KoHo', textAlign: 'center' }}>
                Khuyến khích hành động chung để tạo ra thay đổi tích cực
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Typography variant="h5" sx={{ color: colors.color2, fontWeight: 'bold', fontFamily: 'KoHo', textAlign: 'center' }}>
                Cộng đồng xanh
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'KoHo', textAlign: 'center' }}>
                Kết nối mọi người trong việc bảo vệ hành tinh xanh.
              </Typography>
            </Box>
          </Box>
        </Box>


      </Box>

      <Footer />
    </>
  );
};

export default Homepage;