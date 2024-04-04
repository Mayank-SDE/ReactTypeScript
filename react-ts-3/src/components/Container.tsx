import { ReactNode, type ElementType, ComponentPropsWithRef } from "react";

type ContainerProps<T extends ElementType> = {
    as?: T,
    children: ReactNode
} & ComponentPropsWithRef<T>;
function Container<C extends ElementType>({ as, children, ...props }: ContainerProps<C>) {

    const Component = as || 'div';

    return (
        <Component {...props}>{children}</Component>
    )
}

export default Container