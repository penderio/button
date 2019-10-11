import React from 'react'
import { css, cx } from 'emotion'

const Button = ({ onClick, hover, focus, active, type, className, icon, highlighted, primary, danger, disabled, children }) => (
    <button
        type={type || 'button'}
        disabled={disabled}
        className={cx(css`
            background: #fff;
            border: none;
            border-radius: 6px;
            box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
            -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
            color: #262626;
            cursor: pointer;
            fill: currentColor;
            font-size: 14px;
            font-weight: 400;
            line-height: 30px;
            padding: 0 10px;
            height: 30px;
            position: relative;
            text-align: center;
            text-decoration: none;
            transition: all .05s ease-out;
            user-select: none;
            white-space: nowrap;
            display: flex;
            align-items: center;
            
        `,
            !disabled ? css`
        &:focus, &:hover {
            -webkit-transform: translateY(-1px);
            box-shadow: 0 0 0 0.5px rgba(0,0,0,.02), 0 1px 2px 0 rgba(0,0,0,.2), 0 2px 4px 0 rgba(0,0,0,.1)
            -webkit-box-shadow: 0 0 0 0.5px rgba(0,0,0,.02), 0 1px 2px 0 rgba(0,0,0,.2), 0 2px 4px 0 rgba(0,0,0,.1)
            transform: translateY(-1px);
            outline: none;
        }
        &:active {
            -webkit-transform: translateY(1px);
            box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
            -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
            transform: translateY(1px);
        }
        ` : null,
            !disabled && (hover || focus) ? css`
              -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,.25);
                -webkit-transform: translateY(-1px);
                box-shadow: 0 2px 2px 0 rgba(0,0,0,.25);
                transform: translateY(-1px);
                outline: none;
            ` : null,
            active ? css`
                -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
                -webkit-transform: translateY(1px);
                box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
                transform: translateY(1px);
            ` : null,
            primary ? css`
            background-color: #07f;
            color: #fff;
            font-weight: 700;
            ` : null,
            danger ? css`
            background-color: #f82b60;
            color: #fff;
            font-weight: 700;
            ` : null,
            highlighted ? css`
                background-color: #07f;
                color: #fff;
            ` : null,
            disabled ? css`
                background-color: #e5e5e5;
                color: #666666;
            ` : null,
            className
        )}
        onClick={onClick}
    >
        {icon ? icon({
            height: 16,
            className: children ? css`
                margin-right: 4px;
            ` : null
        }) : null}
        {children}
    </button>
)

export default Button