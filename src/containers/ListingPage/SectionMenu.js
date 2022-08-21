import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';


import css from './ListingPage.module.css';

const SectionMenu = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);

  const customers = publicData?.customers;
  const hasCustomers = customers?.length > 0;
  
  return hasCustomers ? (
    <div className={css.sectionMenu}>
      <h2 className={css.MenuTitle}>
        <FormattedMessage id="ListingPage.menuTitle" />
      </h2>
      {customers.map((c) => {
        return (
          <div key={c.key} className={css.innerdiv}>
            <h3>{c.course}</h3>
            <p>{c.description}</p>
          </div>
        );
      })}
    </div>
  ) : null;


};

SectionMenu.defaultProps = { className: null, rootClassName: null };

SectionMenu.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({ 
    course: string,
    description: string,
  
  }),
};

export default SectionMenu;
