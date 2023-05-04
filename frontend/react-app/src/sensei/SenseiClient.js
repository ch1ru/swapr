import SenseiClient from '@l2-technology/sensei-client';

const senseiHost = 'http://localhost:5401';
const senseiClient = new SenseiClient({ basePath: senseiHost });

export default senseiClient;