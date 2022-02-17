const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const _public = {};

_public.getNow = () => {
  return new Date();
};

_public.format = (isoString, lang) => {
  const [year, month, day] = getDatePartsFromIsoString(isoString);
  return lang == 'en' ? `${parseInt(month)}/${parseInt(day)}/${year}` : `${day}/${month}/${year}`;
};

_public.formatDescriptively = isoString => {
  const [year, month, day] = getDatePartsFromIsoString(isoString);
  const monthNameIndex = parseInt(month) - 1;
  return `${MONTH_NAMES[monthNameIndex]} ${day}, ${year}`;
};

_public.formatMonthDescriptively = monthString => {
  const [year, month] = getDatePartsFromIsoString(monthString);
  const monthNameIndex = parseInt(month) - 1;
  return `${year} ${MONTH_NAMES[monthNameIndex]}`;
};

function getDatePartsFromIsoString(isoString){
  return isoString.split('-');
}

export default _public;
