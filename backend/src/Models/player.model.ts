import Util from './../util/utility';
import GenericEntity from './genericEntity';

class Player extends GenericEntity {
	private user: string;
	private pass: string;

	public constructor(user: string, pass: string) {
		super(Util.createNewUID(), '', '');
		this.user = user;
		this.pass = pass;
	}

	public getUser(): string {
		return this.user;
	}

	public toString(): string {
		return `ID: ${super.getUid()} User: ${this.user}`;
	}

	public getPass(): string {
		return this.pass;
	}
}

export default Player;
