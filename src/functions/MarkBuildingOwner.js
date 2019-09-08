class MarkBuildingOwner {
  static markOwner = () => {
    const ownerHtml = ' <font color=green>[楼主]</font>';
    const ownerName = document.querySelector('.header .gray a').innerHTML;
    const ownerLinks = document.querySelectorAll('#Main .box .dark');
    for (let i = 0; i < ownerLinks.length; i += 1) {
      if (ownerLinks[i].innerHTML === ownerName) {
        ownerLinks[i].innerHTML += ownerHtml;
      }
    }
  }
}

export default MarkBuildingOwner;
