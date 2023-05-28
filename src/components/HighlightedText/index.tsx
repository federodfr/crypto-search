import React from 'react';

import './styles.css';

interface Props {
    highlight: string
    value: string;
}

const HighlightedText: React.FC<Props> = ({highlight, value}) => {
    const splittedName: Array<string> = value.split(new RegExp(`(${highlight})`, 'gi'))

    return (
        <div>
            {splittedName.map( (split: string) => {
                return split.toLowerCase() === highlight.toLowerCase() ? 
                    <b>{split}</b> 
                    : <span>{split}</span>
            })}
        </div>
    )
}

export default HighlightedText;