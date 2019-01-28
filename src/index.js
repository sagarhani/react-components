import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sagar" time="Today at 9:00 AM" content="Nice blog post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Richard" time="Yesterday at 2:00 PM" content="Interesting topic" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Aaron" time="Today at 10:00 AM" content="I like the writing" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));