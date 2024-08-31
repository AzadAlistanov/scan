
export function validateInn(inn: string) {
  let isValidate = false;
  let messageValidate = ''

  if (!inn.length) {
    messageValidate = 'ИНН пуст';
  } else if (/[^0-9]/.test(inn)) {
    messageValidate = 'ИНН может состоять только из цифр';
  } else if ([10, 12].indexOf(inn.length) === -1) {
    messageValidate = 'ИНН может состоять только из 10 или 12 цифр';
  } else {
    isValidate = true;
    messageValidate = 'OK'
  };
  return { isValidate, messageValidate };
}

export function validateNumDocuments(num: string) {
  let isValNumDoc = false;
  let mesValNumDoc = ''

  if (!num.length) {
    mesValNumDoc = 'Пустое поле';
  } else if (/[^0-9]/.test(num)) {
    mesValNumDoc = 'Поле может состоять только из цифр';
  } else if (1 > Number(num) || Number(num) > 1000) {
    mesValNumDoc = 'В поле могут быть цифры от 1 до 1000';
  } else {
    isValNumDoc = true;
    mesValNumDoc = 'OK'
  };

  return { isValNumDoc, mesValNumDoc };
};

export function validateDate(startDate: string, endDate: string) {
  let isValidateDate = false;
  let mesValidateDate = 'Пустое поле'


  if (startDate.length && endDate.length) {
    if (new Date(startDate) > new Date() || new Date(endDate) > new Date()) {
      mesValidateDate = 'Даты не должны быть в будущем времени';
    } else if (new Date(startDate) > new Date(endDate)) {

      mesValidateDate = 'Дата начала не может быть позже даты конца';
    } else {
      isValidateDate = true;
      mesValidateDate = 'OK'
    };
  }

  return { isValidateDate, mesValidateDate };
}