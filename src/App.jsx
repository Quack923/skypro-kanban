import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
<img src="/logo.png" alt="logo" />


const initialData = [
  { id: 1, title: "Нужно сделать", cards: [] },
  { id: 2, title: "В работе", cards: [] },
  { id: 3, title: "Тестирование", cards: [] },
  { id: 4, title: "Готово", cards: [] },
];

function App() {
  const [columns, setColumns] = useState(initialData);

  return (
    <div className="wrapper">
      {}
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">Да, выйти</button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">Нет, остаться</button>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
          <div className="pop-new-card__block">
            <div className="pop-new-card__content">
              <h3 className="pop-new-card__ttl">Создание задачи</h3>
              <div className="pop-new-card__wrap">
                <form className="pop-new-card__form form-new" id="formNewCard">
                  <div className="form-new__block">
                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                    <input className="form-new__input" type="text" id="formTitle" placeholder="Введите название задачи..." />
                  </div>
                  <div className="form-new__block">
                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                    <textarea className="form-new__area" id="textArea" placeholder="Введите описание задачи..."></textarea>
                  </div>
                </form>
              </div>
              <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
            </div>
          </div>
        </div>
      </div>

      {}
      <Header />
      {}
      <Main columns={columns} /> 
    </div>
  );
}

export default App;
