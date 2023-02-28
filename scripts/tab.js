function applyActiveStyle(elem) {
  let checkedLabel = elem.find('input:checked').closest('label');
  let pastCheckedLabel = elem.find('.active');
  if (pastCheckedLabel) pastCheckedLabel.removeClass('active');
  checkedLabel.addClass('active');
}

function activeTabContents(elem) {
  let activeTab = elem.find('input:checked')[0].id;
  let pastActiveTab = document.querySelector('.tab-sec.active');
  if (pastActiveTab) pastActiveTab.classList.remove('active');
  document.querySelector(`.sec-${activeTab}`).classList.add('active');
}

function controlRadio(elem) {
  applyActiveStyle(elem);
  activeTabContents(elem);
}
