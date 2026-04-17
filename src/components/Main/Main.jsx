const Main = ({ columns, onCardClick, onOpenNewCard }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column) => (
              <Column
                key={column.id}
                title={column.title}
                cards={column.cards}
                onCardClick={onCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
