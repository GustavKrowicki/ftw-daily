import React from 'react';
import AddressLinkMaybe from './AddressLinkMaybe';

import css from './TransactionPanel.module.css';

// Functional component as a helper to build detail card headings
const DetailCardHeadingsMaybe = props => {
  const {
    showDetailCardHeadings,
    listingTitle,
    subTitle,
    location,
    geolocation,
    showAddress,
  } = props;

  /* 
  const bookingBudgetInfo = intl.formatMessage(
    { id: 'checkoutPage.BudgetInfo' },
  );

const budget = currentTransaction.attributes.protectedData.bookingDatesBudget
 const transactionBudget = intl.formatMessage(
    { id: 'transactionPage.budget' },
    {budget}
  );

const bookingPersonsInfo = intl.formatMessage(
    { id: 'checkoutPage.PersonsInfo' },

  );

const persons = currentTransaction.attributes.protectedData.bookingDatesPersons
  const transactionPersons = intl.formatMessage(
    { id: 'transactionPage.persons' },
    {persons}
  );
/*
   const bookingAddressInfo = intl.formatMessage(
    { id: 'checkoutPage.LocationInfo' },
  );

const location = currentTransaction.attributes.protectedData.location
const transactionLocation = intl.formatMessage(
    { id: 'transactionPage.location' },
    {location}
  );
*/

  return showDetailCardHeadings ? (
    <div className={css.detailCardHeadings}>
      <h2 className={css.detailCardTitle}>{listingTitle}</h2>
      <p className={css.detailCardSubtitle}>{subTitle}</p>
    
      <AddressLinkMaybe location={location} geolocation={geolocation} showAddress={showAddress} />
    </div>
  ) : null;
};

export default DetailCardHeadingsMaybe;
