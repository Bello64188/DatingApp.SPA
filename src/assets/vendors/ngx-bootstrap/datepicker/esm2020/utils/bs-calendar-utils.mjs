import { getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isArray, isSame } from 'ngx-bootstrap/chronos';
export function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    const weekDay = getDay(date);
    const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
export function calculateDateOffset(weekday, startingDayOffset) {
    const _startingDayOffset = Number(startingDayOffset);
    if (isNaN(_startingDayOffset)) {
        return 0;
    }
    if (_startingDayOffset === 0) {
        return weekday;
    }
    const offset = weekday - _startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
export function isMonthDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound || false;
}
export function isYearDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound || false;
}
export function isDisabledDate(date, datesDisabled, unit) {
    if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
        return false;
    }
    if (unit && unit === 'year' && !datesDisabled[0].getDate()) {
        return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'year'));
    }
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'date'));
}
export function isEnabledDate(date, datesEnabled, unit) {
    if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
        return false;
    }
    return !datesEnabled.some((enabledDate) => isSame(date, enabledDate, unit || 'date'));
}
export function getYearsCalendarInitialDate(state, calendarIndex = 0) {
    const model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
    return model?.years[0] && model.years[0][0] && model.years[0][0].date;
}
export function checkRangesWithMaxDate(ranges, maxDate) {
    if (!ranges)
        return ranges;
    if (!maxDate)
        return ranges;
    if (!ranges.length && !ranges[0].value)
        return ranges;
    ranges.forEach((item) => {
        if (!item || !item.value)
            return ranges;
        if (item.value instanceof Date)
            return ranges;
        if (!(item.value instanceof Array && item.value.length))
            return ranges;
        item.value = compareDateWithMaxDateHelper(item.value, maxDate);
        return ranges;
    });
    return ranges;
}
export function checkBsValue(date, maxDate) {
    if (!date)
        return date;
    if (!maxDate)
        return date;
    if (date instanceof Array && !date.length)
        return date;
    if (date instanceof Date)
        return date;
    return compareDateWithMaxDateHelper(date, maxDate);
}
function compareDateWithMaxDateHelper(date, maxDate) {
    if (date instanceof Array) {
        const editedValues = date.map(item => {
            if (!item)
                return item;
            if (isAfter(item, maxDate, 'date'))
                item = maxDate;
            return item;
        });
        return editedValues;
    }
    return date;
}
export function setCurrentTimeOnDateSelect(value) {
    if (!value)
        return value;
    return setCurrentTimeHelper(value);
}
export function setDateRangesCurrentTimeOnDateSelect(value) {
    if (!value?.length)
        return value;
    value.map((date) => {
        if (!date) {
            return date;
        }
        return setCurrentTimeHelper(date);
    });
    return value;
}
function setCurrentTimeHelper(date) {
    const now = new Date();
    date.setMilliseconds(now.getMilliseconds());
    date.setSeconds(now.getSeconds());
    date.setMinutes(now.getMinutes());
    date.setHours(now.getHours());
    return date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY2FsZW5kYXItdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci91dGlscy9icy1jYWxlbmRhci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLGdCQUFnQixFQUNoQixPQUFPLEVBQ1AsUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx1QkFBdUIsQ0FBQztBQUkvQixNQUFNLFVBQVUsd0JBQXdCLENBQUMsSUFBVSxFQUNWLE9BQW9DO0lBQzNFLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNsRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLE1BQU0sTUFBTSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFcEUsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE9BQWUsRUFBRSxpQkFBMEI7SUFDN0UsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRCxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFFRCxJQUFJLGtCQUFrQixLQUFLLENBQUMsRUFBRTtRQUM1QixPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUVELE1BQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFFaEQsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFD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QUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0RGF5LFxuICBpc0ZpcnN0RGF5T2ZXZWVrLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgc2hpZnREYXRlLFxuICBlbmRPZixcbiAgc3RhcnRPZixcbiAgaXNBcnJheSxcbiAgaXNTYW1lXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdGF0ZSc7XG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzIH0gZnJvbSAnLi4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZGF0ZTogRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBmaXJzdERheU9mV2Vlaz86IG51bWJlciB9KTogRGF0ZSB7XG4gIGlmIChpc0ZpcnN0RGF5T2ZXZWVrKGRhdGUsIG9wdGlvbnMuZmlyc3REYXlPZldlZWspKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBjb25zdCB3ZWVrRGF5ID0gZ2V0RGF5KGRhdGUpO1xuICBjb25zdCBvZmZzZXQgPSBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtEYXksIG9wdGlvbnMuZmlyc3REYXlPZldlZWspO1xuXG4gIHJldHVybiBzaGlmdERhdGUoZGF0ZSwge2RheTogLW9mZnNldH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGF0ZU9mZnNldCh3ZWVrZGF5OiBudW1iZXIsIHN0YXJ0aW5nRGF5T2Zmc2V0PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgX3N0YXJ0aW5nRGF5T2Zmc2V0ID0gTnVtYmVyKHN0YXJ0aW5nRGF5T2Zmc2V0KTtcbiAgaWYgKGlzTmFOKF9zdGFydGluZ0RheU9mZnNldCkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChfc3RhcnRpbmdEYXlPZmZzZXQgPT09IDApIHtcbiAgICByZXR1cm4gd2Vla2RheTtcbiAgfVxuXG4gIGNvbnN0IG9mZnNldCA9IHdlZWtkYXkgLSBfc3RhcnRpbmdEYXlPZmZzZXQgJSA3O1xuXG4gIHJldHVybiBvZmZzZXQgPCAwID8gb2Zmc2V0ICsgNyA6IG9mZnNldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9udGhEaXNhYmxlZChkYXRlOiBEYXRlLCBtaW4/OiBEYXRlLCBtYXg/OiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICdtb250aCcpLCBtaW4sICdkYXknKTtcbiAgY29uc3QgbWF4Qm91bmQgPSBtYXggJiYgaXNBZnRlcihzdGFydE9mKGRhdGUsICdtb250aCcpLCBtYXgsICdkYXknKTtcblxuICByZXR1cm4gbWluQm91bmQgfHwgbWF4Qm91bmQgfHwgZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1llYXJEaXNhYmxlZChkYXRlOiBEYXRlLCBtaW4/OiBEYXRlLCBtYXg/OiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICd5ZWFyJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ3llYXInKSwgbWF4LCAnZGF5Jyk7XG5cbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kIHx8IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERhdGUoZGF0ZT86IERhdGUsIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW10sIHVuaXQ/OiAneWVhcicgfCAnZGF0ZScgfCAnbW9udGgnKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZXNEaXNhYmxlZCAgfHwgIWlzQXJyYXkoZGF0ZXNEaXNhYmxlZCkgfHwgIWRhdGVzRGlzYWJsZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVuaXQgJiYgdW5pdCA9PT0gJ3llYXInICYmICFkYXRlc0Rpc2FibGVkWzBdLmdldERhdGUoKSkge1xuICAgIHJldHVybiBkYXRlc0Rpc2FibGVkLnNvbWUoKGRhdGVEaXNhYmxlZDogRGF0ZSkgPT4gaXNTYW1lKGRhdGUsIGRhdGVEaXNhYmxlZCwgJ3llYXInKSk7XG4gIH1cblxuICByZXR1cm4gZGF0ZXNEaXNhYmxlZC5zb21lKChkYXRlRGlzYWJsZWQ6IERhdGUpID0+IGlzU2FtZShkYXRlLCBkYXRlRGlzYWJsZWQsICdkYXRlJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbmFibGVkRGF0ZShkYXRlPzogRGF0ZSwgZGF0ZXNFbmFibGVkPzogRGF0ZVtdLCB1bml0PzogJ3llYXInIHwgJ2RhdGUnIHwgJ21vbnRoJyk6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGVzRW5hYmxlZCB8fCAhaXNBcnJheShkYXRlc0VuYWJsZWQpIHx8ICFkYXRlc0VuYWJsZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICFkYXRlc0VuYWJsZWQuc29tZSgoZW5hYmxlZERhdGU6IERhdGUpID0+IGlzU2FtZShkYXRlLCBlbmFibGVkRGF0ZSwgdW5pdCB8fCAnZGF0ZScpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQ2FsZW5kYXJJbml0aWFsRGF0ZShzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsIGNhbGVuZGFySW5kZXggPSAwKTogRGF0ZSB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IG1vZGVsID0gc3RhdGUgJiYgc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsICYmIHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbFtjYWxlbmRhckluZGV4XTtcblxuICByZXR1cm4gbW9kZWw/LnllYXJzWzBdICYmIG1vZGVsLnllYXJzWzBdWzBdICYmIG1vZGVsLnllYXJzWzBdWzBdLmRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jhbmdlc1dpdGhNYXhEYXRlKHJhbmdlcz86IEJzQ3VzdG9tRGF0ZXNbXSwgbWF4RGF0ZT86IERhdGUpOiBCc0N1c3RvbURhdGVzW10gfCB1bmRlZmluZWQge1xuICBpZiAoIXJhbmdlcykgcmV0dXJuIHJhbmdlcztcbiAgaWYgKCFtYXhEYXRlKSByZXR1cm4gcmFuZ2VzO1xuICBpZiAoIXJhbmdlcy5sZW5ndGggJiYgIXJhbmdlc1swXS52YWx1ZSkgcmV0dXJuICByYW5nZXM7XG5cbiAgcmFuZ2VzLmZvckVhY2goKGl0ZW06IEJzQ3VzdG9tRGF0ZXMpID0+IHtcbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0udmFsdWUpIHJldHVybiByYW5nZXM7XG4gICAgaWYgKGl0ZW0udmFsdWUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gIHJhbmdlcztcbiAgICBpZiAoIShpdGVtLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkgJiYgaXRlbS52YWx1ZS5sZW5ndGgpICkgcmV0dXJuIHJhbmdlcztcbiAgICBpdGVtLnZhbHVlID0gY29tcGFyZURhdGVXaXRoTWF4RGF0ZUhlbHBlcihpdGVtLnZhbHVlLCBtYXhEYXRlKTtcbiAgICByZXR1cm4gcmFuZ2VzO1xuICB9KTtcbiAgcmV0dXJuIHJhbmdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQnNWYWx1ZShkYXRlPzogQXJyYXk8RGF0ZT4gfCBEYXRlIHwgKERhdGUgfCB1bmRlZmluZWQpW10sIG1heERhdGU/OiBEYXRlKTogQXJyYXk8RGF0ZT4gfCBEYXRlIHwgKERhdGV8dW5kZWZpbmVkKVtdIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFkYXRlKSByZXR1cm4gZGF0ZTtcbiAgaWYgKCFtYXhEYXRlKSByZXR1cm4gZGF0ZTtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBBcnJheSAmJiAhZGF0ZS5sZW5ndGgpIHJldHVybiBkYXRlO1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiAgZGF0ZTtcbiAgcmV0dXJuIGNvbXBhcmVEYXRlV2l0aE1heERhdGVIZWxwZXIoZGF0ZSwgbWF4RGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVEYXRlV2l0aE1heERhdGVIZWxwZXIgPFQ+KGRhdGU6IFQsIG1heERhdGU6IERhdGUpOiBUIHwgRGF0ZVtdIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNvbnN0IGVkaXRlZFZhbHVlcyA9IGRhdGUubWFwKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFpdGVtKSByZXR1cm4gIGl0ZW07XG4gICAgICBpZiAoaXNBZnRlcihpdGVtLCBtYXhEYXRlLCAnZGF0ZScpKSBpdGVtID0gbWF4RGF0ZTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICAgIHJldHVybiBlZGl0ZWRWYWx1ZXM7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VGltZU9uRGF0ZVNlbGVjdCh2YWx1ZT86IERhdGUpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG4gIHJldHVybiBzZXRDdXJyZW50VGltZUhlbHBlcih2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlUmFuZ2VzQ3VycmVudFRpbWVPbkRhdGVTZWxlY3QodmFsdWU/OiAoRGF0ZXx1bmRlZmluZWQpW10pOiAoRGF0ZXx1bmRlZmluZWQpW10gfCB1bmRlZmluZWQge1xuICBpZiAoIXZhbHVlPy5sZW5ndGgpIHJldHVybiB2YWx1ZTtcblxuICB2YWx1ZS5tYXAoKGRhdGUpID0+IHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gc2V0Q3VycmVudFRpbWVIZWxwZXIoZGF0ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFRpbWVIZWxwZXIoZGF0ZTogRGF0ZSk6IERhdGUge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBkYXRlLnNldE1pbGxpc2Vjb25kcyhub3cuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICBkYXRlLnNldFNlY29uZHMobm93LmdldFNlY29uZHMoKSk7XG4gIGRhdGUuc2V0TWludXRlcyhub3cuZ2V0TWludXRlcygpKTtcbiAgZGF0ZS5zZXRIb3Vycyhub3cuZ2V0SG91cnMoKSk7XG4gIHJldHVybiBkYXRlO1xufVxuIl19