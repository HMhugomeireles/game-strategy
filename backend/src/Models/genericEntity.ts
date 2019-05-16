import Util from './../util/utility';

export default abstract class GenericEntity {
    private uid: string;
    private createAt: string;
    private updateAt: string;

    public constructor (uid: string, createAt: string, updateAt: string) {
      if (uid === '') {
        this.uid = Util.createNewUID()
        this.createAt = '';
        this.updateAt = '';
      }
      this.uid = Util.createNewUID();
      this.createAt = createAt;
      this.updateAt = updateAt;
    }

    public getUid (): string {
      return this.uid;
    }

    public getCreateAt (): string {
      return this.createAt;
    }

    public getUpdateAt (): string {
      return this.updateAt;
    }
}
