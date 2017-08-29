import * as camelCase from 'camelcase';

export function normalizeCamelCase(key: string): string {
    const properties = key.split('.');
    Object.keys(properties)
        .forEach((prop: any) => {
            properties[prop] = camelCase(properties[prop]);
        });
    return properties.join('.');
};
