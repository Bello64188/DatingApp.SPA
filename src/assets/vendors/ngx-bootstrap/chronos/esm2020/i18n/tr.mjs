//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
let suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};
export const trLocale = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal(_num) {
        const num = Number(_num);
        if (num === 0) { // special case for zero
            return num + '\'ıncı';
        }
        let a = num % 10, b = num % 100 - a, c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY2hyb25vcy9pMThuL3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekIsZ0VBQWdFO0FBQ2hFLHNEQUFzRDtBQUV0RCxJQUFJLFFBQVEsR0FBOEI7SUFDeEMsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLENBQUMsRUFBRSxRQUFRO0lBQ1gsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLENBQUMsRUFBRSxPQUFPO0lBQ1YsQ0FBQyxFQUFFLE9BQU87SUFDVixFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxPQUFPO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLEdBQUcsRUFBRSxRQUFRO0lBQ2IsQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsUUFBUTtJQUNYLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSw0RUFBNEUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9GLFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pFLFFBQVEsRUFBRSx1REFBdUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsSUFBSSxFQUFFLHlCQUF5QjtLQUNoQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLGVBQWU7UUFDbEIsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFFBQVE7UUFDWixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxPQUFPO1FBQ1gsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0Qsc0JBQXNCLEVBQUUsdUNBQXVDO0lBQy9ELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRyx3QkFBd0I7WUFDeEMsT0FBTyxHQUFHLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFDZCxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQ2pCLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5QixPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVHVya2lzaCBbdHJdXG4vLyEgYXV0aG9ycyA6IEVyaGFuIEd1bmRvZ2FuIDogaHR0cHM6Ly9naXRodWIuY29tL2VyaGFuZ3VuZG9nYW4sXG4vLyEgICAgICAgICAgIEJ1cmFrIFlpxJ9pdCBLYXlhOiBodHRwczovL2dpdGh1Yi5jb20vQllLXG5cbmxldCBzdWZmaXhlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgMTogJ1xcJ2luY2knLFxuICA1OiAnXFwnaW5jaScsXG4gIDg6ICdcXCdpbmNpJyxcbiAgNzA6ICdcXCdpbmNpJyxcbiAgODA6ICdcXCdpbmNpJyxcbiAgMjogJ1xcJ25jaScsXG4gIDc6ICdcXCduY2knLFxuICAyMDogJ1xcJ25jaScsXG4gIDUwOiAnXFwnbmNpJyxcbiAgMzogJ1xcJ8O8bmPDvCcsXG4gIDQ6ICdcXCfDvG5jw7wnLFxuICAxMDA6ICdcXCfDvG5jw7wnLFxuICA2OiAnXFwnbmPEsScsXG4gIDk6ICdcXCd1bmN1JyxcbiAgMTA6ICdcXCd1bmN1JyxcbiAgMzA6ICdcXCd1bmN1JyxcbiAgNjA6ICdcXCfEsW5jxLEnLFxuICA5MDogJ1xcJ8SxbmPEsSdcbn07XG5cbmV4cG9ydCBjb25zdCB0ckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3RyJyxcbiAgbW9udGhzOiAnT2Nha1/FnnViYXRfTWFydF9OaXNhbl9NYXnEsXNfSGF6aXJhbl9UZW1tdXpfQcSfdXN0b3NfRXlsw7xsX0VraW1fS2FzxLFtX0FyYWzEsWsnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnT2NhX8WedWJfTWFyX05pc19NYXlfSGF6X1RlbV9BxJ91X0V5bF9Fa2lfS2FzX0FyYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdQYXphcl9QYXphcnRlc2lfU2FsxLFfw4dhcsWfYW1iYV9QZXLFn2VtYmVfQ3VtYV9DdW1hcnRlc2knLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdQYXpfUHRzX1NhbF/Dh2FyX1Blcl9DdW1fQ3RzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ1B6X1B0X1NhX8OHYV9QZV9DdV9DdCcuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tidWfDvG4gc2FhdF0gTFQnLFxuICAgIG5leHREYXk6ICdbeWFyxLFuIHNhYXRdIExUJyxcbiAgICBuZXh0V2VlazogJ1tnZWxlY2VrXSBkZGRkIFtzYWF0XSBMVCcsXG4gICAgbGFzdERheTogJ1tkw7xuXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbZ2XDp2VuXSBkZGRkIFtzYWF0XSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyBzb25yYScsXG4gICAgcGFzdDogJyVzIMO2bmNlJyxcbiAgICBzOiAnYmlya2HDpyBzYW5peWUnLFxuICAgIHNzOiAnJWQgc2FuaXllJyxcbiAgICBtOiAnYmlyIGRha2lrYScsXG4gICAgbW06ICclZCBkYWtpa2EnLFxuICAgIGg6ICdiaXIgc2FhdCcsXG4gICAgaGg6ICclZCBzYWF0JyxcbiAgICBkOiAnYmlyIGfDvG4nLFxuICAgIGRkOiAnJWQgZ8O8bicsXG4gICAgTTogJ2JpciBheScsXG4gICAgTU06ICclZCBheScsXG4gICAgeTogJ2JpciB5xLFsJyxcbiAgICB5eTogJyVkIHnEsWwnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfScoaW5jaXxuY2l8w7xuY8O8fG5jxLF8dW5jdXzEsW5jxLEpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBpZiAobnVtID09PSAwKSB7ICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgIHJldHVybiBudW0gKyAnXFwnxLFuY8SxJztcbiAgICB9XG4gICAgbGV0IGEgPSBudW0gJSAxMCxcbiAgICAgIGIgPSBudW0gJSAxMDAgLSBhLFxuICAgICAgYyA9IG51bSA+PSAxMDAgPyAxMDAgOiBudWxsO1xuICAgIHJldHVybiBudW0gKyAoc3VmZml4ZXNbYV0gfHwgc3VmZml4ZXNbYl0gfHwgc3VmZml4ZXNbY10pO1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==