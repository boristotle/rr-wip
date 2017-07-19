export function logRecord(record) {
  return {
    type: 'LOG_RECORD',
    payload: record
  }
}