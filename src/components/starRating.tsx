// ----- Imports ----- //

import React, { ReactNode, ReactElement } from 'react';
import { css } from '@emotion/core';
import { brandAlt, text } from '@guardian/src-foundations/palette';

import { Item, Design } from 'item';
import { icons, spaceToRem } from 'styles';


// ----- Subcomponents ----- //

const starStyles = css`
    ${icons}
    background-color: ${brandAlt[400]};
    font-size: ${spaceToRem(5)};
    line-height: 1;
    display: inline-block;
    padding: 0 0.2rem ${spaceToRem(1)};
    color: ${text.primary};

    &:nth-of-type(1) {
        padding-left: ${spaceToRem(1)};
    }

    &:nth-of-type(5) {
        padding-right: ${spaceToRem(1)};
    }
`;

const empty = <span css={starStyles}>☆</span>;

const full = <span css={starStyles}>★</span>;

const stars = (rating: number): ReactNode =>
    [empty, empty, empty, empty, empty]
        .fill(full, 0, rating);


// ----- Component ----- //

interface Props {
    item: Item;
}

const StarRating = ({ item }: Props): ReactElement =>
    item.design === Design.Review ? <div>{stars(item.starRating)}</div> : <></>;


// ----- Exports ----- //

export default StarRating;
