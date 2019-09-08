class AtPeople {
  constructor() {
    this.addButton();
  }

  static new = () => new AtPeople()

  getAllInPage = () => {
    const ownerName = document.querySelector('.header .gray a').innerHTML;
    return [...document.querySelectorAll('#Main .box .dark')]
      .map(link => link.innerHTML)
      .filter(userName => userName.indexOf(ownerName) === -1)
      .map(userName => `@${userName}`)
      .join(' ');
  }

  addButton = () => {
    const aAtAll = document.createElement('a');
    // eslint-disable-next-line no-script-url
    aAtAll.href = 'javascript:void(0);';
    aAtAll.innerText = '@所有人';
    aAtAll.style.cursor = 'pointer;';
    aAtAll.onclick = () => {
      const allInPage = `${this.getAllInPage()} `;
      const textarea = document.querySelector('#reply_content');
      if (textarea.value.length > 0) {
        textarea.value += `\n${allInPage}`;
      } else {
        textarea.value = allInPage;
      }
      setTimeout(() => {
        textarea.focus();
      }, 1);
    };
    const form = document.querySelector('#Main .box form');
    form.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
    form.appendChild(aAtAll);
  }
}

export default AtPeople;
