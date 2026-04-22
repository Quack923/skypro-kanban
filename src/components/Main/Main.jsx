import React from "react";
import Column from "../Column/Column.jsx";

const Main = ({ columns, onCardClick }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {}
            {columns && columns.map((column) => (
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

export default Main;
