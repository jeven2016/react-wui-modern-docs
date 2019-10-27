import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {DatePicker} from '../../../react-wui';
import {DocCol, DocRow} from '../../common/DocComponents';

export const DatePickerA = () => {
  let comp = <>
    <DocRow>
      <DocCol>
        <DatePicker/>
      </DocCol>
      <DocCol>
        <DatePicker leftTitle/>
      </DocCol>
    </DocRow>
    {/*<DateTimePicker/>*/}
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  `;

  return <SamplePannel component={comp} code={code}/>;
};
