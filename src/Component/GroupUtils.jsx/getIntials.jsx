const getGroupInitials = (groupName) => {
  if (!groupName || typeof groupName !== "string") {
    return "";
  }

  const words = groupName.split(" ");
  const initials = words.map((word) => (word ? word[0].toUpperCase() : ""));
  return initials.join("");
};

export default getGroupInitials;
