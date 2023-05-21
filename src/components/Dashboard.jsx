import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const sections = [
    {
      title: 'Order Your Own',
      image: 'https://wecatersubs.com/wp-content/uploads/2020/05/subway-6-inch-sub.png',
      link: 'https://www.subway.com/en-ca/restaurant/11425-0/menu?intcmp=yext-local:owned:order:Order%20Pickup:fwh-no-value-w2-2020:0:button:0:orderpickup:hu:local-ca-en-v1&segment_code=0',
      linkText: 'Order Now',
      className: 'order'
    },
    {
      title: 'School Lunch',
      image: 'https://www.subwayexpress.co.nz/Images/hompage/sandwich2.png',
      link: 'https://example.com',
      linkText: 'Explore',
      className: 'school-lunch'
    },
    {
      title: 'Catering',
      image: 'https://www.subwayexpress.co.nz/Images/hompage/catering.png',
      link: 'https://cateringca.subway.com/index.cfm?fuseaction=order&action=preorder&store_code=11425&distribution_type=2',
      linkText: 'Order Now',
      className: 'catering'
    },
    {
      title: 'Rewards',
      image: 'https://wecatersubs.com/wp-content/uploads/2020/05/myway-rewards-logo.png',
      link: 'https://id.subway.com/02d64b66-5494-461d-8e0d-5c72dc1efa7f/oauth2/v2.0/authorize?p=b2c_1a_signup-r2&ui_locales=en-CA&client_id=502546f5-a6d5-48ed-be47-6c7a5c984770&redirect_uri=https%3a%2f%2forder.subway.com%2f&response_mode=form_post&response_type=code+id_token&scope=openid&state=OpenIdConnect.AuthenticationProperties%3d3Hxqitd6saC4k6iqyFtPzw9zQq2PNEtHAnbFC1yenEjEXWCmzNV6cfYBWlbSP4ywk2LdYTjvaPsH0Jskj6OuREINIc2lK6fWxSN4sQAeTEAiMGKeVJVQw_m0TbX7bdS_VH8LkCTEm133Jnx2trtkIY28ryonp8Grmt8_rdLnoDITDrwnmbiOpuB0AyDyOrOLFEO6WsKP793FqT7JGHnONvXxIvh-vzZKs8li_xgjUCVxZA20Sr8EWn0kWA_BBjdWxh4CUQ&nonce=637243933197409016.Njk5OGMyOTEtZmRmNS00NDRjLWE1ODYtYzA4YThmMThhMDRkYTE0ZTk3Y2EtZjYwMC00ODU2LTkyNTQtY2VhYmI1MGZlNzBl',
      linkText: 'Check It Out',
      className: 'rewards'
    },
    {
      title: 'Contact Us',
      image: 'https://www.subwayexpress.co.nz/Images/hompage/Rectangle_290.png',
      link: '/contact-us-subway',
      linkText: 'Get In Touch',
      className: 'contact-us'
    },
  ];

  const content = sections.map(({ title, image, link, linkText, className }) =>
    (
    <section className={className}>
      <img src={image} alt=''/>
      <h2>{title}</h2>
      <a href={link}>{linkText}</a>
    </section>
    )
  )

  return (
    <main>
      {content}
    </main>
  )
}

export default Dashboard;