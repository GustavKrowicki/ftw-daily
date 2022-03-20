import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingMenuForm } from '../../forms';

import css from './EditListingMenuPanel.module.css';


const EditListingMenuPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;
 

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingMenuPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingMenuPanel.createListingTitle" />
  );


  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      
      <EditListingMenuForm
        className={css.form}
        publicData={publicData}
        initialValues = {
          {
            customers: publicData?.customers
          }
        }
        
        
        onSubmit={values => {
          const {
            customers
          } = values;
          
          const updateValues = {
            publicData: {
              customers
            }
          };
          onSubmit(updateValues);
        }}



        onChange={onChange}
        disabled={disabled}
        ready={ready}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
      
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingMenuPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingMenuPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,

  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingMenuPanel;
