import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {getCommentsList} from '../../store/main-data/main-data';
import CommentsList from '../comments-list/comments-list';

type EmotionsType = 'smile' | 'sleeping' | 'puke' | 'angry' | null;

function Comments() {
  const [userEmotion, setUserEmotion] = useState<EmotionsType>(null);
  const [userComment, setUserComment] = useState<string>('');
  const commentsList = useSelector(getCommentsList);
  const Emotions: string[] = ['smile', 'sleeping', 'puke', 'angry'];

  const addEmoji = () => userEmotion && <img src={`./images/emoji/${userEmotion}.png`} width="55" height="55" alt={`emoji-${userEmotion}`}/>;

  const userCommentChangeHandler = (evt:  React.ChangeEvent<HTMLTextAreaElement>) => setUserComment(evt.currentTarget.value);

  return (
    <div className="film-details__bottom-container">
      <section className="film-details__comments-wrap">
        <CommentsList commentsList={commentsList}/>

        <div className="film-details__new-comment">
          <div className="film-details__add-emoji-label">
            {addEmoji}
          </div>

          <label className="film-details__comment-label">
            <textarea className="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment" onChange={userCommentChangeHandler}/>
          </label>

          <div className="film-details__emoji-list">
            {Emotions.map((emotion: string) => (
              <>
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id={`emoji-${emotion}`} value={emotion}/>
                <label className="film-details__emoji-label" htmlFor={`emoji-${emotion}`}>
                  <img src={`./images/emoji/${emotion}.png`} width="30" height="30" alt="emoji"/>
                </label>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Comments;
