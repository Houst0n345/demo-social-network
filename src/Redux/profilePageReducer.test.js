import React from 'react';

import profilePageReducer, {addPostActionCreator, deletePost} from "./profilePageReducer";

const state = {
    postData: [
        {messagePost: 'hey hey ehy', like: 4, id:0},
        {messagePost: 'hey rererer', like: 5, id:1},
    ],
};
it('new post should be added', ()=>{
    //1 start data
    let action = addPostActionCreator('New post was added');
    //2 action
    let newState = profilePageReducer(state,action);
    //3 expectation
    expect(newState.postData.length).toBe(3);
});
it('post with id==postId must be deleted', ()=>{
    //1 start data
    let action = deletePost(1);
    //2 action
    let newState = profilePageReducer(state,action);
    //3 expectation
    expect(newState.postData.length).toBe(1);
});
