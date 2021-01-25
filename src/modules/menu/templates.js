export function menuContainerTemplate({ title = 'Title', menu = '' } = {}) {
    return `
  <div data-component="MenuContainer" class="menu">
    <span class="title">${title}</span>
    ${menu}
  </div>
`;
}

export function menuListItemsTemplate({ items = [] } = {}) {
    return `<ul>${items.map(name => `<li>${name}</li>`).join('')}</ul>`;
}