import { createPinia } from "pinia";
import piniapluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();

pinia.use(piniapluginPersistedstate)

export default pinia