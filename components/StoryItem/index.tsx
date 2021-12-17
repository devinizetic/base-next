import { IItem } from '../../shared/model';
import styles from './storyItem.module.css';

interface IProps {
  item: IItem;
}

export const StoryItem: React.FC<IProps> = ({ item }) => {
  const date = new Date(item.time * 1000).toLocaleDateString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className={styles.storyItemContainer}>
      <div>
        <div>
          Score: <b>{item.score}</b>
        </div>
      </div>
      <hr />
      <div>
        <div>{date}</div>
        <div>{item.title}</div>
      </div>
    </div>
  );
};
