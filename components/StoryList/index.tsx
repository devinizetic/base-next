import { IItem } from '../../shared/model';
import { StoryItem } from '../StoryItem';
import styles from './storyList.module.css';

interface IProps {
  items: IItem[];
}

export const StoryList: React.FC<IProps> = ({ items }) => {
  return (
    <div className={styles.storyListContainer}>
      {items.map((item) => (
        <StoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};
