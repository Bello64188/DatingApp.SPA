//! moment.js locale configuration
//! locale : Việt Nam [vi]
//! author : Chris Gedrim : https://github.com/chrisgedrim
export const viLocale = {
    abbr: 'vi',
    months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact: true,
    weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM(input) {
        return /^ch$/i.test(input);
    },
    meridiem(hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'sa' : 'SA';
        }
        else {
            return isLower ? 'ch' : 'CH';
        }
    },
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM [năm] YYYY',
        LLL: 'D MMMM [năm] YYYY HH:mm',
        LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
        l: 'DD/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần trước lúc] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s tới',
        past: '%s trước',
        s: 'vài giây',
        ss: '%d giây',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal(_num) {
        return '' + _num;
    },
    week: {
        dow: 1,
        doy: 4 // Tuần chứa ngày 4 tháng 1 là tuần đầu tiên trong năm.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY2hyb25vcy9pMThuL3ZpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGtDQUFrQztBQUNsQywwQkFBMEI7QUFDMUIsMERBQTBEO0FBRTFELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRyxvR0FBb0csQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hILFdBQVcsRUFBRyw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFHLHdEQUF3RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUUsYUFBYSxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDakQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0Msa0JBQWtCLEVBQUcsSUFBSTtJQUN6QixhQUFhLEVBQUUsUUFBUTtJQUN2QixJQUFJLENBQUMsS0FBYTtRQUNoQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELFFBQVEsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQWdCO1FBQ3ZELElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtZQUNkLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUM5QjthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUNELGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLG1CQUFtQjtRQUN4QixHQUFHLEVBQUcseUJBQXlCO1FBQy9CLElBQUksRUFBRywrQkFBK0I7UUFDdEMsQ0FBQyxFQUFHLFdBQVc7UUFDZixFQUFFLEVBQUcsWUFBWTtRQUNqQixHQUFHLEVBQUcsa0JBQWtCO1FBQ3hCLElBQUksRUFBRyx1QkFBdUI7S0FDL0I7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxRQUFRO1FBQ2pCLElBQUksRUFBRyxVQUFVO1FBQ2pCLENBQUMsRUFBRyxVQUFVO1FBQ2QsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsVUFBVTtRQUNkLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsUUFBUTtRQUNiLENBQUMsRUFBRyxVQUFVO1FBQ2QsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsV0FBVztRQUNmLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsUUFBUTtLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsU0FBUztJQUNqQyxPQUFPLENBQUMsSUFBWTtRQUNsQixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDO1FBQ1AsR0FBRyxFQUFHLENBQUMsQ0FBRSx1REFBdUQ7S0FDakU7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVmnhu4d0IE5hbSBbdmldXG4vLyEgYXV0aG9yIDogQ2hyaXMgR2VkcmltIDogaHR0cHM6Ly9naXRodWIuY29tL2NocmlzZ2VkcmltXG5cbmV4cG9ydCBjb25zdCB2aUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3ZpJyxcbiAgbW9udGhzIDogJ3Row6FuZyAxX3Row6FuZyAyX3Row6FuZyAzX3Row6FuZyA0X3Row6FuZyA1X3Row6FuZyA2X3Row6FuZyA3X3Row6FuZyA4X3Row6FuZyA5X3Row6FuZyAxMF90aMOhbmcgMTFfdGjDoW5nIDEyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdUaDAxX1RoMDJfVGgwM19UaDA0X1RoMDVfVGgwNl9UaDA3X1RoMDhfVGgwOV9UaDEwX1RoMTFfVGgxMicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXMgOiAnY2jhu6cgbmjhuq10X3Ro4bupIGhhaV90aOG7qSBiYV90aOG7qSB0xrBfdGjhu6kgbsSDbV90aOG7qSBzw6F1X3Ro4bupIGLhuqN5Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ0NOX1QyX1QzX1Q0X1Q1X1Q2X1Q3Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdDTl9UMl9UM19UNF9UNV9UNl9UNycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgbWVyaWRpZW1QYXJzZTogL3NhfGNoL2ksXG4gIGlzUE0oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAvXmNoJC9pLnRlc3QoaW5wdXQpO1xuICB9LFxuICBtZXJpZGllbShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIGlzTG93ZXI6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChob3VycyA8IDEyKSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICdzYScgOiAnU0EnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICdjaCcgOiAnQ0gnO1xuICAgIH1cbiAgfSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gW27Eg21dIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gW27Eg21dIFlZWVkgSEg6bW0nLFxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFtuxINtXSBZWVlZIEhIOm1tJyxcbiAgICBsIDogJ0REL00vWVlZWScsXG4gICAgbGwgOiAnRCBNTU0gWVlZWScsXG4gICAgbGxsIDogJ0QgTU1NIFlZWVkgSEg6bW0nLFxuICAgIGxsbGwgOiAnZGRkLCBEIE1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5OiAnW0jDtG0gbmF5IGzDumNdIExUJyxcbiAgICBuZXh0RGF5OiAnW05nw6B5IG1haSBsw7pjXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFt0deG6p24gdOG7m2kgbMO6Y10gTFQnLFxuICAgIGxhc3REYXk6ICdbSMO0bSBxdWEgbMO6Y10gTFQnLFxuICAgIGxhc3RXZWVrOiAnZGRkZCBbdHXhuqduIHRyxrDhu5tjIGzDumNdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMgdOG7m2knLFxuICAgIHBhc3QgOiAnJXMgdHLGsOG7m2MnLFxuICAgIHMgOiAndsOgaSBnacOieScsXG4gICAgc3MgOiAnJWQgZ2nDonknICxcbiAgICBtIDogJ23hu5l0IHBow7p0JyxcbiAgICBtbSA6ICclZCBwaMO6dCcsXG4gICAgaCA6ICdt4buZdCBnaeG7nScsXG4gICAgaGggOiAnJWQgZ2nhu50nLFxuICAgIGQgOiAnbeG7mXQgbmfDoHknLFxuICAgIGRkIDogJyVkIG5nw6B5JyxcbiAgICBNIDogJ23hu5l0IHRow6FuZycsXG4gICAgTU0gOiAnJWQgdGjDoW5nJyxcbiAgICB5IDogJ23hu5l0IG7Eg20nLFxuICAgIHl5IDogJyVkIG7Eg20nXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJycgKyBfbnVtO1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIFRo4bupIEhhaSBsw6AgbmfDoHkgxJHhuqd1IHR14bqnbi5cbiAgICBkb3kgOiA0ICAvLyBUdeG6p24gY2jhu6lhIG5nw6B5IDQgdGjDoW5nIDEgbMOgIHR14bqnbiDEkeG6p3UgdGnDqm4gdHJvbmcgbsSDbS5cbiAgfVxufTtcblxuIl19