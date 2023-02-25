import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Item() {
  return (
    <div>
      <ul className="items">
        <li className="item__row">
          <div className="item">
            <div className="item__content">
              <input className="item__checkbox" type="checkbox" />
              <span className="item__text">공부하기</span>
            </div>
            <button className="button__delete">
              <BsFillTrashFill />
            </button>
          </div>
          <div className="divider"></div>
        </li>
      </ul>
    </div>
  );
}
