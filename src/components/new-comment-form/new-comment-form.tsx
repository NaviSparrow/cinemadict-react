import React, {useState} from 'react';
import {usePostNewComment} from '../../hooks/usePostNewComment';
import {EmotionsType} from '../../types/comment-type';
import {useSelector} from 'react-redux';
import {getPopupMovie} from '../../store/main-data/main-data';

const Emotions: string[] = ['smile', 'sleeping', 'puke', 'angry'];

const addEmoji = (userEmotion: EmotionsType) => userEmotion && <img src={`./images/emoji/${userEmotion}.png`} width="55" height="55" alt={`emoji-${userEmotion}`}/>;

function NewCommentForm():JSX.Element {
  const [userEmotion, setUserEmotion] = useState<EmotionsType>(null);
  const [userComment, setUserComment] = useState<string>('');
  const popup = useSelector(getPopupMovie);
  const {postComment} = usePostNewComment(popup && popup.id, {comment: userComment, emotion: userEmotion});

  const commentChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => setUserComment(evt.currentTarget.value);

  const emojiClickHandler = (evt: React.MouseEvent<HTMLInputElement>) => setUserEmotion(evt.currentTarget.value as EmotionsType);


  return (
    <div className="film-details__new-comment">
      <div className="film-details__add-emoji-label">
        {addEmoji(userEmotion)}
      </div>

      <label className="film-details__comment-label">
        <textarea
          className="film-details__comment-input"
          placeholder="Select reaction below and write comment here" name="comment"
          onChange={commentChangeHandler}
          onKeyDown={postComment}
        />
      </label>

      <div className="film-details__emoji-list">
        {Emotions.map((emotion: string) => (
          <>
            <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id={`emoji-${emotion}`} value={emotion} onClick={emojiClickHandler}/>
            <label className="film-details__emoji-label" htmlFor={`emoji-${emotion}`}>
              <img src={`./images/emoji/${emotion}.png`} width="30" height="30" alt="emoji"/>
            </label>
          </>
        ))}
      </div>
    </div>
  );
}

export default NewCommentForm;
