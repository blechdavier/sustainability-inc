export function formatMass(kg: number): string {
    if (kg < 1) {
        return `${(kg * 1000).toFixed(0)}g`;
    }
    if (kg < 100) {
        return `${kg.toFixed(1)}kg`;
    }
    if (kg < 1000) {
        return `${kg.toFixed(0)}kg`;
    }
    if (kg < 100000) {
        return `${(kg / 1000).toFixed(1)}t`;
    }
    return `${(kg / 1000).toFixed(0)}t`;
}

export function formatMoney(amount: number): string {
    if (amount < 10_000) {
        return `${amount.toLocaleString(
            undefined,
            { maximumFractionDigits: 2, minimumFractionDigits: 2 }
        )}`;
    }
    if (amount < 10_000_000) {
        return `${(amount / 1000).toLocaleString(
            undefined,
            { maximumFractionDigits: 1 }
        )}k`;
    }
    if (amount < 10_000_000_000) {
        return `${(amount / 1000000).toLocaleString(
            undefined,
            { maximumFractionDigits: 1 }
        )}m`;
    }
    return `${(amount / 1000000000).toLocaleString(
        undefined,
        { maximumFractionDigits: 1 }
    )}b`;
}

export function formatMoneyShort(amount: number): string {
    if (amount < 100) {
        return `${amount.toLocaleString(
            undefined,
            { maximumFractionDigits: 2, minimumFractionDigits: 2 }
        )}`;
    }
    if (amount < 1000) {
        return `${amount.toLocaleString(
            undefined,
            { maximumFractionDigits: 0 }
        )}`;
    }
    if (amount < 10_000) {
        return `${(amount / 1_000).toLocaleString(
            undefined,
            { maximumFractionDigits: 1 }
        )}k`;
    }
    if (amount < 10_000_000) {
        return `${(amount / 1_000_000).toLocaleString(
            undefined,
            { maximumFractionDigits: 1 }
        )}m`;
    }
    return `${(amount / 1_000_000_000).toLocaleString(
        undefined,
        { maximumFractionDigits: 1 }
    )}b`;
}