import React from 'react';

import './button.scss';

function Button({ variant, type, children, handleClick, ...rest }) {
  const btnClass = variant ? `btn btn-${variant}` : 'btn';
  const btnType = type ? type : 'text';

  return (
    <button type={btnType} onClick={handleClick} className={btnClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
