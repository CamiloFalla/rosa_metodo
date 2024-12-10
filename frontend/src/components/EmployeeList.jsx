

import React from 'react';
import { IncludeCardEmployee } from './IncludeCardEmployee';
import { EditEmployee } from './EditEmployee';

export function EmployeeList () {
    
    const employees = [
        {
            iduniqemp: 'emp1-cmp',
            name: 'employee1',
            cargo: 'Gerente Comercial',
            area: 'Comercial',
            initevaluate: true
            
        },
        {
            iduniqemp: 'emp2-cmp',
            name: 'employee2',
            cargo: 'Gerente Operaciones',
            area: 'Operaciones',
            initvaluate: true
        },
        {
            iduniqemp: 'emp3-cmp',
            name: 'employee3',
            cargo: 'Gerente Financiero',
            area: 'Contabilidad',
            initevaluate: false
        },
        {
            iduniqemp: 'emp4-cmp',
            name: 'employee4',
            cargo: 'Gerente RRHH',
            area: 'Talento Humano',
            initevaluate: true
        },
        {
            name: 'employee5',
            cargo: 'Gerente General',
            area: 'Comercial',
            initevaluate: true
        },
        {
            iduniqemp: 'emp6-cmp',
            name: 'employee6',
            cargo: 'Jefe Logistico',
            area: 'Operaciones',
            initevaluate: true
        },
        {
            iduniqemp: 'emp7-cmp',
            name: 'employee7',
            cargo: 'Profesional Tecnologia',
            area: 'Tecnología',
            initevaluate: false
        },
        {
            iduniqemp: 'emp8-cmp',
            name: 'employee8',
            cargo: 'Lider de Equipo Técnico',
            area: 'Operaciones',
            initevaluate: false
        },
        {
            iduniqemp: 'emp9-cmp',
            name: 'employee9',
            cargo: 'Ingeniero Comercial',
            area: 'operaciones',
            initevaluate: false
        },

    ]

    return (
        <>
            {
                employees.map(employee =>{
                    const {iduniqemp,name, cargo, initevaluate, area} = employee
                    return(
                        <IncludeCardEmployee
                            key={iduniqemp}
                            initevaluate={initevaluate}
                            name={name}
                            cargo={cargo}
                        >
                            {area}
                        </IncludeCardEmployee>
                    )
                })
            }
            <EditEmployee />
        </>
    );
}