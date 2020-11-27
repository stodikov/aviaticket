import { format, formatRFC3339 } from 'date-fns';

/**
 * 
 * @param {String} str - Дата в виде строки
 * @param {String} type - 'yyyy.mm.dd'
 * 
 */
export function formatDate(str, type) {
    const date = new Date(str);
    return format(date, type);
}