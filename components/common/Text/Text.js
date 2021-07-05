import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Text = (props) => {
  /* istanbul ignore next */
  const textWrapperStyling = css`
    display: ${props.display ? props.display : 'block'};
    justify-content: ${props.alignment ? props.alignment : 'center'};
    padding-top: ${props.paddingTop ? props.paddingTop : 0}px;
    padding-right: ${props.paddingRight ? props.paddingRight : 0}px;
    padding-bottom: ${props.paddingBottom ? props.paddingBottom : 0}px;
    padding-left: ${props.paddingLeft ? props.paddingLeft : 0}px;
    margin-top: ${props.margingTop ? props.margingTop : 0}px;
    margin-right: ${props.margingRight ? props.margingRight : 0}px;
    margin-bottom: ${props.margingBottom ? props.margingBottom : 0}px;
    marging-left: ${props.margingLeft ? props.margingLeft : 0}px;
  `;

  /* istanbul ignore next */
  const textStyling = css`
    color: ${props.color ? props.color : '#000'};
    font-family: ${props.fontFamily ? props.fontFamily : 'Poppins, sans-serif'};
    font-size: ${props.size ? props.size : '18px'};
    font-weight: ${props.bold ? '700' : '400'};
    text-align: ${props.alignText ? props.alignText : 'initial'};
  `;

  return (
    <div css={textWrapperStyling}>
      <span css={textStyling} className={props.textClass}>
        {props.text}
      </span>
    </div>
  );
};

// Docs
Text.propTypes = {
  /**
   * Text to display
   */
  text: PropTypes.string,
  /**
   * Text color
   */
  color: PropTypes.string,
  /**
   * Text sizz
   */
  size: PropTypes.oneOfType(['number', 'string']),
  /**
   * Defines text display
   */
  display: PropTypes.oneOf(['flex', 'block']),
  /**
   * Sets the text to bold
   */
  bold: PropTypes.bool,
  /**
   * Alignment of the text
   */
  textAlign: PropTypes.oneOf([
    'center',
    'end',
    'inherit',
    'initial',
    'justify',
    'left',
    'match-parent',
    'revert',
    'right',
    'start',
  ]),
  /**
   * Defines the text poisition (Depending on display)
   */
  alignment: PropTypes.oneOf([
    'center',
    'end',
    'flex-end',
    'flex-start',
    'inherit',
    'initial',
    'left',
    'normal',
    'revert',
    'right',
    'safe',
    'space-around',
    'space-between',
  ]),
  /**
   * Inner-space top
   */
  paddingTop: PropTypes.number,
  /**
   * Inner-space right
   */
  paddingRight: PropTypes.number,
  /**
   * Inner-space right
   */
  paddingBottom: PropTypes.number,
  /**
   * Inner-space right
   */
  paddingLeft: PropTypes.number,
  /**
   * Outer-space right
   */
  margingTop: PropTypes.number,
  /**
   * Outer-space right
   */
  margingRight: PropTypes.number,
  /**
   * Outer-space right
   */
  marginglBottom: PropTypes.number,
  /**
   * Outer-space right
   */
  margingLeft: PropTypes.number,
  /**
   * Additionnal classes to be added for text display
   */
  textClass: PropTypes.string,
};

Text.defaultProps = {
  text: 'I am a text',
  display: 'block',
  bold: false,
  textAlign: 'initial',
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  margingTop: 0,
  margingRight: 0,
  marginglBottom: 0,
  margingLeft: 0,
  textClass: '',
};
