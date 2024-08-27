import React from 'react';
import '../css/recommend.css'; 

const TodayDeal = () => {
  const deals = [
    {
      imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/W/118566_1712651312.jpg', // Add image sources here
      title: 'HP Hp 203a Yellow Original Laser',
      currentPrice: '$121,159',
      originalPrice: '$138,000',
      discount: '-12%',
      savedAmount: 'You saved $16,841',
    },
    {
      imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/I/230034_1723555589.jpg', // Add image sources here
      title: 'Actuated Standard Kit',
      currentPrice: '$525,159',
      originalPrice: '$583,400',
      discount: '-10%',
      savedAmount: 'You saved $58,400',
    },
    {
        imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/B/118566_1712649428.jpg', // Add image sources here
        title: 'HP Hp 653 Original Ink',
        currentPrice: '$22,896',
        originalPrice: '$226,200',
        discount: '-13%',
        savedAmount: 'You saved $3,304',
    },
    {
      imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/D/174740_1715178605.png', // Add image sources here
      title: 'iPower 5kva Inverter Infiniti',
      currentPrice: '$1,101,400',
      originalPrice: '',
      discount: '',
      savedAmount: '',
    },
    {
      imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/K/_1699992344.jpg', // Add image sources here
      title: 'iTec Electric Start 7.5kw Generator',
      currentPrice: '$689,500',
      originalPrice: '',
      discount: '',
      savedAmount: '',
    },
    {
      imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/V/174740_1691136929.jpg', // Add image sources here
      title: 'iPower Parallel Kit',
      currentPrice: '$58,600',
      originalPrice: '',
      discount: '',
      savedAmount: '',
    },
  ];

  return (
    <div className="recommend">
      <div className="recommend-header">
        <h1>Recommended for you</h1>
        <a href="#">See all items</a>
      </div>
      <div className="deals-grid">
        {deals.map((deal, index) => (
          <div className="deal-item" key={index}>
            <div><img src={deal.imgSrc} alt={deal.title} /></div>
            <div className="deal-info">
              <p>{deal.title}</p>
              <div className="price-info">
                <h4>{deal.currentPrice}</h4>
                {deal.originalPrice && <p>{deal.originalPrice}</p>}
                {deal.discount && <h6>{deal.discount}</h6>}
              </div>
              {deal.savedAmount && <p className='saved-amount'>{deal.savedAmount}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayDeal;
