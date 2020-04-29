// ----- Imports ----- //

import React, { FC, ReactNode } from 'react';
import { SerializedStyles, css } from '@emotion/core';
import { Format, Design } from '@guardian/types/Format';
import { neutral } from '@guardian/src-foundations/palette';

import { darkModeCss } from 'styles';
import { getPillarStyles } from 'pillarStyles';


// ----- Component ----- //

interface Props {
    href: string;
    children?: ReactNode;
    format: Format;
    className?: SerializedStyles;
}

const styles = css`
    text-decoration: none;

    ${darkModeCss`
        color: ${neutral[86]};
    `}
`;

const colour = (format: Format): SerializedStyles => {
    const { kicker, inverted } = getPillarStyles(format.pillar);
    switch (format.design) {
        case Design.Media:
            return css`
                color: ${inverted};
                border-bottom: 0.0625rem solid ${neutral[20]};
            `
        default:
            return css`
                color: ${kicker};
                border-bottom: 0.0625rem solid ${neutral[86]};
            `
    }
}

const Anchor: FC<Props> = ({ format, children, href, className }: Props) =>
    <a css={[styles, className, colour(format)]} href={href}>
        {children}
    </a>


// ----- Exports ----- //

export default Anchor;
