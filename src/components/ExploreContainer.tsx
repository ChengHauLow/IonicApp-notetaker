import './ExploreContainer.css';
import Inbox from '../views/Inbox/Inbox';
import Outbox from '../views/Outbox/Outbox';
import Favorites from '../views/Favorites/Favorites';
import Trash from '../views/Trash/Trash';
import Archived from '../views/Archived/Archived';
import Spam from '../views/Spam/Spam';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const normalPage = (
    <div id="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  )
  const InboxPage = (
    <Inbox />
  )
  const OutboxPage = (
    <Outbox />
  )
  const FavoritesPage = (
    <Favorites />
  )
  const ArchivedPage = (
    <Archived />
  )
  const TrashPage = (
    <Trash />
  )
  const SpamPage = (
    <Spam />
  )
const getPage = (name: string)=>{
  switch (name) {
    case 'Inbox':
      return InboxPage;
    case 'Outbox':
      return OutboxPage;
    case 'Favorites':
      return FavoritesPage;
    case 'Archived':
      return ArchivedPage;
    case 'Trash':
      return TrashPage;
    case 'Spam':
      return SpamPage;
    default:
      return normalPage;
  }
}
  return getPage(name);
};

export default ExploreContainer;
