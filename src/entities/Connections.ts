import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("connections")
class Connection{

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;
    
    @JoinColumn({ name:"user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @Column()
    socket_id: string;

    @CreateDateColumn()
    create_id: Date;

    @UpdateDateColumn()
    updated_id: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}


export { Connection }