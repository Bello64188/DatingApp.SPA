//! moment.js locale configuration
//! locale : Danish (Denmark) [da]
//! author : Per Hansen : https://github.com/perhp
export const daLocale = {
    abbr: 'da',
    months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
    weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
    weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'på dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[i] dddd[s kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY2hyb25vcy9pMThuL2RhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsa0RBQWtEO0FBRWxELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRyxxRkFBcUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pHLFdBQVcsRUFBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLFFBQVEsRUFBRyxvREFBb0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLGFBQWEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hELFdBQVcsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9DLGNBQWMsRUFBRztRQUNiLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLGNBQWM7UUFDbkIsR0FBRyxFQUFHLG9CQUFvQjtRQUMxQixJQUFJLEVBQUcsb0NBQW9DO0tBQzlDO0lBQ0QsUUFBUSxFQUFHO1FBQ1AsT0FBTyxFQUFHLGdCQUFnQjtRQUMxQixPQUFPLEVBQUcsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRyxrQkFBa0I7UUFDN0IsT0FBTyxFQUFHLGdCQUFnQjtRQUMxQixRQUFRLEVBQUcsb0JBQW9CO1FBQy9CLFFBQVEsRUFBRyxHQUFHO0tBQ2pCO0lBQ0QsWUFBWSxFQUFHO1FBQ1gsTUFBTSxFQUFHLE9BQU87UUFDaEIsSUFBSSxFQUFHLFVBQVU7UUFDakIsQ0FBQyxFQUFHLGFBQWE7UUFDakIsQ0FBQyxFQUFHLFVBQVU7UUFDZCxFQUFFLEVBQUcsYUFBYTtRQUNsQixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLFFBQVE7UUFDWixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxVQUFVO1FBQ2QsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLE9BQU87UUFDWCxFQUFFLEVBQUcsT0FBTztLQUNmO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUcsS0FBSztJQUNmLElBQUksRUFBRztRQUNILEdBQUcsRUFBRyxDQUFDO1FBQ1AsR0FBRyxFQUFHLENBQUMsQ0FBRSxnRUFBZ0U7S0FDNUU7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRGFuaXNoIChEZW5tYXJrKSBbZGFdXG4vLyEgYXV0aG9yIDogUGVyIEhhbnNlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wZXJocFxuXG5leHBvcnQgY29uc3QgZGFMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdkYScsXG4gIG1vbnRocyA6ICdKYW51YXJfRmVicnVhcl9NYXJ0c19BcHJpbF9NYWpfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01hal9KdW5fSnVsX0F1Z19TZXBfT2t0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ1PDuG5kYWdfTWFuZGFnX1RpcnNkYWdfT25zZGFnX1RvcnNkYWdfRnJlZGFnX0zDuHJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnU8O4bl9NYW5fVGlyX09uc19Ub3JfRnJlX0zDuHInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ1PDuF9NYV9UaV9Pbl9Ub19Gcl9Mw7gnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxuICAgICAgTExMIDogJ0QuIE1NTU0gWVlZWSBISDptbScsXG4gICAgICBMTExMIDogJ2RkZGQgW2QuXSBELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgICAgc2FtZURheSA6ICdbaSBkYWcga2wuXSBMVCcsXG4gICAgICBuZXh0RGF5IDogJ1tpIG1vcmdlbiBrbC5dIExUJyxcbiAgICAgIG5leHRXZWVrIDogJ3DDpSBkZGRkIFtrbC5dIExUJyxcbiAgICAgIGxhc3REYXkgOiAnW2kgZ8OlciBrbC5dIExUJyxcbiAgICAgIGxhc3RXZWVrIDogJ1tpXSBkZGRkW3Mga2wuXSBMVCcsXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICBmdXR1cmUgOiAnb20gJXMnLFxuICAgICAgcGFzdCA6ICclcyBzaWRlbicsXG4gICAgICBzIDogJ2bDpSBzZWt1bmRlcicsXG4gICAgICBtIDogJ2V0IG1pbnV0JyxcbiAgICAgIG1tIDogJyVkIG1pbnV0dGVyJyxcbiAgICAgIGggOiAnZW4gdGltZScsXG4gICAgICBoaCA6ICclZCB0aW1lcicsXG4gICAgICBkIDogJ2VuIGRhZycsXG4gICAgICBkZCA6ICclZCBkYWdlJyxcbiAgICAgIE0gOiAnZW4gbcOlbmVkJyxcbiAgICAgIE1NIDogJyVkIG3DpW5lZGVyJyxcbiAgICAgIHkgOiAnZXQgw6VyJyxcbiAgICAgIHl5IDogJyVkIMOlcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbCA6ICclZC4nLFxuICB3ZWVrIDoge1xuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiJdfQ==