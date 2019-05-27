class HttpException extends Error {
	private status: number;

	public constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}

	public getStatus(): number {
		return this.status;
	}
}

export default HttpException;
