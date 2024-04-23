export default function TwitterFollowCard({
  formatUsername,
  userName,
  name,
  isFollowing,
}) {
  return (
    <article className="tw-followCard">
      <headerc className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="Avatar 1"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">
            {formatUsername(userName)}
          </span>
        </div>
      </headerc>
      <aside>
        <button className="tw-followCard-button" type="button">
          Seguir
        </button>
      </aside>
    </article>
  );
}
