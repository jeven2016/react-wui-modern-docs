import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, DatePicker, preventEvent} from '../../../react-wui';
import {DocCol, DocRow} from '../../common/DocComponents';

export const DatePickerA = () => {
  let comp = <>
    <DocRow>
      <DocCol>
        <DatePicker onChange={(val) => console.log('value=' + val)}/>
      </DocCol>
      <DocCol>
        <DatePicker leftTitle onChange={(val) => console.log('value=' + val)}/>
      </DocCol>
    </DocRow>
    <DocRow>
      <DocCol>
        <DatePicker hasTitle={false} autoClose
                    onChange={(val) => console.log('value=' + val)}/>
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
