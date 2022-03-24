import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import IconLogo from './IconLogo';
import LogoImage from './catery_logo_desktop.png';
import DesktopLogoImage from './catery_logo_desktop.png';
import MobileLogoImage from './catery_logo_mobile.png';
import css from './Logo.module.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  const logoImage = isMobile ? MobileLogoImage : DesktopLogoImage;

  return (
    <img
      className={classes}
      src={logoImage}
      alt={config.siteTitle}
      {...rest}
    />
  );
};

export default Logo;
