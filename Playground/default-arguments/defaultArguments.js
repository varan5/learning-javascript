
// Here, default arguments are provided, to still run the program, even if their are incomplete or no arguments passed
// Default arguments give the parameter values, a default value

const wishUser = (userName='Anonymous', currentTime="Unavailable") => {
    console.log(`Welcome ${userName}`)
    console.log(`Current-time: ${currentTime}`)
}

wishUser('Tommy', '9 am')
wishUser('Micheal')
wishUser()