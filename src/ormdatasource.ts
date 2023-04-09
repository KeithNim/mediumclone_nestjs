import { DataSource } from 'typeorm';
import ormConfig from './ormconfig';

const dataSource = new DataSource(ormConfig);

export default dataSource;
