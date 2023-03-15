// hay que hacer esto cuando trabajo con "type":"module"
// __dirname trabaja con las rutas absolutas

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default __dirname;
