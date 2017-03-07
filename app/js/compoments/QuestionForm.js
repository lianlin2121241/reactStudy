/**
 * Created by Administrator on 2017/3/7.
 */
var React=require("react");

module.exports=React.createClass({
	handleForm:function(e){
		e.preventDefault();

		if(!this.refs.title.value){
			return;
		}
		var question={
			title:this.refs.title.value,
			description:this.refs.description.value,
			voitCount:0
		}

		this.props.onNewQuestion(question);

		this.refs.addQuestionForm.reset();
	},
    render:function(){
    	var styleObj={
    		display:this.props.formDisplayed?"block":"none"
    	}
        return (
        	<form ref="addQuestionForm" style={styleObj} name="addQuestion" className="clearfix" onSubmit={this.handleForm}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题标题"/>
                </div>
                <textarea ref="description" name="" id="" cols="30" rows="10" className="form-control" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <button className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</button>
            </form>
        )
    }
})