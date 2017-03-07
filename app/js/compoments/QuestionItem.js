/**
 * Created by Administrator on 2017/3/7.
 */
var React=require("react");

module.exports=React.createClass({
	voitUp:function(){
		var voit=parseInt(this.props.voitCount,10)+1;
		this.props.setVoit(this.props.itemKey,voit);
	},
	voitDown:function(){
		var voit=parseInt(this.props.voitCount,10)-1;
		if(voit==-1){
			voit=0;
		}
		this.props.setVoit(this.props.itemKey,voit);
	},
    render:function(){
        return (
        	<div className="media" >
                <div className="media-left">
                    <button className="btn btn-default" onClick={this.voitUp}>
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.props.voitCount}</span>
                    </button>
                    <button className="btn btn-default" onClick={this.voitDown}>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
})