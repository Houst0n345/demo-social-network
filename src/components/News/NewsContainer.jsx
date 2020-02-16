import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {getNewsThunk} from "../../Redux/newsPageReducer";
import News from "./News";


class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.getNewsThunk ();
    }

    render() {
        return <News news={this.props.news}/>
    }
}


let mapStateToProps = (state) => ({
    news: state.newsPage.news,
});

export default compose(
    connect(mapStateToProps, {getNewsThunk})(NewsContainer)
)
