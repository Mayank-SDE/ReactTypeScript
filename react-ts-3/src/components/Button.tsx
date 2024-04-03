import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'>;

type AnchorProps = ComponentPropsWithoutRef<'a'>;


const isAnchorProps = (props: AnchorProps | ButtonProps): props is AnchorProps => {
    return "href" in props;
};


const Button = (props: AnchorProps | ButtonProps) => {
    if (isAnchorProps(props)) {
        return <a className='button' {...props}></a>
    }
    return (
        <button className='button' {...props}></button>
    )
}

export default Button