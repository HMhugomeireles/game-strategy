import uuid from 'uuid/v4';

const createUser = ({ name = "" } = {}) => (
  {
    id: uuid(),
    name
  }
)

const createMessage = ({ message = "", sender = ""} = {}) => (
  {
    id: uuid(),
    time: new Date(Date.now()),
    message,
    sender
  }
)

const createChat = ({ message = [], name = "Community", users = []} = {}) => (
  {
    id: uuid(),
    name,
    message,
    users,
    typingUsers: []
  }
)

const getTime = (date) => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
}
