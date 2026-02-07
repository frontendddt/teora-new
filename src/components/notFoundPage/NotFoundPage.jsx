import React from 'react';
import './NotFoundPage.css'; 
import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center purpleColor">
            
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h2 className="h2">Looks like you're lost</h2>
                <p>The page you are looking for is not available!</p>
                <Link href="/" className="link_404">Go to Home</Link>
              </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
