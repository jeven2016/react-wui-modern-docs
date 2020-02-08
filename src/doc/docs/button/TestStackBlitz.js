import React from 'react';
import {Button} from 'react-wui-modern';
import ReactDOM from 'react-dom';
import App from '../../../App';

export const CodeForm = () => {
  return (<form id="mainForm" method="post" action="https://stackblitz.com/run"
                target="_blank">
    <input type="hidden" name="project[files][index.js]" value="
    import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-wui-modern';

const App = ()=>{
 return <Button onClick={()=> alert()}>
      default</Button>;
};


ReactDOM.render(<App/>,
    document.getElementById('root'));
    "/>
    <input type="hidden" name="project[files][index.html]"
           value='<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="msapplication-tap-highlight" content="no" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000"/>
        <title>React Wui</title>
    </head>
    <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    </body>
    </html>
      '/>
    <input type="hidden" name="project[tags][]" value="react-wui-modern"/>
    <input type="hidden" name="project[tags][]" value="example"/>
    <input type="hidden" name="project[tags][]" value="tutorial"/>
    <input type="hidden" name="project[description]" value="react-wui-modern Example"/>
    <input type="hidden" name="project[dependencies]"
           value="{&quot;react-wui-modern&quot;:&quot;^0.1.31&quot;, &quot;react&quot;:&quot;^16.12.0&quot;, &quot;react-dom&quot;:&quot;^16.12.0&quot;, &quot;lodash&quot;:&quot;4.17.15&quot;, &quot;@babel/runtime&quot;:&quot;7.0.0-beta.55&quot;}"/>
    <input type="hidden" name="project[template]" value="javascript"/>
    <input type="hidden" name="project[settings]"
           value="{&quot;compile&quot;:{&quot;clearConsole&quot;:false}}"/>
    <Button type="submit">StackBlitz</Button>
  </form>);
};