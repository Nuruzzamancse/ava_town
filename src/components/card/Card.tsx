import React from 'react'
import { Props } from './types'
import classNames from 'clsx'

const Card: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {className = '', children} = props;
  return (
    <div className={classNames({
        [className]: true,
        'bg-white': true,
    })}>
        {children}
    </div>
  )
}

export default Card