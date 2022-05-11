import React from 'react';
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

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './Chargebee.module.css';

const Chargebee = () => {
    return (
      <StaticPage
        className={css.root}
        title="About"
        schema={{
          '@context': 'http://schema.org',
          '@type': 'Chargebee',
          description: 'Description of this page',
          name: 'About page',
        }}
      >
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>
          <LayoutWrapperMain>
            <h1>Some content</h1>
            <div> blanv
            
            
                 la vla a</div>

            <div>
            <ExternalLink href="javascript:void(0)" data-cb-type="checkout" data-cb-item-0="Catery-basic-DKK-Yearly" data-cb-item-0-quantity="1" >subscribe</ExternalLink>              <ExternalLink href="https://google.com">
                Go to Google
              </ExternalLink>

            </div>

          </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </StaticPage>
    );
  };
  
  export default Chargebee;