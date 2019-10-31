import moment from 'moment';
import {invoke, isBlank, isNil} from '../Utils';

export const DateActionType = {
  nextYear: 'nextYear',
  nextMonth: 'nextMonth',
  preYear: 'preYear',
  preMonth: 'preMonth',
  selectDay: 'selectDay',
  close: 'close',
  open: 'open',
  enterValue: 'enterValue',
  inputBlur: 'inputBlur',

};

const getDateByYear = (yearOffset, momentDate) => {
  return momentDate.clone().add(yearOffset, 'years');
};

const getDateByMonth = (monthOffset, momentDate) => {
  return momentDate.clone().add(monthOffset, 'months');
};

function handleBlur(state, action) {
  const currentInputValue = state.inputValue;
  if (isNil(state.date) && isBlank(currentInputValue)) {
    //clear the input
    invoke(action.data.onChange, '');
    return {...state, inputValue: null, date: null, displayDate: null};
  }

  const momentDate = moment(currentInputValue, action.data.dateParseFormat,
      true);
  const isValidDate = momentDate.isValid();
  if (isValidDate) {
    invoke(action.data.onChange, momentDate.format(action.data.dateFormat));
    return {...state, inputValue: null, date: momentDate};
  }
  invoke(action.data.onChange, '');
  return {...state, inputValue: null};
}

export const initReducer = (props) => {
  return (state, action) => {
    switch (action.type) {
      case DateActionType.nextYear:
        return {...state, displayDate: getDateByYear(1, action.data.date)};

      case DateActionType.nextMonth:
        console.log(state);
        return {...state, displayDate: getDateByMonth(1, action.data.date)};

      case DateActionType.preYear:
        return {...state, displayDate: getDateByYear(-1, action.data.date)};

      case DateActionType.preMonth:
        return {...state, displayDate: getDateByMonth(-1, action.data.date)};

      case DateActionType.selectDay:
        return {...state, displayDate: null, date: action.data.date};

      case DateActionType.enterValue:
        let inputValue = action.data.value;
        if (isBlank(inputValue)) {
          return {...state, date: null, inputValue: null};
        }
        return {...state, inputValue: inputValue};

      case  DateActionType.inputBlur:
        return handleBlur(state, action);

      case DateActionType.close:
        const finalDate = state.date;
        if(props.autoClose && isBlank(finalDate)){
          invoke(props.onChange, finalDate.format(props.dateFormat));
        }
        return {...state, displayDate: null};
    }
  };
};



