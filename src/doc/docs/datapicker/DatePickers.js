import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, DatePicker, preventEvent} from '../../../react-wui-modern';
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
    <DocRow>
      <DocCol>
        <DatePicker hasTitle={false} autoClose/>
      </DocCol>
      <DocCol>
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
