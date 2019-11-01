import React from 'react'
import { css, cx } from 'emotion'

const Button = ({ onClick, hover, focus, active, type, className, icon, highlighted, primary, danger, disabled, children }) => {

    const styles = {
        default: {
            default: `
                background-color: rgb(255, 255, 255);
                box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            `,
            focus: `
                background-color: rgb(255, 255, 255);
                box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.12) 0px 3px 9px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            `,
            hover: `
                background-color: rgb(255, 255, 255);
                box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.12) 0px 3px 9px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            `,
            disabled: `
                opacity: 0.7;
            `
        },
        primary: {
            default: `
                background-color: rgb(0, 34, 253);
                box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                color: rgb(255, 255, 255);
                `,
            focus: `
                background-color: rgb(0, 34, 253);
                box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            `,
            hover: `
                background-color: rgb(0, 34, 253);
                box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                color: rgb(255, 255, 255);
                `,
                disabled: `
                    opacity: 0.7;
                `
        },
        danger: {
            default: `
                background-color: rgb(253, 11, 130);
                box-shadow: rgb(202, 27, 113) 0px 1px 0px 0px, rgb(253, 11, 130) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                color: #fff;
            `,
            focus: `
            background-color: rgb(253, 11, 130);
            box-shadow: rgb(202, 27, 113) 0px 1px 0px 0px, rgb(253, 11, 130) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
        `,
            hover: `
                background-color: rgb(253, 11, 130);
                box-shadow: rgb(202, 27, 113) 0px 1px 0px 0px, rgb(253, 11, 130) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            `,
            disabled: `
                opacity: 0.7;
            `
        },
        highlighted: {
            default: `
                background-color: rgb(255, 255, 255);
                box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                color: rgb(0, 34, 253);
                `,
            focus: `
            background-color: rgb(255, 255, 255);
            box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            `,
            hover: `
                background-color: rgb(255, 255, 255);
                box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                color: rgb(0, 34, 253);
                `,
                disabled: `
                    opacity: 0.7;
                `
        },
    }

    let style = styles.default

    if (primary) {
        style = styles.primary
    }

    if (danger) {
        style = styles.danger
    }

    if (highlighted) {
        style = styles.highlighted
    }

    return (
        <button
            type={type || 'button'}
            disabled={disabled}
            className={cx(
                css`
                background: #fff;
                border: none;
                border-radius: 6px;
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
                &:hover {
                    ${style.hover}
                }
                &:focus {
                    ${style.focus}
                    outline: 0;
                }
                &:active {
                    ${style.focus}
                    outline: 0;
                }
                &[disabled] {
                    ${style.disabled}
                }
            `,
                css(style.default),
                active ? css(style.hover) : null,
                hover ? css(style.hover) : null,
                focus ? css(style.focus) : null,
                disabled ? css(style.disabled) : null,
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
}

export default Button