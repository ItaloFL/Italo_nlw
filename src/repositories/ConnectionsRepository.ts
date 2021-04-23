import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connections";


@EntityRepository(Connection)
class ConnectionRepository extends Repository<Connection>{
    
}



export { ConnectionRepository }