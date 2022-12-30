
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
} from '../../components';


import StaticPage from '../StaticPage/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';

import css from './Chargebee.module.css';


const PricingPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="About"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PricingPage',
        description: 'Description of this page',
        name: 'Pricingpage',
      }}
    >

      
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <h1>Some content</h1>
          
          <div>
            <NamedLink name="LandingPage">Pricing </NamedLink> or
          
            <stripe-pricing-table
      pricing-table-id="prctbl_1LT9MDLqmfo9asOyHU4zVnYW"
      publishable-key={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
    </stripe-pricing-table>
            
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default PricingPage;

