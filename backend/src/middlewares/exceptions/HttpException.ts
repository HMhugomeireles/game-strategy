class HttpException extends Error {
	status: number;

	public constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}
}

export default HttpException;
