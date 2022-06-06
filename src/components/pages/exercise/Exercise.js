import React, {useState, useEffect, useCallback} from 'react';
import './Exercise.css'
import { Card, Button, Form } from 'react-bootstrap';
import API from "../../../utils/API.js"
import ExerciseCard from "./ExerciseCard"

export default function Fitness({token, weekArray}) {
    const [thisWeek, setThisWeek] = useState([])
    const [formDate, setFormDate] = useState('');
    const [formType, setFormType] = useState('');
    const [formDuration, setFormDuration] = useState('');
    const [formRPE, setFormRPE] = useState('');
    const [formNotes, setFormNotes] = useState('');
    const [formObj, setFormObj] = useState({});
    const [deleteReq, setDeleteReq] = useState('');
    const [updateReq, setUpdateReq] = useState('');
    const [existingItem, setExistingItem] = useState('');

    useEffect(() => {
        API.getUserFitness(token).then((userData)=>{
            // console.log(userData)
            const fitnessArray = [];
            console.log(weekArray)
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);
                console.log(response)

                let newObj = {date: entry}

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const {id, date, activity_type, activity_duration, RPE, notes} = response;
                    newObj.id = id
                    newObj.activity_type = activity_type;
                    newObj.activity_duration = activity_duration;
                    newObj.RPE = RPE;
                    newObj.notes = notes;
                }
                fitnessArray.push(newObj)
            })
            console.log(fitnessArray);
            fitnessArray[0].day = 'Monday';
            fitnessArray[1].day = 'Tuesday';
            fitnessArray[2].day = 'Wednesday';
            fitnessArray[3].day = 'Thursday';
            fitnessArray[4].day = 'Friday';
            fitnessArray[5].day = 'Saturday';
            fitnessArray[6].day = 'Sunday';
            setThisWeek(fitnessArray)
        })
      }, [token])

    useEffect(() => {
        API.getOneUserFitness(token, formDate).then((res) => {
            console.log(res)
            if (res.id) {
                setFormType(res.activity_type);
                setFormDuration(res.activity_duration);
                setFormRPE(res.RPE);
                setFormNotes(res.notes);
                setExistingItem(true);
            } else {
                setFormType('');
                setFormDuration('');
                setFormRPE('');
                setFormNotes('');
                setExistingItem(false);
            }
        })
    }, [formDate])

      function handleFormSubmit(e) {
        e.preventDefault();
        if (formDate != '' && formType != '' && formDuration != '') {
            setFormObj({
                date: formDate,
                activity_type: formType,
                activity_duration: formDuration,
                RPE: formRPE,
                notes: formNotes
            })
            console.log('fitness form object', formObj)
        setFormDate('')
        setFormType('');
        setFormDuration('');
        setFormRPE('');
        setFormNotes('');
        setExistingItem(false);
        } else {
            alert("Please enter date, activity type and duraton")
        }
    }

    useEffect(()=> {
        // not triggering first block 
        if (existingItem == true) {
            API.updateFitnessEntry(token, formObj).then((res) => {
                console.log(res);
                console.log('Fitness entry updated')
            })
        } else if (existingItem == false) {
            API.postFitnessEntry(token, formObj).then((res) => {
                console.log(res);
                console.log('New fitness entry created')
            })
        }
        // NEED TO RELOAD CARDS
        setUpdateReq(true)
    }, [formObj])

    const sendDelete = useCallback(async () => {
        API.deleteFitnessEntry(token, formDate).then((response) => {
            console.log(response)
        })
        // NEED TO RELOAD CARDS
        setUpdateReq(true)
    })

    return (
        <Card className="fitness">
            <h1>Exercise</h1>
            <h2>Your Goals</h2>

            <br />
            <Form 
                onSubmit={handleFormSubmit}
                >
                <h2>Report fitness data</h2>
                    <Card className="fitnessForm">
                        <Form.Label htmlFor="formDate">
                            Choose date:
                        </Form.Label>
                        <Form.Check 
                            value={formDate}
                            type="date" 
                            id="formDate" 
                            name="formDate"
                            onChange={(e) => setFormDate(e.target.value)}/>
                        <Form.Label htmlFor="formType">
                            What type of exercise did you complete?
                        </Form.Label>
                        <Form.Check 
                            value={formType}
                            type="text" 
                            id="formType" 
                            name="formType" 
                            onChange={(e) => setFormType(e.target.value)}/>
                        <Form.Label htmlFor="formDuration">
                            How long did you exercise for (in minutes)?
                        </Form.Label>
                        <Form.Check 
                            value={formDuration}
                            type="number" 
                            id="formDuration" 
                            name="formDuration" 
                            onChange={(e) => setFormDuration(e.target.value)}/>
                        <Form.Label htmlFor="formRPE">
                            On an Rate of Perceived Exertion Scale (RPE) from 0 (easy) to 10 (extremely difficult), how hard did you work?
                        </Form.Label>
                        <Form.Check 
                            value={formRPE}
                            type="number" 
                            min="0"
                            max='10'
                            id="formRPE" 
                            name="formRPE" 
                            onChange={(e) => setFormRPE(e.target.value)}/>
                        <Form.Label htmlFor="formNotes">
                            Notes from your workout:
                        </Form.Label>
                        <Form.Check 
                            value={formNotes}
                            type="text" 
                            id="formNotes" 
                            name="formNotes" 
                            onChange={(e) => setFormNotes(e.target.value)}/>
                        <br />
                        <Button type="submit">Submit</Button>
                        { (existingItem == true) ? (
                            <Button type="button"
                            onClick={sendDelete}>Delete</Button>
                        ) : (
                            <></>
                        )}
                    </Card>
                </Form>

            <br />
            <h3>This week's fitness reporting: </h3>
            <ExerciseCard
            results={thisWeek}
                />
        </Card>
    );
}