/**
 * Created by Administrator on 2017/3/2.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var QuestionApp = require('./compoments/QuestionApp.js');

var mainCom = ReactDOM.render(
    <QuestionApp/>,
    document.getElementById('app')
);