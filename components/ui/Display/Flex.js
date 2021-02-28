import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

export const Flex = props => {
  /* istanbul ignore next */
  const flexBoxStyling = css`
    display: flex;
    flex-direction: ${props.column ? 'column' : 'row'} !important;
    justify-content: ${props.content ? props.content : 'initial'} !important;
    align-items: ${props.items ? props.items : 'initial'} !important;
    ${props.height && { height: props.height }};
    ${props.width && { width: props.width }};
  `;

  return (
    <div className={props.class} css={flexBoxStyling}>
      {props.children}
    </div>
  );
};
// Docs

Flex.propTypes = {
  /**
   * Defines flex direction to column
   */
  column: PropTypes.bool,
  /**
   * Displayed content position
   */
  content: PropTypes.oneOf(['center', 'end', 'flex-end', 'flex-start', 'inherit', 'initial', 'left', 'normal', 'revert', 'right', 'safe', 'space-around', 'space-between', 'space-evenly']),
  /**
   * How should the items be aligned
   */
  items: PropTypes.oneOf(['baseline', 'center', 'end', 'first baseline', 'flex-end', 'flex-start', 'inherit', 'initial', 'last baseline', 'normal', 'revert', 'right', 'safe', 'self-end', 'self-start', 'start']),
  /**
   * Additionnal classes to be added
   */
  class: PropTypes.string,
  /**
   * Child Component(s)
   */
  children: PropTypes.node
};

Flex.defaultProps = {
  column: false,
  content: 'initial',
  items: 'initial',
  class: '',
  children: React.createElement('div')
};
