import 'module-alias';
import app from '@/main/config/app';
import { environment } from '@/main/config/environment';


app.listen(environment.port, () => console.log('Server running'));
