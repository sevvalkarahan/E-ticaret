import { twMerge } from 'tailwind-merge'
import { ClipLoader } from 'react-spinners';

const Button = ({
    children,
    size = "md",
    variant = "default",
    className,
    startIcon,
    endIcon,
    iconOnly = false,
    icon,
    onClick,
    isLoading,
    disabled = false,
    type = "button",
    ...rest
}) => {

    const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg transition text-sm";

    const variantClasses = {
        default: "bg-gray-200 text-black hover:bg-gray-300",
        primary: "bg-primary-500 text-white shadow-theme-xs hover:bg-primary-600 disabled:bg-primary-300",
        outline: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        accent: "bg-accent-900 text-white shadow-theme-xs hover:bg-accent-700 disabled:bg-accent-300",
    };

    const sizeClasses = {
        sm: "px-4 py-3",
        md: "px-5 py-3.5",
        lg: "px-6 py-4",
    };

    const classes = twMerge(
        baseClasses,
        iconOnly ? '!p-2.5 !aspect-square !gap-0' : sizeClasses[size],
        variantClasses[variant],
        className
    );

    const loaderColors = {
        primary: "#FFFFFF",
        accent: "#FFFFFF",
        outline: "#002F87",
        default: "#333333",
    };

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...rest} >
            {isLoading && (
                <ClipLoader size={size === 'sm' ? 20 : 24} color={loaderColors[variant]} speedMultiplier={0.7} />
            )}
            {!isLoading && iconOnly && icon}
            {!isLoading && !iconOnly && (
                <>
                    {startIcon && <span className="flex items-center mr-1">{startIcon}</span>}
                    {children}
                    {endIcon && <span className="flex items-center ml-1">{endIcon}</span>}
                </>
            )}
        </button>
    );
};

export default Button;




