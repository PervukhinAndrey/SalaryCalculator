import React, {useState} from 'react';
import s from './SalaryCalculator.module.css';
import rubles from './../../img/ruble.svg'
import { thousandsSeparator} from "../../utils/stringFunctions";
import IconPlusTextString from "../commonComponents/IconPlusTextString/IconPlusTextString";
import SalaryCalculatorFormRedux from "./SalaryCalculatorForm/SalaryCalculatorForm";

const SalaryCalculator = () => {
    const [salaryType, setSalaryType] = useState('1')
    const [salary, setSalary] = useState(0)
    const [ndfl, setNdfl] = useState(false)

    const calculatedDalafy = (salary:number):number => {
        if (ndfl) {
            return salary / .87
        } else {
            return salary
        }
    }
    const hideCalculator = () => {
        if (salaryType === '1') {
            return ''
        } else {
            return s.hide
        }
    }

    return (
        <div className={s.salaryCalculator}>
            <span className={s.salaryCalculatorHeader}>Сумма</span>
            <SalaryCalculatorFormRedux salaryType={salaryType} setSalaryType={setSalaryType}
                                         setSalary={setSalary} setNdfl={setNdfl} ndfl={ndfl}/>
            <div className={s.calculator + ' ' + hideCalculator()}>
                <div className={s.stringBlock}>
                    <span>{thousandsSeparator(String(Math.trunc(calculatedDalafy(salary) * .87)))}</span>
                    <IconPlusTextString icon={rubles} text={'сотрудник будет получать на руки'}/>

                </div>
                <div  className={s.stringBlock}>
                    <span>{thousandsSeparator(String(Math.trunc(calculatedDalafy(salary) * .13)))}</span>
                    <IconPlusTextString icon={rubles} text={'НДФЛ, 13% от оклада'}/>
                </div>
                <div  className={s.stringBlock}>
                    <span>{thousandsSeparator(String(Math.trunc(calculatedDalafy(salary))))}</span>
                    <IconPlusTextString icon={rubles} text={'за сотрудника в месяц'}/>
                </div>
            </div>
        </div>
    )
}


export default SalaryCalculator;