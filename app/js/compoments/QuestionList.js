/**
 * Created by Administrator on 2017/3/7.
 */
var React=require("react");
var QuestionItem=require("./QuestionItem.js")

module.exports=React.createClass({
    render: function () {
		var questions=this.props.questions;
		var setVoit=this.props.setVoit;
		if(!Array.isArray(questions)){
			return new Error("this.props.questions问题必须为数组");
		}
		var questionComs=questions.map(function(qst){
			return <QuestionItem 
						setVoit={setVoit} 
						key={qst.key}
						itemKey={qst.key}
						title={qst.title}
						description={qst.description}
						voitCount={qst.voitCount}/>
		})
        return (
        	<div id="questions">
        		{questionComs}
            </div>
        )
    }
})