const capitalize = (str) => {
  return str.charAt(0).toUpperCase().concat('', str.slice(1).toLowerCase())
};

export default capitalize;