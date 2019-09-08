class AtPeople {
  managerTeam = '@Livid @Kai @Olivia @GordianZ @sparanoid '
  constructor() {
    this.addButtons();
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

  addButtons = () => {
    const aAtAll = this.createAtAllButton();
    const aAtManagerTeam = this.createAtManagerTeamButton();
    const form = document.querySelector('#Main .box form');
    form.appendChild(aAtAll);
    form.appendChild(aAtManagerTeam);
  }

  createAtAllButton = () => {
    const aAtAll = document.createElement('a');
    // eslint-disable-next-line no-script-url
    aAtAll.href = 'javascript:void(0);';
    aAtAll.innerText = '@所有人';
    aAtAll.style.cursor = 'pointer;';
    aAtAll.style.marginLeft = '10px';
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
    return aAtAll;
  }

  createAtManagerTeamButton = () => {
    const aAtManagerTeam = document.createElement('a');
    // eslint-disable-next-line no-script-url
    aAtManagerTeam.href = 'javascript:void(0);';
    aAtManagerTeam.innerText = '@管理员';
    aAtManagerTeam.style.cursor = 'pointer;';
    aAtManagerTeam.style.marginLeft = '10px';
    aAtManagerTeam.onclick = () => {
      const textarea = document.querySelector('#reply_content');
      if (textarea.value.length > 0) {
        textarea.value += `\n${this.managerTeam}`;
      } else {
        textarea.value = this.managerTeam;
      }
      setTimeout(() => {
        textarea.focus();
      }, 1);
    };
    return aAtManagerTeam;
  }
}

export default AtPeople;
