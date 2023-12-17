export const formatStatusMessages = (message, state) => {
  let statusList = [...state.statusMessages]
  if (statusList.length > 5) statusList.pop()
  const timestampedMessage = {
    message: state.spectrum ? message : null,
    timestamp: state.spectrum ? new Date().toLocaleTimeString() : null
  }
  statusList = [timestampedMessage, ...statusList]
  return statusList
}