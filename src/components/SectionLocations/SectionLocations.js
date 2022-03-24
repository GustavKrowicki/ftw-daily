import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import helsinkiImage from './images/location_aarhus.jpg';
import rovaniemiImage from './images/location_odense.jpg';
import rukaImage from './images/location_copenhagen.jpeg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Østjylland',
          helsinkiImage,
          '?address=Østjylland%2C%20Denmark&bounds=56.66310096%2C10.89217041%2C55.76577265%2C9.66579364'
        )} 
        {locationLink(
          'Fyn',
          rovaniemiImage,
          '?address=Fyn%2C%20Denmark&bounds=55.87340122%2C10.90689528%2C54.90730576%2C9.68051851'
        )}
        {locationLink(
          'Sjælland',
          rukaImage,
          '?address=Sjælland%2C%20Denmark&bounds=56.4682571%2C13.2347478%2C54.5420361%2C10.78199426'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
