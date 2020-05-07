// ----- Imports ----- //

import React, {FC} from 'react';
import Anchor from "./anchor";
import {text, withKnobs} from "@storybook/addon-knobs";
import { Pillar, Design, Display } from 'format';
import {selectPillar} from "../storybookHelpers";

// ----- Setup ----- //

const link = (): string =>
    text('Link', 'https://theguardian.com');

const copy = (): string =>
    text('Copy', '“everything that was recommended was done”.');

// ----- Stories ----- //

const Default: FC = () =>
    <Anchor
        format={{
            design: Design.Article,
            display: Display.Standard,
            pillar: selectPillar(Pillar.News)
        }}
        href={link()}
        children={copy()}
    />;


// ----- Exports ----- //

export default {
    component: Anchor,
    title: 'Anchor',
    decorators: [ withKnobs ],
}

export {
    Default,
}
