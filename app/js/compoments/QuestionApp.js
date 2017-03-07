var React=require("react");
var ShowAddButton=require("./ShowAddButton.js");
var QuestionForm=require("./QuestionForm.js");
var QuestionList=require("./QuestionList.js");
var _=require("lodash");

module.exports=React.createClass({
    getInitialState:function(){
        var questions=[
            {
                key:1,
                title:"热爱编程是怎样一种体验",
                description:"别人对玩游戏的兴趣，我对代码看技术文章的兴趣；把泡github、stackoverflow当做爱好兴趣",
                voitCount:10
            },
            {
                key:2,
                title:"热爱编程是怎样一种体验热爱编程是怎样一种体验",
                description:"别人对玩游戏的兴趣，我对代码看技术文章的兴趣；把泡github、stackoverflow当做爱好兴趣别人对玩游戏的兴趣，我对代码看技术文章的兴趣；把泡github、stackoverflow当做爱好兴趣",
                voitCount:2
            },
        ]
        return{
            questions:questions,
            formDisplayed:false
        }
    },
    onToggleForm:function(){
        this.setState({
            formDisplayed:!this.state.formDisplayed
        })
    },
    onNewQuestion:function(question){
        question.key=this.state.questions.length+1;
        var newQuestions=this.state.questions.concat(question);
        newQuestions=this.sortQuestion(newQuestions);
        this.setState({
            questions:newQuestions
        })
    },
    sortQuestion:function(questions){
        questions.sort(function(a,b){
            return b.voitCount-a.voitCount;
        })
        return questions;
    },
    setVoit:function(key,voit){
        var questions=_.uniq(this.state.questions);
        var index=_.findIndex(questions,function(qst){
            return qst.key==key;
        })

        questions[index].voitCount=voit;
        questions=this.sortQuestion(questions);
        this.setState({
            questions:questions
        })
    },
    render:function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React问答</h1>
                        <ShowAddButton onToggleForm={this.onToggleForm}/>
                    </div>
                </div>
                <div className="main container">
                    <QuestionForm 
                        onNewQuestion={this.onNewQuestion}
                        formDisplayed={this.state.formDisplayed} 
                        onToggleForm={this.onToggleForm}/>
                    <QuestionList 
                        setVoit={this.setVoit} 
                        questions={this.state.questions}/>
                </div>
            </div>
        )
    }
})