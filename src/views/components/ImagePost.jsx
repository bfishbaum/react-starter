import React from 'react';
import Comment from './Comment';

const renderComment = (text, key) => (
    <Comment text={text} key={}/>
);

const ImagePost = (props) => {
    return (
        <div>
            <div>
                <img src={props.imageSource} />
            </div>
            <div>
                {props.comments.map((text, key) => renderComment(text, key))}
            </div>
        </div>
    );
}
