// E-mail confirmation

function validateMail(p1, p2) {
  if (p1.value != p2.value || p1.value == '' || p2.value == '') {
      p2.setCustomValidity('E-mail unmatched.');
  } else {
      p2.setCustomValidity('');
  }
  }