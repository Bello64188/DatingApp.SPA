//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
export const jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM(input) {
        return input === '午後';
    },
    meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal(num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY2hyb25vcy9pMThuL2phLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGtDQUFrQztBQUNsQywwQkFBMEI7QUFDMUIsZ0RBQWdEO0FBRWhELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBZ0I7SUFDbkMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RCxXQUFXLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqRSxRQUFRLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuRCxhQUFhLEVBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUMsV0FBVyxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hDLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLFdBQVc7UUFDaEIsR0FBRyxFQUFHLGlCQUFpQjtRQUN2QixJQUFJLEVBQUcsc0JBQXNCO1FBQzdCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLEdBQUcsRUFBRyxpQkFBaUI7UUFDdkIsSUFBSSxFQUFHLHNCQUFzQjtLQUM5QjtJQUNELGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLElBQUksQ0FBRSxLQUFLO1FBQ1QsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxRQUFRLENBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzdCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0QsUUFBUSxFQUFHO1FBQ1QsT0FBTyxFQUFHLFNBQVM7UUFDbkIsT0FBTyxFQUFHLFNBQVM7UUFDbkIsUUFBUSxFQUFHLGFBQWE7UUFDeEIsT0FBTyxFQUFHLFNBQVM7UUFDbkIsUUFBUSxFQUFHLGFBQWE7UUFDeEIsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELHNCQUFzQixFQUFHLFVBQVU7SUFDbkMsT0FBTyxDQUFFLEdBQVcsRUFBRSxNQUFjO1FBQ2xDLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssS0FBSztnQkFDUixPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDbkI7Z0JBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxLQUFLO1FBQ2QsSUFBSSxFQUFHLEtBQUs7UUFDWixDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLE1BQU07UUFDWCxDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsTUFBTTtRQUNYLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7S0FDWDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBKYXBhbmVzZSBbamFdXG4vLyEgYXV0aG9yIDogTEkgTG9uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJ5b25cblxuZXhwb3J0IGNvbnN0IGphTG9jYWxlOiBMb2NhbGVEYXRhID0gIHtcbiAgYWJicjogJ2phJyxcbiAgbW9udGhzIDogJzHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICcx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAn5pel5puc5pelX+aciOabnOaXpV/ngavmm5zml6Vf5rC05puc5pelX+acqOabnOaXpV/ph5Hmm5zml6Vf5Zyf5puc5pelJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ+aXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcnycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAn5pelX+aciF/ngatf5rC0X+acqF/ph5Ff5ZyfJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISDptbScsXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICBMIDogJ1lZWVkvTU0vREQnLFxuICAgIExMIDogJ1lZWVnlubRN5pyIROaXpScsXG4gICAgTExMIDogJ1lZWVnlubRN5pyIROaXpSBISDptbScsXG4gICAgTExMTCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0gZGRkZCcsXG4gICAgbCA6ICdZWVlZL01NL0REJyxcbiAgICBsbCA6ICdZWVlZ5bm0TeaciETml6UnLFxuICAgIGxsbCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxuICAgIGxsbGwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tIGRkZGQnXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/ljYjliY185Y2I5b6ML2ksXG4gIGlzUE0gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAn5Y2I5b6MJztcbiAgfSxcbiAgbWVyaWRpZW0gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAn5Y2I5YmNJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfljYjlvownO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdb5LuK5pelXSBMVCcsXG4gICAgbmV4dERheSA6ICdb5piO5pelXSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnW+adpemAsV1kZGRkIExUJyxcbiAgICBsYXN0RGF5IDogJ1vmmKjml6VdIExUJyxcbiAgICBsYXN0V2VlayA6ICdb5YmN6YCxXWRkZGQgTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2UgOiAvXFxkezEsMn3ml6UvLFxuICBvcmRpbmFsIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfml6UnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVz5b6MJyxcbiAgICBwYXN0IDogJyVz5YmNJyxcbiAgICBzIDogJ+aVsOenkicsXG4gICAgc3MgOiAnJWTnp5InLFxuICAgIG0gOiAnMeWIhicsXG4gICAgbW0gOiAnJWTliIYnLFxuICAgIGggOiAnMeaZgumWkycsXG4gICAgaGggOiAnJWTmmYLplpMnLFxuICAgIGQgOiAnMeaXpScsXG4gICAgZGQgOiAnJWTml6UnLFxuICAgIE0gOiAnMeODtuaciCcsXG4gICAgTU0gOiAnJWTjg7bmnIgnLFxuICAgIHkgOiAnMeW5tCcsXG4gICAgeXkgOiAnJWTlubQnXG4gIH1cbn07XG4iXX0=