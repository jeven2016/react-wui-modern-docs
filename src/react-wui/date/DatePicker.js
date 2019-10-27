import React, {useReducer} from 'react';
import PopupController from '../common/PopupController';
import {Button, Input} from '../index';
import {IconCalendar} from '../Icons';
import {isNil, slice} from '../Utils';
import {
  createDateColumns,
  DataConfig,
  validate,
  validateProps,
} from './DateConfig';
import moment from 'moment';
import {DateActionType, reducer} from './Reducer';
import clsx from 'clsx';

const DatePicker = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
    defaultValue,
    leftTitle = false,
    dateFormat = 'YYYY-MM-DD',
    placeholder = 'Year-Month-Day',
    position = 'bottomLeft',
    ...otherProps
  } = props;
  const columnCount = 7 * 6;

  const [state, dispatch] = useReducer(reducer, {
    date: null,
    displayDate: null,
    active: false,// todo: once month next/pre, need to rerender the panels regardless the date.
  });
  const defaultDate = isNil(defaultValue) ? null : moment(defaultValue);
  const config = DataConfig;

  validateProps(props, defaultDate);

  // get current date
  // clone the origin data and don't change its value
  const getDate = () => {
    if (!isNil(state.date)) {
      return state.date.clone();
    }
    return isNil(defaultDate) ? moment() : defaultDate.clone();
  };

  const getFormatDate= ()=> getDate().format(dateFormat);

  //this date is used to calculate the the date of the next year/next month
  const getDisplayDate = () => !isNil(state.displayDate)
      ? state.displayDate.clone()
      : getDate();

  const generateTtitle = (momentDate) => {
    let currentDayOfWeek = config.locale.dayOfWeek[momentDate.day()];
    let currentMonth = config.locale.month[momentDate.month()];

    let txtContent = leftTitle ? <div>
          <div>{currentDayOfWeek},</div>
          <div>{currentMonth} {momentDate.date()}</div>
        </div>
        : <span>{currentDayOfWeek}, {currentMonth} {momentDate.date()}
                  </span>;

    return (
        <div className="title">
          <a className="year-info" href="#">{momentDate.year()}</a>
          <div className="detail-info">
            {txtContent}
          </div>
        </div>
    );
  };

  const generateDays = (momentDate) => {
    let columns = createDateColumns(momentDate, columnCount, dispatch);

    return (
        <tbody>
        <tr>{slice(columns, 0, 7)}</tr>
        <tr>{slice(columns, 7, 14)}</tr>
        <tr>{slice(columns, 14, 21)}</tr>
        <tr>{slice(columns, 21, 28)}</tr>
        <tr>{slice(columns, 28, 35)}</tr>
        <tr>{slice(columns, 35, 42)}</tr>
        </tbody>
    );
  };

  const getCalendar = (momentDate) => {
    let month = momentDate.month();
    let year = momentDate.year();

    const dataPickerClsName = clsx('date-picker', {
      'left-title': leftTitle,
    });

    return <div className={dataPickerClsName}>
      {generateTtitle(momentDate)}
      <div className="body">
        <div className="info">
          <span className="previous">
             <Button size="small" circle onClick={() => dispatch(
                 {
                   type: DateActionType.preYear,
                   data: {date: getDisplayDate()},
                 })}>
                 &lt;&lt;
              </Button>
              <Button size="small" circle
                      onClick={() => dispatch(
                          {
                            type: DateActionType.preMonth,
                            data: {date: getDisplayDate()},
                          })}>
               &lt;
              </Button>
          </span>
          <span className="content">
          {config.locale.monthDetails[month]} {year}
        </span>
          <span className="next">
              <Button size="small" circle
                      onClick={() => dispatch(
                          {
                            type: DateActionType.nextMonth,
                            data: {date: getDisplayDate()},
                          })}>
                &gt;
              </Button>
              <Button size="small" circle onClick={() => dispatch(
                  {
                    type: DateActionType.nextYear,
                    data: {date: getDisplayDate()},
                  })}>
                &gt;&gt;
              </Button>
          </span>
        </div>
        <table className="data-picker-table">
          <thead>
          <tr>
            {config.locale.days.map(
                (day, index) => <th key={day + index}>{day}</th>)}
          </tr>
          </thead>
          {
            generateDays(momentDate)
          }
        </table>
        <div className="footer">
          <div className="left">
            Select Time
          </div>
          <div className="right">
            <Button type="primary" outline size="small">OK</Button>
            <Button size="small">Reset</Button>
          </div>
        </div>
      </div>
    </div>;
  };

  const updateChildren = () => {
    const ctrl = <Input.IconInput size="medium">
      <Input placeholder={placeholder} value={getFormatDate()} onChange={(e) => {
      }}/>
      <IconCalendar/>
    </Input.IconInput>;

    const popupBody = getCalendar(getDisplayDate());

    return {
      body: popupBody,
      ctrl: ctrl,
    };
  };

  const handleClose = () => {
    dispatch({type: DateActionType.close});
  };

  return <PopupController
      ref={ref}
      margin={0}
      position={position}
      setChildDisabled={false}
      onClose={handleClose}
      handleChildren={updateChildren}
      {...otherProps}/>;
});

export default DatePicker;