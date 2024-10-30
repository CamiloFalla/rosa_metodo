//components/IncludeCardEmployee.jsx
import { useState } from "react";

export function IncludeCardEmployee ({children,avatar, initevaluate, name, cargo}) {
    const [isevaluate, setisevaluate] =useState(initevaluate)
    

    const imgesrc = `/images/employee/${name}/${name}.jpg`
    const text = isevaluate ? 'Evaluado' : 'Evaluar'
    const buttonClassName = isevaluate
        ?   'include-card-button is-evaluated'
        :   'include-card-button'

    const handleClick = () => {
        setisevaluate(!isevaluate)
    }

    return (
        <article className="include-card">
            <header className="include-person-total">
                <img className="include-card-avatar"
                alt={name} 
                src = {imgesrc} />
                <div className="include-card-info">
                    <strong>{name}</strong>
                    {children}
                    <span className="include-card-rol">{cargo}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}
