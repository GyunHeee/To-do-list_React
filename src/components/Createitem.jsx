import React, { createElement } from 'react';

export default function Createitem(text) {
  const itemRow = createElement('li');
  itemRow.setAttribute('class', 'item__row');
  const item = createElement('div');
  item.setAttribute('class', 'item');
  const itemContent = createElement('div');
  itemContent.setAttribute('class', 'item__content');
  const itemCheckbox = createElement('input');
  itemCheckbox.setAttribute('type', 'checkbox');
  itemCheckbox.setAttribute('class', 'item__checkbox');
  const itemText = createElement('span');
  itemText.innerText = text;
  itemText.setAttribute('class', 'item__text');
  const deleteBtn = createElement('button');
  deleteBtn.setAttribute('class', 'button__delete');
  const divider = createElement('div');
  divider.setAttribute('class', 'divider');

  itemContent.appendChild(itemCheckbox);
  itemCheckbox.appendChild(itemText);

  item.appendChild(itemContent);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(divider);

  return <div>itemRow</div>;
}
