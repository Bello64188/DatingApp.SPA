import { cloneWithOffset, getDateOffset, getUTCOffset } from '../units/offset';
import { absFloor } from '../utils';
import { isDateValid, isNumber } from '../utils/type-checks';
import { getFullYear, getMonth } from '../utils/date-getters';
import { add } from './add-subtract';
import { cloneDate } from '../create/clone';
export function diff(date, input, units, asFloat, config = {}) {
    if (!isDateValid(date)) {
        return NaN;
    }
    const that = cloneWithOffset(input, date, config);
    if (!isDateValid(that)) {
        return NaN;
    }
    const zoneOffset = (getDateOffset(input) - getDateOffset(date)) * 6e4;
    const zoneDelta = isNumber(config._zoneDelta)
        ? config._zoneDelta * 6e4
        : (getUTCOffset(input, config) - getUTCOffset(date, config)) * 6e4;
    let output;
    switch (units) {
        case 'year':
            output = monthDiff(date, that) / 12;
            break;
        case 'month':
            output = monthDiff(date, that);
            break;
        case 'quarter':
            output = monthDiff(date, that) / 3;
            break;
        case 'seconds':
            output = (date.valueOf() - that.valueOf()) / 1e3;
            break; // 1000
        case 'minutes':
            output = (date.valueOf() - that.valueOf()) / 6e4;
            break; // 1000 * 60
        case 'hours':
            output = (date.valueOf() - that.valueOf()) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (date.valueOf() - that.valueOf() - (zoneDelta === 0 ? zoneOffset : zoneDelta)) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (date.valueOf() - that.valueOf() - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = date.valueOf() - that.valueOf();
    }
    return asFloat ? output : absFloor(output);
}
function monthDiff(a, b) {
    // difference in months
    const wholeMonthDiff = ((getFullYear(b) - getFullYear(a)) * 12) + (getMonth(b) - getMonth(a));
    // b is in (anchor - 1 month, anchor + 1 month)
    const anchor = add(cloneDate(a), wholeMonthDiff, 'month');
    let anchor2;
    let adjust;
    if (b.valueOf() - anchor.valueOf() < 0) {
        anchor2 = add(cloneDate(a), wholeMonthDiff - 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor.valueOf() - anchor2.valueOf());
    }
    else {
        anchor2 = add(cloneDate(a), wholeMonthDiff + 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor2.valueOf() - anchor.valueOf());
    }
    // check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jaHJvbm9zL21vbWVudC9kaWZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsTUFBTSxVQUFVLElBQUksQ0FBQyxJQUFVLEVBQUUsS0FBVyxFQUN2QixLQUFpQixFQUFFLE9BQWdCLEVBQ25DLFNBQTRCLEVBQUU7SUFFakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsTUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3RFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUc7UUFDekIsQ0FBQyxDQUFDLENB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QUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDcEY7U0FBTTtRQUNMLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsMEJBQTBCO1FBQzFCLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNwRjtJQUVELHdEQUF3RDtJQUN4RCxPQUFPLENBQUMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZVdpdGhPZmZzZXQsIGdldERhdGVPZmZzZXQsIGdldFVUQ09mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhYnNGbG9vciB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzRGF0ZVZhbGlkLCBpc051bWJlciB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuL2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihkYXRlOiBEYXRlLCBpbnB1dDogRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgIHVuaXRzOiBVbml0T2ZUaW1lLCBhc0Zsb2F0OiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9XG4gICAgICAgICAgICAgICAgICAgICApOiBudW1iZXIge1xuICBpZiAoIWlzRGF0ZVZhbGlkKGRhdGUpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIGNvbnN0IHRoYXQgPSBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIGRhdGUsIGNvbmZpZyk7XG5cbiAgaWYgKCFpc0RhdGVWYWxpZCh0aGF0KSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICBjb25zdCB6b25lT2Zmc2V0ID0gKGdldERhdGVPZmZzZXQoaW5wdXQpIC0gZ2V0RGF0ZU9mZnNldChkYXRlKSkgKiA2ZTQ7XG4gIGNvbnN0IHpvbmVEZWx0YSA9IGlzTnVtYmVyKGNvbmZpZy5fem9uZURlbHRhKVxuICAgID8gY29uZmlnLl96b25lRGVsdGEgKiA2ZTRcbiAgICA6IChnZXRVVENPZmZzZXQoaW5wdXQsIGNvbmZpZykgLSBnZXRVVENPZmZzZXQoZGF0ZSwgY29uZmlnKSkgKiA2ZTQ7XG5cbiAgbGV0IG91dHB1dDtcbiAgc3dpdGNoICh1bml0cykge1xuICAgIGNhc2UgJ3llYXInOlxuICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKGRhdGUsIHRoYXQpIC8gMTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb250aCc6XG4gICAgICBvdXRwdXQgPSBtb250aERpZmYoZGF0ZSwgdGhhdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgIG91dHB1dCA9IG1vbnRoRGlmZihkYXRlLCB0aGF0KSAvIDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIG91dHB1dCA9IChkYXRlLnZhbHVlT2YoKSAtIHRoYXQudmFsdWVPZigpKSAvIDFlMztcbiAgICAgIGJyZWFrOyAvLyAxMDAwXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSkgLyA2ZTQ7XG4gICAgICBicmVhazsgLy8gMTAwMCAqIDYwXG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgb3V0cHV0ID0gKGRhdGUudmFsdWVPZigpIC0gdGhhdC52YWx1ZU9mKCkpIC8gMzZlNTtcbiAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MFxuICAgIGNhc2UgJ2RheSc6XG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSAtICh6b25lRGVsdGEgPT09IDAgPyB6b25lT2Zmc2V0IDogem9uZURlbHRhKSkgLyA4NjRlNTtcbiAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSAtIHpvbmVEZWx0YSkgLyA2MDQ4ZTU7XG4gICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcsIG5lZ2F0ZSBkc3RcbiAgICBkZWZhdWx0OlxuICAgICAgb3V0cHV0ID0gZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKTtcbiAgfVxuXG4gIHJldHVybiBhc0Zsb2F0ID8gb3V0cHV0IDogYWJzRmxvb3Iob3V0cHV0KTtcbn1cblxuZnVuY3Rpb24gbW9udGhEaWZmKGE6IERhdGUsIGI6IERhdGUpOiBudW1iZXIge1xuICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICBjb25zdCB3aG9sZU1vbnRoRGlmZiA9ICgoZ2V0RnVsbFllYXIoYikgLSBnZXRGdWxsWWVhcihhKSkgKiAxMikgKyAoZ2V0TW9udGgoYikgLSBnZXRNb250aChhKSk7XG4vLyBiIGlzIGluIChhbmNob3IgLSAxIG1vbnRoLCBhbmNob3IgKyAxIG1vbnRoKVxuICBjb25zdCBhbmNob3IgPSBhZGQoY2xvbmVEYXRlKGEpLCB3aG9sZU1vbnRoRGlmZiwgJ21vbnRoJyk7XG4gIGxldCBhbmNob3IyO1xuICBsZXQgYWRqdXN0O1xuXG5cbiAgaWYgKGIudmFsdWVPZigpIC0gYW5jaG9yLnZhbHVlT2YoKSA8IDApIHtcbiAgICBhbmNob3IyID0gYWRkKGNsb25lRGF0ZShhKSwgd2hvbGVNb250aERpZmYgLSAxLCAnbW9udGgnKTtcbiAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgIGFkanVzdCA9IChiLnZhbHVlT2YoKSAtIGFuY2hvci52YWx1ZU9mKCkpIC8gKGFuY2hvci52YWx1ZU9mKCkgLSBhbmNob3IyLnZhbHVlT2YoKSk7XG4gIH0gZWxzZSB7XG4gICAgYW5jaG9yMiA9IGFkZChjbG9uZURhdGUoYSksIHdob2xlTW9udGhEaWZmICsgMSwgJ21vbnRoJyk7XG4gICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICBhZGp1c3QgPSAoYi52YWx1ZU9mKCkgLSBhbmNob3IudmFsdWVPZigpKSAvIChhbmNob3IyLnZhbHVlT2YoKSAtIGFuY2hvci52YWx1ZU9mKCkpO1xuICB9XG5cbiAgLy8gY2hlY2sgZm9yIG5lZ2F0aXZlIHplcm8sIHJldHVybiB6ZXJvIGlmIG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIC0od2hvbGVNb250aERpZmYgKyBhZGp1c3QpIHx8IDA7XG59XG4iXX0=