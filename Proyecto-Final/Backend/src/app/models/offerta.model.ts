import { Column,Entity,JoinColumn,OneToOne } from "typeorm";
import {TipoDocumento,} from "./enums";
import { Usuario } from "./usuario.model";
import { Domicilio } from "./domicilio.model";

@Entity("offerta")
export class Offerta extends Usuario
{
    @Column({nullable:true })
    nombreOfferta:string;
    @Column({ nullable:true})
    nombreEmpresa:string;

    @Column({ nullable: true})
    descripcion:string;
    
    @Column({nullable:true})
    puesto:string;

    @Column({nullable:true})
    salario:string;

    @Column({ nullable:true })
    nivelEducativo:string

    
    @Column({nullable: true})
    fechaLimite:Date;

    
    
    @OneToOne(() => Domicilio,domicilio => domicilio.Empresa)
    @JoinColumn()
    domicilio:Domicilio;

    

    
    
    //@OneToOne(()=> , )
    
    

    
}