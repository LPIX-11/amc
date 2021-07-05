import { useEffect } from 'react';
import { FormGroup } from 'react-bootstrap';
import styles from './Input.module.scss';

const Input = ({
  autoComplete,
  label,
  name,
  type,
  required,
  config,
  register,
  disabled,
  value = '',
  defaultValue,
  style,
  keyUp,
  id,
  onChange,
  onBlur,
  onFocus,
}) => {
  const _makeItFloat = (element) => {
    element.classList.add(styles.focused);
    element.tagName.toLowerCase() == styles.textarea
      ? (() => {
          element.previousElementSibling.classList.add(styles.floated);
          element.previousElementSibling.classList.add(styles.textarea);
        })()
      : element.previousElementSibling.classList.add(styles.floated);
  };

  useEffect(() => {
    document
      .querySelectorAll(`.${styles['form-input']} .${styles.input}`)
      .forEach((element) => {
        if (element.value || element.disabled) {
          _makeItFloat(element);
        }

        // Add float when input is focused
        element.onfocus = (e) => {
          e.preventDefault();
          _makeItFloat(e.target);
        };

        // Remove float when input is unfocused
        element.onblur = (e) => {
          e.preventDefault();
          if (e.target.value === '') {
            e.target.previousElementSibling.classList.remove(styles.floated);
            e.target.previousElementSibling.classList.remove(styles.textarea);
            e.target.classList.remove(styles.focused);
          }
        };

        element.value != '' && element.focus();

        if (element.disabled && element.value != '') {
          element.classList.add(styles.focused);
          element.previousElementSibling.classList.add(styles.floated);
        }
      });

    // Triggering focus on input when label is clicked
    document
      .querySelectorAll(`.${styles['form-input']} label`)
      .forEach((element) => {
        element.onclick = (e) =>
          !e.target.parentElement.classList.contains(styles.floated) &&
          e.target.parentElement.nextElementSibling.focus();
      });

    return () => {};
  }, []);

  return (
    <FormGroup className={`pb-0 mb-0 ${styles['form-input']}`}>
      <label className={`${styles.label} text-dark`}>
        <div>{label}</div> {required ? <i> *</i> : null}
      </label>
      <input
        ref={register && register(config)}
        name={name}
        // className={`form-control mb-1 ${styles.formControl}`}
        className={`w-100 ${styles.input}`}
        type={type}
        {...(id ? { id: id } : null)}
        {...(onBlur ? { onBlur: onBlur } : null)}
        {...(onFocus ? { onFocus: onFocus } : null)}
        {...(onChange ? { onChange: onChange } : null)}
        {...(keyUp ? { onKeyUp: keyUp } : null)}
        {...(autoComplete ? { autoComplete: autoComplete } : null)}
        {...(value ? { value: value } : null)}
        {...(defaultValue ? { defaultValue: defaultValue } : null)}
        {...(style ? { style: style } : null)}
        // placeholder={placeholder}
        disabled={disabled}
      />
    </FormGroup>
  );
};

export default Input;
