const _public = {};

_public.getNow = () => {
  return new Date();
};

_public.format = (isoString, lang) => {
  const [year, month, day] = isoString.split('-');
  return lang == 'en' ? `${parseInt(month)}/${parseInt(day)}/${year}` : `${day}/${month}/${year}`;
};

export default _public;
