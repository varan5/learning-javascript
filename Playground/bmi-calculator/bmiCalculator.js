// BMI Calcultor App

// Program begins from: Line 59

const displayAppName = (appName) => {
    console.log(appName)
}

const bmiCalculatorHelper = (height, weight) => {
    if (typeof weight != 'number' && typeof height != 'number') {
        return -1
    }
    const bmiValue = weight / Math.pow(height, 2) // Bmi formula
    return Math.round(bmiValue * 100) / 100
}

const checkHealthUsingBmi = (bmiValue) => {
    if (typeof bmiValue !== 'number') {
        return -1
    }
    if (bmiValue < 18.5) {
        return 'Underweight'
    }
    if (bmiValue >= 18.5 && bmiValue < 24.9) {
        return 'Healthy'
    }
    if (bmiValue >= 24.9 && bmiValue < 30) {
        return 'Overweight'
    }
    return 'Suffering from obesity'
}

const wishUser = (userName) => {
    console.log(`Welocome ${userName}`)
}

const printBmiResult = (bmiValue, healthStatus, userName) => {
    console.log(`${userName}'s BMI value is: ${bmiValue}.`)
    console.log(`Your health status according to your BMI is: ${healthStatus}.`)
}

const bmiCalculatorApp = () => {
    
    displayAppName('BMI Calculator App')

    // This data will be taken from the user
    const usersHeight = 1.667
    const usersWeight = 50
    const userName = 'Tommy'

    if (typeof userName != 'string') {
        console.log('Incorrect format for user name')
        return -1
    }

    wishUser(userName)

    const bmiValue = bmiCalculatorHelper(usersHeight, usersWeight)
    const healthStatus = checkHealthUsingBmi(bmiValue)
    if (bmiValue !== -1 && healthStatus !== -1) {
        printBmiResult(bmiValue, healthStatus, userName)
    }
}

bmiCalculatorApp() // Program begins here
