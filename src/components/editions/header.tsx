// ----- Imports ----- //

import { css } from '@emotion/core';
import { culture, remSpace } from '@guardian/src-foundations';
import { from } from '@guardian/src-foundations/mq';
import { Design, Display, Format } from '@guardian/types';
import Byline from 'components/editions/byline';
import HeaderImage from 'components/editions/headerImage';
import Headline from 'components/editions/headline';
import Lines from 'components/editions/lines';
import Series from 'components/editions/series';
import Standfirst from 'components/editions/standfirst';
import { getFormat, Item } from 'item';
import type { FC, ReactElement } from 'react';
import type { SerializedStyles } from '@emotion/core';
// ----- Component ----- //

interface Props {
	item: Item;
}

interface HeaderProps {
	item: Item;
	className?: SerializedStyles;
	format: Format;
}

const headerStyles = css`
	padding: 0 ${remSpace[3]} ${remSpace[4]};

	${from.wide} {
		padding: 0 ${remSpace[24]} ${remSpace[4]};
	}
`;

const reviewHeaderStyles = css`
	background-color: ${culture[800]};
	color: ${culture[300]};
`;

const showcaseHeaderStyles = css`
	margin: 0;

	${from.wide} {
		margin: 0 auto;
	}

	${from.phablet} {
		margin-left: ${remSpace[24]};
	}
`;

const StandardHeader: FC<HeaderProps> = ({ item, className, format }) => (
	<header css={[headerStyles, className]}>
		<HeaderImage item={item} />
		<Series item={item} />
		<Headline item={item} format={format} />
		<Standfirst item={item} />
		<Lines />
		<Byline item={item} />
	</header>
);

const ShowcaseHeader: FC<HeaderProps> = ({ item, format }) => (
	<header css={showcaseHeaderStyles}>
		<Series item={item} />
		<Headline item={item} format={format} />
		<HeaderImage item={item} />
		<Standfirst item={item} />
		<Lines />
		<Byline item={item} />
	</header>
);

const renderArticleHeader = (item: Item): ReactElement<Props> => {
	const format = getFormat(item);
	switch (item.display | item.design) {
		case Design.Review:
			return (
				<StandardHeader
					item={item}
					className={reviewHeaderStyles}
					format={format}
				/>
			);
		case Display.Showcase:
			return <ShowcaseHeader item={item} format={format} />;
		default:
			return <StandardHeader item={item} format={format} />;
	}
};

const Container: FC<Props> = ({ item }: Props) => {
	return <>{renderArticleHeader(item)}</>;
};

// ----- Exports ----- //

export default Container;
