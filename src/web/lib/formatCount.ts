import { integerCommas } from '@root/src/lib/formatters';

export const formatCount = (
    count?: number,
): { short: string; long: string } => {
    if (!count) return { short: '0', long: '0' };
    const countAsInteger = parseInt(count.toFixed(0), 10);
    const displayCountLong = integerCommas(countAsInteger);
    const displayCountShort =
        countAsInteger > 10000
            ? `${Math.round(countAsInteger / 1000)}k`
            : countAsInteger.toString();
    return {
        short: displayCountShort,
        long: displayCountLong,
    };
};
