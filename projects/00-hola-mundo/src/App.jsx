import './app.css';
import TwitterFollowCard from './TwitterFollowCard';

export default function App() {
  const formatUsername = (userName) => `@${userName}`;
  return (
    <>
      <TwitterFollowCard
        formatUsername={formatUsername}
        isFollowing={false}
        userName="midudev"
        name="Miguel Angel Durán"
      />

      <TwitterFollowCard
        formatUsername={formatUsername}
        isFollowing
        userName="elonmusk"
        name="Elon Musk"
      />
    </>
  );
}
