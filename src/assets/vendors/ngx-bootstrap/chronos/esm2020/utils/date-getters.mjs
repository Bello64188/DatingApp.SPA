import { createDate } from '../create/date-from-array';
export function getHours(date, isUTC = false) {
    return isUTC ? date.getUTCHours() : date.getHours();
}
export function getMinutes(date, isUTC = false) {
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
export function getSeconds(date, isUTC = false) {
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
export function getMilliseconds(date, isUTC = false) {
    return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
export function getTime(date) {
    return date.getTime();
}
export function getDay(date, isUTC = false) {
    return isUTC ? date.getUTCDay() : date.getDay();
}
export function getDate(date, isUTC = false) {
    return isUTC ? date.getUTCDate() : date.getDate();
}
export function getMonth(date, isUTC = false) {
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
export function getFullYear(date, isUTC = false) {
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
export function getUnixTime(date) {
    return Math.floor(date.valueOf() / 1000);
}
export function unix(date) {
    return Math.floor(date.valueOf() / 1000);
}
export function getFirstDayOfMonth(date) {
    return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
export function daysInMonth(date) {
    return _daysInMonth(date.getFullYear(), date.getMonth());
}
export function _daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
export function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === Number(firstDayOfWeek);
}
export function isSameMonth(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
export function isSameYear(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return getFullYear(date1) === getFullYear(date2);
}
export function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1nZXR0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2Nocm9ub3MvdXRpbHMvZGF0ZS1nZXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQVUsRUFBRSxLQUFLLEdBQUcsS0FBSztJQUNoRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEQsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBVSxFQUFFLEtBQUssR0FBRyxLQUFLO0lBQ2xELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMxRCxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFVLEVBQUUsS0FBSyxHQUFHLEtBQUs7SUFDbEQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzFELENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVUsRUFBRSxLQUFLLEdBQUcsS0FBSztJQUN2RCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNwRSxDQUFDO0FBQ0QsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUFVO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLElBQVUs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QU0sVUFBVSxTQUFTLENBQUMsS0FBWSxFQUFFLEtBQVk7SUFDbEQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxDQUNMLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQ2xDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG91cnMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDSG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbnV0ZXMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmRzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ1NlY29uZHMoKSA6IGRhdGUuZ2V0U2Vjb25kcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlsbGlzZWNvbmRzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpIDogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDRGF5KCkgOiBkYXRlLmdldERheSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENEYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01vbnRoKCkgOiBkYXRlLmdldE1vbnRoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsWWVhcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5peFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKGRhdGUudmFsdWVPZigpIC8gMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml4KGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3REYXlPZk1vbnRoKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAxLFxuICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBkYXRlLmdldFNlY29uZHMoKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGgoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBfZGF5c0luTW9udGgoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2RheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCArIDEsIDApKS5nZXRVVENEYXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBkYXRlLmdldERheSgpID09PSBOdW1iZXIoZmlyc3REYXlPZldlZWspO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTW9udGgoZGF0ZTE/OiBEYXRlLCBkYXRlMj86IERhdGUpIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmIGdldE1vbnRoKGRhdGUxKSA9PT0gZ2V0TW9udGgoZGF0ZTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lWWVhcihkYXRlMT86IERhdGUsIGRhdGUyPzogRGF0ZSkge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBnZXRGdWxsWWVhcihkYXRlMSkgPT09IGdldEZ1bGxZZWFyKGRhdGUyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlMT86IERhdGUsIGRhdGUyPzogRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmXG4gICAgaXNTYW1lTW9udGgoZGF0ZTEsIGRhdGUyKSAmJlxuICAgIGdldERhdGUoZGF0ZTEpID09PSBnZXREYXRlKGRhdGUyKVxuICApO1xufVxuIl19