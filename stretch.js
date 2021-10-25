const notifyByEmail = (address) => {
  return `Email sent to: ${address}`;
};

const notifyByText = (number) => {
  return `Text sent to: ${number}`;
};

function notify(string, notification) {
  return notification(string);
};

console.log(notify('arthur@example.com', notifyByEmail))