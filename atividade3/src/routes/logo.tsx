import React from 'react';
import { Link } from 'react-router-dom';

const WhatsAppLogo = () => {
  return (
    <Link to="https://wa.me/seunumerodetelefone" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <img
        src="whatsapp.png"
        alt="Logo do WhatsApp"
        style={{ width: '70px', height: 'auto', borderRadius: '50%' }}
      />
    </Link>
  );
};

export default WhatsAppLogo;
