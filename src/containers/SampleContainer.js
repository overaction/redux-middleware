import React, { useCallback, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPost, getUsers} from '../modules/sample';
import Sample from '../components/Sample';

const SampleContainer = () => {
    const {post, users, loadingPost, loadingUsers} = useSelector(({sample}) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }));
    const dispatch = useDispatch();
    const getpost = useCallback(id => dispatch(getPost(id)),[dispatch]);
    const getusers = useCallback(() => dispatch(getUsers()),[dispatch]);
    useEffect(() => {
        getpost(1);
        getusers();
    },[getPost, getUsers])
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    )
}
export default SampleContainer;

/*

import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Sample from '../components/Sample';
import {getPost, getUsers} from '../modules/sample';

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    useEffect(() => {
        getPost(1);
        getUsers();
    },[getPost,getUsers]);
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({sample}) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);

*/