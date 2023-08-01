import { LoadingOutlined } from '@ant-design/icons';
import { FC } from 'react';

import styles from './Button.module.scss';
import { buttonType, buttonVariants, buttonView } from './types';

const Button: FC<buttonType> = (props) => {

  const {
    variant = 'violet',
    view = 'button',
    text,
    afterIcon,
    beforeIcon,
    icon,
    fill,
    load,
    exText,
    download,
    ...buttonProps
  } = props;

  const switchVariant = (variant: buttonVariants) => {
    switch (variant) {
      case 'violet':
        return styles.var_violet;
      case 'aqua':
        return styles.var_aqua;
      case 'light-violet':
        return styles.var_light_violet;
    }
  };

  const switchView = (view: buttonView) => {
    switch (view) {
      case 'button':
        return styles.button_def;
      case 'icon':
        return styles.button_icon;
      default:
        return styles.button_def;
    }
  };

  if (download) {
    return (
      <a
        href={download}
        download={download}
        // target='_blank'
        // rel="noreferrer"
        className={`${styles.wrapper} ${switchVariant(variant)} ${switchView(view)} ${fill ? styles.fill : ''} ${load ? styles.load : ''}`}
      >
        {
          load && <div className={styles.load}><LoadingOutlined /></div>
        }
        {
          icon && <div className={styles.icon}>{icon}</div>
        }
        {
          beforeIcon && (
            <div className={styles.before}>
              {beforeIcon}
            </div>
          )
        }
        {
          text && (
            <div className={styles.text}>
              {text}
              {exText && <span>{exText}</span>}
            </div>
          )
        }
        {
          afterIcon && (
            <div className={styles.after}>
              {afterIcon}
            </div>
          )
        }
      </a>
    );
  }

  return (
    <button
      {...buttonProps}
      type='button'
      className={`${styles.wrapper} ${switchVariant(variant)} ${switchView(view)} ${fill ? styles.fill : ''} ${load ? styles.load : ''}`}
    >
      {
        load && <div className={styles.load}><LoadingOutlined /></div>
      }
      {
        icon && <div className={styles.icon}>{icon}</div>
      }
      {
        beforeIcon && (
          <div className={styles.before}>
            {beforeIcon}
          </div>
        )
      }
      {
        text && (
          <div className={styles.text}>
            {text}
            {exText && <span>{exText}</span>}
          </div>
        )
      }
      {
        afterIcon && (
          <div className={styles.after}>
            {afterIcon}
          </div>
        )
      }
    </button>
  );
};

export default Button;
