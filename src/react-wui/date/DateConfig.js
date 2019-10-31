import React from 'react';

const DateConfig = {
  columnCount: 7 * 6,
  dateFormat: 'YYYY-MM-DD',
  locale: {
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    dayOfWeek: {
      '0': 'Sun',
      '1': 'Mon',
      '2': 'Tue',
      '3': 'Wed',
      '4': 'Thur',
      '5': 'Fri',
      '6': 'Sat',
    },
    month: {
      '0': 'Jan',
      '1': 'Feb',
      '2': 'Mar',
      '3': 'Apr',
      '4': 'May',
      '5': 'Jun',
      '6': 'Jul',
      '7': 'Aug',
      '8': 'Sep',
      '9': 'Oct',
      '10': 'Nov',
      '11': 'Dec',
    },
    monthDetails: {
      '0': 'January',
      '1': 'Febuary',
      '2': 'March',
      '3': 'April',
      '4': 'May',
      '5': 'June',
      '6': 'July',
      '7': 'Auguest',
      '8': 'September',
      '9': 'October',
      '10': 'November',
      '11': 'December',
    },
  },
};

export default DateConfig;
