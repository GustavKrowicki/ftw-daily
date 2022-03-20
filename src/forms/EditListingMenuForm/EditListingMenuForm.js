import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { render } from 'react-dom'
import {Form, Button, FieldTextInput } from '../../components';
import  arrayMutators  from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import css from './EditListingMenuForm.module.css';

export const EditListingMenuFormComponent = props => (
  <FinalForm
  mutators={{
    ...arrayMutators
  }}
    {...props}
    render={formRenderProps => {
      const {
        className,
        disabled,
        ready,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        handleSubmit,
        
        form: {
          mutators: { push, pop }
        },
        values, 
       form
      } = formRenderProps;

      const menuLabelMessage = intl.formatMessage({
        id: 'EditListingMenuForm.menuLabel',
      });
      const menuPlaceholderMessage = intl.formatMessage({
        id: 'EditListingMenuForm.menuPlaceholder',
      });

      const menu2LabelMessage = intl.formatMessage({
        id: 'EditListingMenuForm.menu2Label',
      });
      const menu2PlaceholderMessage = intl.formatMessage({
        id: 'EditListingMenuForm.menu2Placeholder',
      });

      const menu3LabelMessage = intl.formatMessage({
        id: 'EditListingMenuForm.menu3Label',
      });
      const menu3PlaceholderMessage = intl.formatMessage({
        id: 'EditListingMenuForm.menu3Placeholder',
      });



      
      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingMenuForm.updateFailed" />
        </p>
      ) : null;
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingMenuForm.showListingFailed" />
        </p>
      ) : null;


      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      
      
      return (
        <Form className={classes}    onSubmit={handleSubmit} >
          {errorMessage}
          {errorMessageShowListing}
         
          <div classNames={css.courseDiv}>
          
         
                   
          <FieldArray name="customers">
             
             
             
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={name}>
                    <label>Ret #{index + 1}</label>
                    <FieldTextInput
                      type="textarea"
                      name={`${name}.course`}
                      component="input"
                      placeholder={menuPlaceholderMessage}
                    />
                    <FieldTextInput
                    
                      type="textarea"
                      name={`${name}.description`}
                      component="input"
                      placeholder="Last Name"
                    />
                    <span
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      
                    </span>
                  </div>
                ))
              }
            </FieldArray>
       
          </div>
         
        <button type="button" onClick={() => pop('customers')}>
                Remove Customer
              </button>
          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
         >
            {saveActionMsg}
          </Button>

          <button type="button" onClick={() => push('customers', undefined)} >
          Tlføj endnu en ret
        </button>

        </Form>
        
      );
    }}
  />
);

EditListingMenuFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingMenuFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditListingMenuFormComponent);
