import React from 'react'
import '../css/sponsored.css'

const Sponsored = () => {
    const deals = [
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/P/149346_1590658936.jpg', // Add image sources here
          title: 'Ceramics Shisha Head',
          currentPrice: '$2,499',
          originalPrice: '$5,000',
          discount: '-50%',
          savedAmount: 'You saved $2,501',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/F/149346_1691912441.jpg', // Add image sources here
          title: 'Raw Connoisseur Rolling paper',
          currentPrice: '$22,999',
          originalPrice: '$48,000',
          discount: '-52%',
          savedAmount: 'You saved $25,001',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/V/2791_1698915985.jpg', // Add image sources here
          title: 'Fitness 3 Station',
          currentPrice: '$1,075,000',
          originalPrice: '$1,157,000',
          discount: '-7%',
          savedAmount: 'You save $82,000',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/Z/50475_1713352112.jpg', // Add image sources here
          title: 'Round Head Rubber Dumbbell',
          currentPrice: '$120,000',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/H/133099_1714731155.jpg', // Add image sources here
          title: 'Cloud Energy Home Inverter',
          currentPrice: '$1,564,200',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/F/149346_1616430811.jpg', // Add image sources here
          title: 'iPower 5kva Inverter Infiniti',
          currentPrice: '$1,101,400',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/O/206237_1712919590.jpg', // Add image sources here
          title: 'Foldable Table-Tennis Board',
          currentPrice: '$475/000',
          originalPrice: '$550,000',
          discount: '-14%',
          savedAmount: 'You saved $75,000',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/E/230157_1714235730.jpg', // Add image sources here
          title: 'King Capsule - Men',
          currentPrice: '$29,999',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/C/206237_1660298935.jpg', // Add image sources here
          title: 'Commercial Threadmill',
          currentPrice: '$2,882,000',
          originalPrice: '$3,000,000',
          discount: '-4%',
          savedAmount: 'You save $118,000',
        },
      ];
    
      return (
        <div className="overall-sponsored">
          <div className="sponsored-header">
            <h1>Sponsored Products</h1>
          </div>
          <div className="deals-slider">
            {deals.map((deal, index) => (
              <div className="sponsored-item" key={index}>
                <img src={deal.imgSrc} alt={deal.title} />
                <div className="sponsored-info">
                  <h5>{deal.title}</h5>
                  <div className="sponsored-price-info">
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
    

export default Sponsored
