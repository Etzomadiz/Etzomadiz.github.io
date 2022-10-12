from datetime import date
from math import remainder
from urllib import request
from flask import Flask, render_template, request
import datetime

app = Flask(__name__)
global studentOrganisationDetails
studentOrganisationDetails = {1: 'AA', 2: 'BB',3: 'CC', 4: 'DD', 5: 'EE'}
# Assign default 5 values to studentOrganisationDetails for Application  3.



@app.get('/')
def index():
    # Complete this function to get current date and time assign this value to currentDate, display this data on index.html
    now = datetime.datetime.now()
    currentDate = now.strftime("%d/%m/%Y, %H:%M:%S")
    return render_template('index.html', currentDate=currentDate)


@app.get('/calculate')
def displayNumberPage():
    # Complete this function to display form.html page
    return render_template('form.html')


@app.route('/calculate', methods=['POST'])
def checkNumber():
    # Get Number from form and display message according to number
    # Display "Number {Number} is even" if given number is even on result.html page
    # Display "Number {Number} is odd" if given number is odd on result.html page
    # Display "No number provided" if value is null or blank on result.html page
    # Display "Provided input is not an integer!" if value is not a number on result.html page
    global number
    global name
    
    try:
        number = request.form['number']
        if int(number) % 2 == 0:
            name = "even"
        elif (number):
            name = "odd"
    except:
        name = "not an int or number."
    return render_template('result.html',number= number, name = name)

    # Write your to code here to check whether number is even or odd and render result.html page


@app.get('/addStudentOrganisation')
def displayStudentForm():
    # Complete this function to display studentFrom.html page
    return render_template('studentForm.html')


@app.route('/addStudentOrganisation', methods=['POST'])
def displayRegistrationPage():
    # Get student name and organisation from form.
    studentName = request.form['name']

    # Append this value to studentOrganisationDetails
    studentOrganisationDetails['name'] = studentName
    # Display studentDetails.html with all students and organisations
    return render_template('StudentDetails.html',name = studentName)