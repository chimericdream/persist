import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import bp from '../../utils/createBreakpointStyles';
import theme from '../../theme';

export const ButtonLevels = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  INVERTED: 'inverted',
  WHITE: 'white',
};

export const ButtonSizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

const ButtonWrapper = styled.button`
  appearance: none;
  background: ${({ level }) => {
    switch (level) {
      case ButtonLevels.SECONDARY:
        return theme.colors.navy;
      case ButtonLevels.TERTIARY:
        return theme.colors.liberty;
      case ButtonLevels.INVERTED:
        return 'transparent';
      case ButtonLevels.WHITE:
        return theme.colors.white;
      case ButtonLevels.PRIMARY:
      default:
        return theme.colors.red;
    }
  }};
  border-color: ${({ level }) => {
    switch (level) {
      case ButtonLevels.SECONDARY:
      case ButtonLevels.INVERTED:
        return theme.colors.navy;
      case ButtonLevels.TERTIARY:
        return theme.colors.liberty;
      case ButtonLevels.WHITE:
        return theme.colors.white;
      case ButtonLevels.PRIMARY:
      default:
        return theme.colors.red;
    }
  }};
  border-radius: 0;
  border-width: 4px;
  color: ${({ level }) => {
    switch (level) {
      case ButtonLevels.TERTIARY:
      case ButtonLevels.INVERTED:
      case ButtonLevels.WHITE:
        return theme.colors.navy;
      case ButtonLevels.PRIMARY:
      case ButtonLevels.SECONDARY:
      default:
        return theme.colors.white;
    }
  }};
  cursor: pointer;
  font-family: ${theme.fontFamily.compressed};
  font-size: ${({ size }) => {
    switch (size) {
      case ButtonSizes.SM:
        return theme.fontSize.lg;
      case ButtonSizes.MD:
      case ButtonSizes.LG:
      default:
        return theme.fontSize.xl;
    }
  }};
  line-height: ${theme.leading.none};
  margin: auto;
  max-width: ${theme.maxWidth.section};
  padding: ${({ size }) => {
    switch (size) {
      case ButtonSizes.LG:
        return `${theme.spacing.sp0} ${theme.spacing.sp2} ${theme.spacing.sp1}`;
      case ButtonSizes.SM:
      case ButtonSizes.MD:
      default:
        return `${theme.spacing.sp0} ${theme.spacing.sp2}`;
    }
  }};
  text-transform: uppercase;
  transition: all 150ms linear;

  &:hover:not(:disabled) {
    background-color: ${({ level }) => {
    switch (level) {
      case ButtonLevels.INVERTED:
        return theme.colors.navy;
      default:
        return 'transparent';
    }
  }};
    color: ${({ level }) => {
    switch (level) {
      case ButtonLevels.PRIMARY:
      case ButtonLevels.SECONDARY:
      case ButtonLevels.TERTIARY:
        return theme.colors.navy;
      case ButtonLevels.INVERTED:
      case ButtonLevels.WHITE:
        return theme.colors.white;
      default:
        return theme.colors.navy;
    }
  }};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ size }) => bp(theme.screens.md, css`
    font-size: ${size === ButtonSizes.LG && theme.fontSize['2xl']};
  `)};
`;

const Button = ({
  children, level, size, ...other
}) => (
  <ButtonWrapper level={level} size={size} {...other}>{children}</ButtonWrapper>
);

Button.propTypes = {
  /** Child text or elements */
  children: PropTypes.node.isRequired,
  /** Determines button color. One of 'primary', 'secondary', 'tertiary', 'inverted', or 'white'. */
  level: PropTypes.oneOf(Object.values(ButtonLevels)),
  /** Button size. one of 'sm', 'md', or 'lg. */
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
};

Button.defaultProps = {
  level: ButtonLevels.PRIMARY,
  size: ButtonSizes.MD,
};

export default Button;