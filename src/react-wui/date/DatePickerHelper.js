import React from 'react';
import {isNil} from 'lodash';
import {validate} from '../Utils';
import moment from 'moment';
import {DateActionType} from './Reducer';
import {preventEvent} from '../event';
import Button from '../button';

export const validateProps = (props, defaultDate) => {
  if (!isNil(defaultDate)) {
    validate(defaultDate.isValid(),
        `the defaultValue(${props.defaultValue}) is invalid.`);
  }

};

const addLastMonth = (momentDate, firstDay, columns, dispatch, props) => {
  //-------for last month
  const lastMonthDate = momentDate.clone().add(-1, 'months');
  let daysOfLastMonth = lastMonthDate.daysInMonth();

  //append the days of last month
  const selectPre = (d, e) => {
    dispatch({
      type: DateActionType.selectDay,
      data: {
        date: lastMonthDate.date(d),
      },
    });

    if (!props.autoClose) {
      //don't close the popup and stop propagation to window click listener,
      //because the listener cannot distinguish the event fired by a old button
      //and disappeared while the popup content is updated. (that means
      //the contains() method always return false)
      preventEvent(e);
    }
  };

  let td, key;
  for (let i = firstDay - 2; i >= 0; i--) {
    key = `${lastMonthDate.month()}-${i}`;
    td = (<td key={key}>
      <Button
          extraClassName="text comment clear-border"
          circle
          onClick={selectPre.bind(this, daysOfLastMonth - i)}>
        {daysOfLastMonth - i}
      </Button>
    </td>);
    columns.push(td);
  }

};

const addCurrentMonth = (
    momentDate, firstDay, columns, dispatch, props, initialDate,
    closePopupCallback) => {

  const selectItem = (dd) => {
    const newDate = momentDate.date(dd);
    dispatch({
      type: DateActionType.selectDay,
      day: dd,
      data: {
        date: newDate,
      },
    });

    if (props.autoClose) {
      closePopupCallback();
    }
  };

  //--------- append the days of this month
  const isActiveDay = (loopDate, selectedDate) => {
    if (isNil(momentDate)) {
      return false;
    }

    //check whether the year and month are same
    if (!isNil(initialDate) && !momentDate.isSame(initialDate, 'month')) {
      return false;
    }
    return momentDate.date() === selectedDate;
  };

  let active, td, key;
  let dateToProcess;
  const numberOfDays = momentDate.daysInMonth();
  for (let i = firstDay; i < numberOfDays + firstDay; i++) {
    dateToProcess = i - firstDay + 1;
    key = `${momentDate.month()}-${dateToProcess}`;
    active = isActiveDay(momentDate, dateToProcess);

    td = (<td key={key}>
      <Button key={i - firstDay + 1}
              active={active}
              color="info"
              circle
              outline
              onClick={selectItem.bind(null,
                  dateToProcess)}>{dateToProcess}</Button>
    </td>);
    columns.push(td);
  }
};

const addNextMonth = (
    momentDate, firstDay, columns, dispatch, props, columnCount) => {

  //------- append the days of next month
  let leftLen = columnCount - columns.length;
  const nextMonthDate = momentDate.clone().add(1, 'months');

  const selectNextMonth = (dd, e) => {
    dispatch({
      type: DateActionType.selectDay,
      day: dd,
      data: {
        date: nextMonthDate.date(dd),
      },
    });

    if (!props.autoClose) {
      preventEvent(e);
    }
  };

  let key, td;
  for (let i = 0; i < leftLen; i++) {
    key = `${momentDate.month() + 1}-${i}`;
    td = (<td key={key}>
      <Button extraClassName={'text comment clear-border'} key={i + 1} circle
              onClick={selectNextMonth.bind(this, i + 1)}>{i + 1}</Button>
    </td>);
    columns.push(td);
  }
};

export const createDateColumns = (
    momentDate, columnCount, dispatch, state, initialDate, props,
    closePopupCallback) => {
  //get the first day of the week within this month
  let firstDay = moment(
      {year: momentDate.year(), month: momentDate.month(), day: 1}).
      isoWeekday();

  //the data picker has 7 row and 6 columns per row
  let columns = [];
  addLastMonth(momentDate, firstDay, columns, dispatch, props);

  addCurrentMonth(momentDate, firstDay, columns, dispatch, props, initialDate,
      closePopupCallback);

  addNextMonth(momentDate, firstDay, columns, dispatch, props, columnCount);

  return columns;
};
