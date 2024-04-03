import { type FC, type ReactNode } from 'react'

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;

};

type WarningBoxProps = {
    mode: 'warning';
    severity: 'high' | 'low' | 'medium';
    children: ReactNode;
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;


const InfoBox: FC<InfoBoxProps> = (props) => {
    //used for warning and info mode
    const { mode, children } = props;
    if (mode === 'hint') {

        return (
            <aside className='infobox infobox-hint'>
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>
        )
    }
    const { severity } = props;
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox