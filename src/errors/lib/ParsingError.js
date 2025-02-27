export default class ParsingError extends Error {
	constructor (message, line, column) {
		super(message)
		this.line = line
		this.column = column
		Error.captureStackTrace(this, this.constructor)
	}
}
