const MONTH_NAMES = require('../../constants/month-names');

const DEFAULT_LANG = 'en-US';

const _public = {};

_public.getNow = () => {
  return new Date();
};

_public.format = (isoString, lang) => {
  const [year, month, day] = getDatePartsFromIsoString(isoString);
  return lang == 'en' ? `${parseInt(month)}/${parseInt(day)}/${year}` : `${day}/${month}/${year}`;
};

_public.formatDescriptively = (isoString, lang = DEFAULT_LANG) => {
  if(!isoString) return '';
  const [year, month, day] = getDatePartsFromIsoString(isoString);
  const monthName = MONTH_NAMES[lang][parseInt(month)-1];
  if(lang == 'pt-BR') return `${parseInt(day)} de ${monthName} de ${year}`;
  return `${monthName} ${parseInt(day)}, ${year}`;
};

_public.formatMonthDescriptively = (monthString, lang = DEFAULT_LANG) => {
  const [year, month] = getDatePartsFromIsoString(monthString);
  const monthNameIndex = parseInt(month) - 1;
  return `${year} ${MONTH_NAMES[lang][monthNameIndex]}`;
};

function getDatePartsFromIsoString(isoString){
  return isoString.split('-');
}

module.exports = _public;
