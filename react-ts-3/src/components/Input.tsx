import { type ComponentPropsWithRef, forwardRef } from 'react'

type InputProps = {
    label: string;
    id: string;
    type: 'text' | 'number';
} & ComponentPropsWithRef<'input'>;


const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, ...props }: InputProps, ref) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref} />
        </p>
    )
});

export default Input