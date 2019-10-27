import React from 'react';
import {validate, isNil} from '../Utils';
import moment from 'moment';
import Button from '../button';
import {DateActionType} from './Reducer';

export const DataConfig = {
  dateFormat: 'YYYY-MM-DD',
  locale: {
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    dayOfWeek: {
      '1': 'Mon',
      '2': 'Tue',
      '3': 'Wed',
      '4': 'Thur',
      '5': 'Fri',
      '6': 'Sat',
      '7': 'Sun',
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
      '8': 'Sepetember',
      '9': 'Octber',
      '10': 'November',
      '11': 'December',
    },
  },
};

export const validateProps = (props, defaultDate) => {
  if (!isNil(defaultDate)) {
    validate(defaultDate.isValid(),
        `the defaultValue(${props.defaultValue}) is invalid.`);
  }

};

export const createDateColumns = (momentDate, columnCount, dispatch) => {
  //for current month
  const currentYear = momentDate.year();
  const currentMonth = momentDate.month();
  const currentDate = momentDate.date();
  let numberOfDays = momentDate.daysInMonth();

  //get the first day of the week within this month
  let firstDay = moment({year: currentYear, month: currentMonth, day: 1}).
      isoWeekday();

  //-------for last month
  const lastMonthDate = momentDate.clone().add(-1, 'months');
  let daysOfLastMonth = lastMonthDate.daysInMonth();

  //the data picker has 7row and 6 columns/row
  let columns = [];
  let td, key;

  //append the days of last month
  const selectLast = (d) => {
    dispatch({
      type: DateActionType.selectDay,
      data: {
        date: lastMonthDate.date(d),
      },
    });
  };

  for (let i = firstDay - 2; i >= 0; i--) {
    key = `${currentMonth - 1}-${i}`;
    td = (<td key={key}>
      <Button extraClassName="text comment clear-border" circle
              onClick={selectLast.bind(null, daysOfLastMonth - i)}>
        {daysOfLastMonth - i}
      </Button>
    </td>);
    columns.push(td);
  }

  let dateToProcess;
  let btnClass = '';

  const selectItem = (dd) => {
    dispatch({
      type: DateActionType.selectDay,
      day: dd,
      data: {
        date: momentDate.date(dd),
      },
    });
  };

  //--------- append the days of this month
  for (let i = firstDay; i < numberOfDays + firstDay; i++) {
    dateToProcess = i - firstDay + 1;
    btnClass = dateToProcess === currentDate ? 'button active' : 'button';
    key = `${momentDate.month()}-${dateToProcess}`;

    td = (<td key={key}>
      <Button key={i - firstDay + 1} circle
              extraClassName="clear-border"
              onClick={selectItem.bind(null,
                  dateToProcess)}>{dateToProcess}</Button>
    </td>);
    columns.push(td);
  }

  //------- append the days of next month
  let leftLen = columnCount - columns.length;

  for (let i = 0; i < leftLen; i++) {
    key = `${momentDate.month() + 1}-${i}`;
    td = (<td key={key}>
      <Button extraClassName={'text comment clear-border'} key={i + 1} circle
          /*  onClick={this.onItemSelected.bind(this,
                {month: month + 1, day: i + 1})}*/>{i + 1}</Button>
    </td>);
    columns.push(td);
  }

  return columns;
};
