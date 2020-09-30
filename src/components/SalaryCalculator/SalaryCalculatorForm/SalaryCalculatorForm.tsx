import React from "react";
import {spaceClean, thousandsSeparator} from "../../../utils/stringFunctions";
import {Col, Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import s from "./SalaryCalculatorForm.module.css";
import rubles from "../../../img/ruble.svg";
import IconPlusTextString from "../../commonComponents/IconPlusTextString/IconPlusTextString";
import TooltipIcon from "../../commonComponents/TooltipIcon/TooltipIcon";


type PropsType = {
    setSalaryType: (arg: string) => void
    setNdfl: (arg: boolean) => void
    setSalary: (arg: number) => void
    salaryType: string
    ndfl:boolean
}
const SalaryCalculatorForm: React.FC<PropsType> = ({setSalaryType, setNdfl, setSalary, salaryType,ndfl}) => {
    const onChangePayType = (e: any): void => {
        setSalaryType(e.currentTarget.value)
    }
    const salaryLabelText = () => {
        switch (salaryType) {
            case '1':
            case '2':
                return ''
            case '3':
                return ' в день'
            case '4':
                return ' в час'
            default:
                return ''
        }
    }
    const hideSalaryInput=()=>{
        if (salaryType==='2'){
            return s.hide
        }
        else{
            return ''
        }
    }
    const onSwitchNDFL = (e: any): void => {
        if (e.currentTarget.checked) {
            setNdfl(true);
        } else {
            setNdfl(false);
        }
    }
    const salaryFormat = (e: string): string => {
        if (e) {
            let re = /^[0-9 ]+$/;
            if (re.test(e)) {
                let clearStringOfNumber = spaceClean(e);
                setSalary(Number(clearStringOfNumber));
                return thousandsSeparator(clearStringOfNumber)
            } else {
                return e.substring(0, e.length - 1)
            }
        } else return ''
    }
    const leftTextColor=()=>{
        if (ndfl){
            return s.gray
        }
        else{
            return  s.black
        }
    }
    const rightTextColor=()=>{
        if (ndfl){
            return s.black
        }
        else{
            return  s.gray
        }

    }
    return (
        <div>
            <Form>
                <fieldset className={s.radioFieldset}>
                    <Field component={FormCheck}
                           checked={true}

                           onClick={onChangePayType}
                           type={'radio'}
                           label={'Оклад за месяц'}
                           name={'formHorizontalRadios'}
                           id={'custom-MonthlySalary'}
                           value={'1'}/>
                    <Field component={FormCheck}
                           onClick={onChangePayType}
                           type={'radio'}
                           label={
                               <>
                                   <span>МРОТ</span>
                                   <TooltipIcon
                                       tooltipText={'МРОТ - минимальный размер оплаты труда. Разный для разных регионов.'}/>
                               </>}
                           name={'formHorizontalRadios'}
                           id={'custom-MROT'}
                           value={'2'}/>
                    <Field component={FormCheck}
                           onClick={onChangePayType}
                           type={'radio'}
                           label={'Оплата за день'}
                           name={'formHorizontalRadios'}
                           id={'custom-DailySalary'}
                           value={'3'}/>
                    <Field component={FormCheck}
                           onClick={onChangePayType}
                           type={'radio'}
                           label={'Оплата за час'}
                           name={'formHorizontalRadios'}
                           id={'custom-HourlySalary'}
                           value={'4'}/>
                </fieldset>
                <div className={s.switchBlock}>
                    <span className={s.switchText+' '+leftTextColor()}>Указать с НДФЛ</span>
                    <Field component={FormCheck}
                           onChange={onSwitchNDFL}
                           type={'switch'}
                           label={''}
                           name={'NDFL'}
                           id={'NDFL'}
                    />
                    <span className={s.switchText+' '+rightTextColor()}>Без НДФЛ</span>
                </div>
                <div className={hideSalaryInput()}>
                <Field component={FormControl}
                       format={salaryFormat}
                       type={'text'}
                       label={<IconPlusTextString icon={rubles} text={salaryLabelText()}/>}
                       name={'Salary'}

                       id={'Salary'}/>
                </div>
            </Form>
        </div>
    )
}

const FormCheck: React.FC<any> = (props) => {
    return <Form.Check
        custom
        type={props.type}
        label={props.label}
        name={props.input.name}
        id={props.id}
        onChange={props.input.onChange}
        onClick={props.onClick}
        {...props.input}
    />
}

const FormControl: React.FC<any> = (props) => {
    return (
        <Form.Group>
            <Form.Row>
                <Col lg={2}>
                    <Form.Control
                        type="text"
                        placeholder="0"
                        onChange={props.input.onChange}
                        {...props.input}
                    />
                </Col>
                <Form.Label column>
                    {props.label}
                </Form.Label>
            </Form.Row>
        </Form.Group>
    )
}


const SalaryCalculatorFormRedux = reduxForm<{}, PropsType>({
    form: 'salaryCalculator',
    initialValues: {
        "formHorizontalRadios": '1'
    },
})(SalaryCalculatorForm)

export default SalaryCalculatorFormRedux